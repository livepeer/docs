export const daydreamBlogData = [
{
  title: `Training-Free Real-Time Control for Autoregressive Video Generation`,
  href: `https://blog.daydream.live/training-free-real-time-control-for-autoregressive-video-generation/`,
  author: `By Daydream Team`,
  content: `<!--kg-card-begin: html-->
<!--
  Ghost Blog Import - Paste this HTML into Ghost's editor (HTML card or full HTML mode)
  Title: Training-Free Real-Time Control for Autoregressive Video Generation
  Author: @RyanOnTheInside
  Tags: Technical Deep Dive, Video Generation, VACE, Real-Time, Autoregressive

  MEDIA MAPPING (verified against DOM order on Framer page):
  - 3 content images (diagrams) from framerusercontent.com/images/
  - 12 videos from framerusercontent.com/assets/
  - Excluded: Daydream logo, author avatar, footer community graphic
-->

<!-- Hero demo video (DOM position: after intro, before Background) -->
<figure class="kg-card kg-video-card">
  <video src="https://framerusercontent.com/assets/MdWysoRYd8jlEuI4JVT4Zu8OQw.mp4" controls playsinline muted loop></video>
</figure>


<p>Autoregressive video generation models can stream video in real-time, but they lack the control capabilities that batch models have: reference guidance, structural conditioning, selective editing. Building these from scratch would require extensive retraining. What if you could adapt existing control mechanisms instead?</p>

<p>This post describes an adaptation of VACE (Video All-in-one Creation and Editing, Alibaba, ICCV 2025) for real-time autoregressive video generation. The adaptation enables reference-guided generation, structural conditioning, inpainting, and temporal extension in streaming contexts &#x2014; using existing pretrained VACE weights without additional training.</p>

<p><em>All demos generated in real-time with FPS overlay showing actual generation speed per chunk. Try it yourself in Daydream Scope.</em></p>

<h2>Background</h2>

<p>Real-time video generation models like LongLive, Krea Real-Time, and StreamDiffusion V2 generate video in chunks using causal attention. Each chunk attends only to itself and past frames, enabling KV caching and bounded memory usage.</p>

<p>VACE provides unified video control for batch-oriented diffusion models:</p>

<ul>
  <li><strong>Reference-to-Video (R2V):</strong> Style/subject guidance from reference images</li>
  <li><strong>Video-to-Video (V2V):</strong> Structural control via depth, pose, optical flow, edges</li>
  <li><strong>Masked Video-to-Video (MV2V):</strong> Inpainting, outpainting, temporal extension</li>
  <li><strong>Task Composition:</strong> Arbitrary combinations of the above</li>
</ul>

<p>However, VACE assumes bidirectional attention and processes full video sequences at once. This is incompatible with streaming generation, which requires fixed chunk sizes and causal attention patterns.</p>

<p>This work adapts VACE&apos;s architecture to work within these constraints while preserving its control capabilities.</p>

<h2>How VACE Works</h2>

<p>Before diving into the adaptation, it helps to understand VACE&apos;s core architecture. VACE unifies video control through three optional inputs that combine with a text prompt:</p>

<figure class="kg-card kg-table-card">
<table>
  <thead>
    <tr><th>Input</th><th>Purpose</th><th>Example Use</th></tr>
  </thead>
  <tbody>
    <tr><td>src_video</td><td>Conditioning signal or video to edit</td><td>Depth maps, pose skeletons, video for inpainting</td></tr>
    <tr><td>src_mask</td><td>Defines reactive vs preserved regions</td><td>White = generate, Black = preserve</td></tr>
    <tr><td>src_ref_images</td><td>Style/subject guidance</td><td>Character reference, style transfer source</td></tr>
  </tbody>
</table>
</figure>

<h3>The Mask System: Reactive and Inactive Regions</h3>

<p>VACE&apos;s mask input is central to its editing capabilities. The mask defines two distinct regions:</p>

<ul>
  <li><strong>White regions (reactive):</strong> The model generates new content here</li>
  <li><strong>Black regions (inactive):</strong> The model preserves the original video content</li>
</ul>

<p>For inpainting, this means you can mask a person in a video (white), provide a new prompt, and VACE regenerates only that region while keeping the background (black) intact. For outpainting, the original video becomes the inactive region while the expanded canvas becomes reactive.</p>

<p>This dual-stream approach encodes the two regions through separate paths to maintain isolation between preserved and generated content.</p>

<h3>The Hint Injection Pipeline</h3>

<p>Regardless of task type, VACE follows the same processing pattern:</p>

<!-- Image: hint injection pipeline diagram (789x559) -->
<figure class="kg-card kg-image-card">
  <img src="https://framerusercontent.com/images/6ed9axaLjIohUpjjejYkkw62aE.png" alt="Training-Free Real-Time Control for Autoregressive Video Generation">
</figure>

<p>The VACE Blocks process the conditioning context and produce &quot;hints&quot; &#x2014; additive signals injected into the main DiT pathway via zero-initialized projections. This architecture means VACE capabilities are layered on top of the base model rather than modifying it directly.</p>

<h3>What Transfers to Streaming</h3>

<p>Most of VACE&apos;s primitives work in streaming contexts with the same core mechanisms:</p>

<figure class="kg-card kg-table-card">
<table>
  <thead>
    <tr><th>Component</th><th>Streaming Compatibility</th><th>Notes</th></tr>
  </thead>
  <tbody>
    <tr><td>Masks</td><td>&#x2705; Core mechanism transfers</td><td>Requires cache management for different autoencoder architectures like TAE</td></tr>
    <tr><td>Control signals (depth, pose)</td><td>&#x2705; Per-chunk processing</td><td>Same encoding path</td></tr>
    <tr><td>Dual-stream encoding</td><td>&#x2705; Shared mechanism</td><td>Cache separation prevents contamination</td></tr>
    <tr><td>Hint injection</td><td>&#x2705; Unchanged</td><td>Residual addition works identically</td></tr>
    <tr><td>Reference images</td><td>&#x26A0;&#xFE0F; Requires adaptation</td><td>Architectural change needed</td></tr>
  </tbody>
</table>
</figure>

<p>The mask system, control signals (depth, pose, flow, scribble), and hint injection all operate with the same fundamental mechanisms. Streaming contexts require some cache management adaptations, but no architectural changes to these components. The exception is reference image handling &#x2014; and this is where the core adaptation work was needed.</p>

<h2>The Architectural Problem</h2>

<h3>How Original VACE Handles References</h3>

<p>VACE concatenates reference frames directly into the diffusion latent space:</p>

<pre><code>latent = [ref_frame_1 | ref_frame_2 | video_frame_1 | video_frame_2 | ...]</code></pre>

<p>The model processes this combined sequence with bidirectional attention, then strips the reference frames from the output after denoising.</p>

<p>This approach has three incompatibilities with streaming:</p>

<ol>
  <li><strong>Variable sequence lengths:</strong> Different tasks require different numbers of reference frames, preventing fixed-size chunk processing</li>
  <li><strong>KV cache contamination:</strong> Concatenated references become part of the model&apos;s causal history; they&apos;re cached and attended to as if they were previously generated frames. This is semantically wrong for conditioning (references should guide generation, not be treated as historical context). And it&apos;s irreversible: RoPE positional encodings are baked into cached K/V tensors, so removing references would require recomputing the entire cache.</li>
  <li><strong>Post-processing overhead:</strong> Reference frames must be identified and removed after each denoising step</li>
</ol>

<h3>The Adaptation: Separate Conditioning Space</h3>

<p>The adaptation moves reference frames out of the diffusion latent space and into a parallel conditioning pathway:</p>

<!-- Image: adapted architecture diagram (803x286) -->
<figure class="kg-card kg-image-card">
  <img src="https://framerusercontent.com/images/GFxSWBg4KDKvwVJbt5CFscDc.png" alt="Training-Free Real-Time Control for Autoregressive Video Generation">
</figure>

<p>Reference frames are processed by separate transformer blocks (Context Blocks) that generate &quot;hints&quot; &#x2014; additive signals injected into the main video pathway via scaled residuals.</p>

<p>This preserves fixed chunk sizes: video latents maintain consistent dimensions (typically 3 latent frames &#x2192; 12 output frames, depending on the base pipeline), regardless of how many references are provided.</p>

<h3>Why Pretrained Weights Transfer</h3>

<p>The publicly released VACE weights use Context Adapter Tuning: the base DiT is frozen, and separate Context Blocks are trained to process references and inject hints. This is the architecture we adapt.</p>

<p>The Context Blocks are already trained to:</p>

<ul>
  <li>Encode reference information</li>
  <li>Generate hints that influence the main pathway</li>
  <li>Apply zero-initialized projections for gradual influence</li>
</ul>

<h3>What Changed</h3>

<figure class="kg-card kg-table-card">
<table>
  <thead>
    <tr><th>Component</th><th>Original VACE</th><th>Streaming Adaptation</th></tr>
  </thead>
  <tbody>
    <tr><td>Reference input location</td><td>Concatenated into noisy latents</td><td>Separate vace_context tensor</td></tr>
    <tr><td>Context Block inputs</td><td>Full sequence (refs + video)</td><td>References only</td></tr>
    <tr><td>Hint injection target</td><td>Mixed ref+video sequence</td><td>Video-only sequence</td></tr>
    <tr><td>Attention pattern</td><td>Bidirectional</td><td>Causal</td></tr>
  </tbody>
</table>
</figure>

<p>The Context Blocks themselves are unchanged. They process references and produce hints using the same weights. The adaptation changes where those hints are injected.</p>

<h3>Zero-Initialized Projections</h3>

<p>VACE uses zero-initialized linear projections for hint injection. At initialization, hints contribute nothing. The trained weights encode how much influence to apply. These learned scaling factors remain valid in the adapted architecture.</p>

<h3>How Reference Processing Works</h3>

<p>All VACE modes &#x2014; temporal extension, structural control, inpainting, and R2V &#x2014; share a common reference processing pipeline:</p>

<ol>
  <li><strong>Separate encoding:</strong> References are VAE-encoded into a parallel vace_context tensor, kept separate from video latents</li>
  <li><strong>Context Block processing:</strong> Parallel transformer blocks process references and generate &quot;hints&quot;</li>
  <li><strong>Hint injection:</strong> Hints are added to the main video pathway via scaled residuals (x = x + hint * scale)</li>
  <li><strong>Strength control:</strong> context_scale (0.0&#x2013;2.0) controls influence strength across all modes</li>
</ol>

<p>The same mechanism drives depth-guided generation, first-frame extension, inpainting, and style transfer. The only difference between modes is what gets encoded as the reference.</p>

<h2>Capabilities</h2>

<h3>Video-to-Video with Control Signals</h3>

<p>Structural guidance from control signals processed per-chunk.</p>

<p>Supported signals (3-channel RGB from standard annotators):</p>

<figure class="kg-card kg-table-card">
<table>
  <thead>
    <tr><th>Signal</th><th>Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td>Depth maps</td><td>Scene geometry</td></tr>
    <tr><td>Pose/skeleton</td><td>Motion transfer</td></tr>
    <tr><td>Optical flow</td><td>Motion dynamics</td></tr>
    <tr><td>Scribble/edge</td><td>Structural guides</td></tr>
    <tr><td>Gray</td><td>Colorization (preserve luminance)</td></tr>
    <tr><td>Layout</td><td>Object placement via bounding boxes</td></tr>
  </tbody>
</table>
</figure>

<p>Control frames are processed per-chunk using existing VACE control encoder weights.</p>

<h4>Optical Flow Control</h4>

<p>Optical flow input provides another mode of control. Note that the flow helps determine the orientation of the subject. This is with a &apos;dissolve&apos; LoRA, and the abstract particles from the style are also influenced by the flow control.</p>

<!-- Video: Optical flow with dissolve LoRA -->
<figure class="kg-card kg-video-card">
  <video src="https://framerusercontent.com/assets/hXKZGzzo5oZ4SKren2dwW4YqhIg.mp4" controls playsinline muted loop></video>
  <figcaption>Optical flow control with dissolve LoRA</figcaption>
</figure>

<p>Another example of optical flow with a different prompt.</p>

<!-- Video: Optical flow alternate prompt -->
<figure class="kg-card kg-video-card">
  <video src="https://framerusercontent.com/assets/xIl32CuKncr4KXgxTLjgx6LphWg.mp4" controls playsinline muted loop></video>
  <figcaption>Optical flow with a different prompt</figcaption>
</figure>

<h4>Depth Control</h4>

<p>Left: input video. Center: extracted depth maps. Right: generated output following structural guidance.</p>

<!-- Video: Depth control demo -->
<figure class="kg-card kg-video-card">
  <video src="https://framerusercontent.com/assets/MdWysoRYd8jlEuI4JVT4Zu8OQw.mp4" controls playsinline muted loop></video>
  <figcaption>Depth control demo</figcaption>
</figure>

<h4>Scribble/Edge Control</h4>

<p>Scribble contours extracted from video (left) provide loose structural guidance. The model interprets the edges while adding detail and style. VACE context scale: 0.9 (higher adherence to control signal).</p>

<!-- Video: Scribble at context scale 0.9 -->
<figure class="kg-card kg-video-card">
  <video src="https://framerusercontent.com/assets/df309Ht7lC6MZMC4vMMkfi3FGc.mp4" controls playsinline muted loop></video>
  <figcaption>Scribble control at context scale 0.9</figcaption>
</figure>

<p>Same scribble input with context scale: 0.5 (lower adherence). The model takes more creative freedom while still respecting the general structure. Lower scales allow the model to deviate from the control signal, enabling more stylistic variation.</p>

<!-- Video: Scribble at context scale 0.5 (same file, shown twice on original page) -->
<figure class="kg-card kg-video-card">
  <video src="https://framerusercontent.com/assets/df309Ht7lC6MZMC4vMMkfi3FGc.mp4" controls playsinline muted loop></video>
  <figcaption>Scribble control at context scale 0.5</figcaption>
</figure>

<h4>Gray Control</h4>

<p>Grayscale input can recolor input videos in targeted ways.</p>

<!-- Video: Gray/colorization control -->
<figure class="kg-card kg-video-card">
  <video src="https://framerusercontent.com/assets/ExwQAXVn6XZUOiLQC1iZL6qodG4.mp4" controls playsinline muted loop></video>
  <figcaption>Gray/colorization control</figcaption>
</figure>

<h3>Temporal Extension</h3>

<p>Generate video connecting to provided keyframes. Reference frames appear in the output.</p>

<p>Modes:</p>

<ul>
  <li><strong>firstframe</strong> &#x2014; reference is first frame, generate continuation (useful for animating a static image)</li>
  <li><strong>lastframe</strong> &#x2014; reference is last frame, generate lead-in (useful for creating an intro to a specific endpoint)</li>
  <li><strong>firstlastframe</strong> &#x2014; two references, generate interpolation (useful for animating between storyboard keyframes)</li>
</ul>

<p>Reference frames are encoded and placed at temporal boundaries. The model generates frames to fill the gap while maintaining coherence with anchors.</p>

<!-- Video: Temporal extension / image-to-video -->
<figure class="kg-card kg-video-card">
  <video src="https://framerusercontent.com/assets/uR9C0L2RAgftQHyF40TIlIA5vxI.mp4" controls playsinline muted loop></video>
  <figcaption>Image-to-video generation: a single reference image (left) is used as the first frame, and the model generates a coherent video continuation (right).</figcaption>
</figure>

<h3>Inpainting &amp; Outpainting</h3>

<p>Selective region generation with masked areas regenerated while preserving the rest.</p>

<h4>Inpainting</h4>

<ul>
  <li><strong>Static masks</strong> &#x2014; same region masked every frame (e.g., fixed bounding box)</li>
  <li><strong>Dynamic masks</strong> &#x2014; mask varies per frame; real-time segmentation systems like SAM3 integrate well</li>
</ul>

<h4>Outpainting</h4>

<p>Outpainting is masked video generation where the original image/video region is the inactive (preserved) area, and the expanded canvas is the reactive (generated) area.</p>

<p>Dual-stream encoding separates reactive (to be generated) and inactive (to be preserved) regions. Each stream uses its own VAE encoder cache to prevent temporal contamination. Preserved regions maintain full quality without blending artifacts at mask boundaries.</p>

<h4>Character Transformation</h4>

<!-- Video: Character transformation -->
<figure class="kg-card kg-video-card">
  <video src="https://framerusercontent.com/assets/xMISZNoBIlq8jCa98AaTjywIyhA.mp4" controls playsinline muted loop></video>
  <figcaption>Character transformation via image-to-video generation</figcaption>
</figure>

<h4>Regional LoRA Application</h4>

<p>Combining inpainting with LoRA style transfer. The same mask is used, but a Studio Ghibli LoRA transforms the person into a stylized character while preserving the background.</p>

<!-- Video: Regional LoRA -->
<figure class="kg-card kg-video-card">
  <video src="https://framerusercontent.com/assets/HFHGuhsIB3XqNo1AShos48yHfM.mp4" controls playsinline muted loop></video>
  <figcaption>Regional LoRA &#x2014; Studio Ghibli style transfer via inpainting mask</figcaption>
</figure>

<h4>Outpainting Example</h4>

<p>Here we extend the close up shot of the waterfall. Compare to the temporal extension video above.</p>

<!-- Video: Outpainting waterfall -->
<figure class="kg-card kg-video-card">
  <video src="https://framerusercontent.com/assets/BZUvFZphox3dd3WpHAfWbvQJ6DA.mp4" controls playsinline muted loop></video>
  <figcaption>Outpainting &#x2014; extending the waterfall shot</figcaption>
</figure>

<h3>Reference-to-Video (R2V) &#x2014; Experimental</h3>

<p>Reference images (1&#x2013;3) guide style, subject, or character appearance. References influence generation but do not appear in output frames &#x2014; think style transfer rather than keyframe interpolation.</p>

<p>R2V uses the same hint injection pipeline described above, but with a key difference: references provide persistent stylistic guidance across all chunks rather than anchoring specific frames.</p>

<p><strong>Note:</strong> R2V is significantly more experimental than other capabilities. Detail preservation and reference fidelity are noticeably reduced compared to batch VACE due to causal attention constraints. The causal attention pattern and per-chunk processing fundamentally limit how well references can guide generation &#x2014; R2V currently works better as coarse style guidance rather than precise subject/character transfer.</p>

<h3>Task Composition</h3>

<p>Capabilities combine freely. The system infers mode from provided inputs:</p>

<ul>
  <li>Multiple reference images &#x2192; R2V</li>
  <li>Video + mask &#x2192; MV2V</li>
  <li>Control signal &#x2192; V2V</li>
  <li>Combinations &#x2192; Composed mode</li>
</ul>

<figure class="kg-card kg-table-card">
<table>
  <thead>
    <tr><th>Composition</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td>R2V + Depth</td><td>Style guidance with scene geometry</td></tr>
    <tr><td>R2V + Inpainting</td><td>Style-consistent region replacement</td></tr>
    <tr><td>R2V + Pose</td><td>Character animation with reference appearance</td></tr>
    <tr><td>Extension + Outpainting</td><td>Continue video while expanding canvas</td></tr>
  </tbody>
</table>
</figure>

<p>No explicit mode parameter required.</p>

<h4>Layout/Trajectory Control</h4>

<p>Point-based subject control: a subject image is used to establish identity in the first frame (extension mode), then trajectory control guides the subject&apos;s position in subsequent chunks. The layout signal (white background with black contour) indicates where the subject should appear.</p>

<!-- Video: Layout/trajectory control -->
<figure class="kg-card kg-video-card">
  <video src="https://framerusercontent.com/assets/GQ0km3mNU7xWbEOKNphny95E.mp4" controls playsinline muted loop></video>
  <figcaption>Layout/trajectory control &#x2014; point-based subject positioning</figcaption>
</figure>

<h2>Implementation Details</h2>

<p>The following architecture has been implemented in Daydream Scope.</p>

<h3>Architecture (per-chunk processing)</h3>

<!-- Image: Architecture diagram -->
<figure class="kg-card kg-image-card">
  <img src="https://framerusercontent.com/images/57Q4rnHCGsCkWwKGDtF0RyADj2o.png" alt="Training-Free Real-Time Control for Autoregressive Video Generation">
</figure>

<figure class="kg-card kg-table-card">
<table>
  <thead>
    <tr><th>Design Decision</th><th>Rationale</th></tr>
  </thead>
  <tbody>
    <tr><td>Separate VAE encoder caches</td><td>Dual-stream encoding without temporal contamination</td></tr>
    <tr><td>Zero-initialized hint projections</td><td>Safe composition with LoRA, quantization</td></tr>
    <tr><td>Implicit mode detection</td><td>API infers mode from inputs</td></tr>
    <tr><td>Crop-to-fill resizing</td><td>Avoids padding artifacts</td></tr>
    <tr><td>Cached hint computation</td><td>Reference hints computed once, reused across chunks</td></tr>
  </tbody>
</table>
</figure>

<h3>Pipeline Compatibility</h3>

<p>All Wan 2.1 based autoregressive pipelines in the codebase support VACE via the VACEEnabledPipeline mixin:</p>

<figure class="kg-card kg-table-card">
<table>
  <thead>
    <tr><th>Base pipeline</th><th>Status</th></tr>
  </thead>
  <tbody>
    <tr><td>LongLive</td><td>Full support</td></tr>
    <tr><td>StreamDiffusion V2</td><td>Full support</td></tr>
    <tr><td>MemFlow</td><td>Full support</td></tr>
    <tr><td>Krea Realtime Video</td><td>Full support</td></tr>
    <tr><td>Reward Forcing</td><td>Full support</td></tr>
  </tbody>
</table>
</figure>

<h3>Performance</h3>

<p>Benchmarks measured on single NVIDIA RTX 5090 32GB. Configuration: LongLive 1.3B (bfloat16), 368&#xD7;640 resolution, 4 denoising steps (timesteps [1000, 750, 500, 250]), 12 frames per chunk, TAE, SageAttention enabled. Numbers collected from the VACE test script; FPS is measured per-chunk and burned into demo videos as overlay. These are inference-only measurements; expect a small throughput gap when running in Daydream Scope due to UI and streaming overhead.</p>

<h4>Latency (per chunk, 12 frames)</h4>

<figure class="kg-card kg-table-card">
<table>
  <thead>
    <tr><th>Component</th><th>Avg Latency</th><th>Avg Throughput</th><th>Peak Throughput</th></tr>
  </thead>
  <tbody>
    <tr><td>LongLive + Depth Control</td><td>570ms</td><td>20.6 fps</td><td>22.5 fps</td></tr>
    <tr><td>LongLive + Scribble Control</td><td>570ms</td><td>20.6 fps</td><td>22.5 fps</td></tr>
    <tr><td>LongLive + Inpainting</td><td>570ms</td><td>20.6 fps</td><td>22.5 fps</td></tr>
    <tr><td>LongLive + Layout/Trajectory</td><td>700ms</td><td>20.6 fps</td><td>22.5 fps</td></tr>
    <tr><td>LongLive + Extension (I2V)</td><td>400ms</td><td>20.6 fps</td><td>22.5 fps</td></tr>
    <tr><td>LongLive + Inpainting + LoRA</td><td>900ms</td><td>20.6 fps</td><td>22.5 fps</td></tr>
  </tbody>
</table>
</figure>

<h3>Comparison to Alternatives</h3>

<p>The primary alternative for real-time controlled video generation is MotionStream, a fully distilled model with built-in trajectory control. MotionStream is purpose-built for a single control modality and achieves higher quality for that specific use case. However, it requires full model retraining for each control type.</p>

<p>This VACE adaptation trades some quality for versatility: a single set of pretrained weights enables depth control, scribble guidance, inpainting, layout control, and arbitrary combinations &#x2014; without retraining. The approach is more extensible to new control types as the community develops them for batch VACE.</p>

<h2>Limitations &amp; Known Issues</h2>

<h3>Quality Considerations</h3>

<ul>
  <li><strong>Temporal coherence:</strong> Can degrade over extended generations (100+ frames) without re-anchoring or keyframe injection &#x2014; this is largely a consequence of autoregression in general</li>
  <li><strong>Control signal variance:</strong> Some signals (depth, scribble, layout) work reliably, while others need more tuning</li>
  <li><strong>First+last frame extension in combination:</strong> Reduced utility when compared to batch paradigm due to small chunk sizes in streaming contexts</li>
</ul>

<h3>Known Failure Cases</h3>

<p><strong>Reference-to-Video (R2V):</strong> This is the most problematic capability in the streaming adaptation. Detail preservation and reference fidelity are severely degraded compared to batch VACE. The causal attention pattern and per-chunk processing fundamentally limit how well references can guide generation. R2V currently works better as coarse style guidance rather than precise subject/character transfer. Further architectural work is needed to approach batch-quality R2V in streaming contexts.</p>

<h3>Coverage Gaps</h3>

<p>The batch VACE ecosystem has accumulated extensive community-driven examples and techniques over months of use &#x2014; various control signal combinations, preprocessing pipelines, and creative workflows. Many remain unexplored in the streaming context.</p>

<h2>Summary</h2>

<p>By moving reference frames from the diffusion latent space into a parallel conditioning pathway, this adaptation preserves the fixed chunk sizes and KV caching that autoregressive models require &#x2014; while reusing existing VACE weights directly.</p>

<p>Key contributions:</p>

<ul>
  <li><strong>Pretrained weight transfer:</strong> Existing VACE weights work directly in streaming contexts</li>
  <li><strong>Maintained capabilities:</strong> Structural control, masked generation, and temporal extension all function in real-time</li>
  <li><strong>Model agnostic:</strong> The composition-based design adapts to different Wan1.3b and Wan14b based autoregressive models</li>
  <li><strong>Practical performance:</strong> 20+ fps generation with control on consumer hardware at modest resolutions like 368x640, faster with LightVAE</li>
</ul>
<!--kg-card-end: html-->`,
  datePosted: `Mar 20, 2026`,
  img: `https://blog.daydream.live/content/images/2026/03/Screenshot-2026-03-19-at-1.12.34---PM.png`,
  excerpt: `Autoregressive video generation models can stream video in real-time, but they lack the control capabilities that batch models have: reference guidance, structural conditioning, selective editing. Building these from scratch would require extensive retraining. What if you could adapt existing control mechanisms instead? This post describes an adaptation of VACE (Video All-in-one Creation and Editing, Alibaba, ICCV 2025) for real-time autoregressive video generation. The adaptation enables refere`,
  readingTime: 11
},
{
  title: `Rewinding the Realtime Video AI Summit`,
  href: `https://blog.daydream.live/rewinding-the-realtime-video-ai-summit/`,
  author: `By Daydream Team`,
  content: `<p>On October 20, 2025, Daydream brought together the leading voices in real-time AI and generative video by hosting the first-of-its-kind<a href="https://realtime-video-ai-summit.lovable.app/?ref=blog.livepeer.org"><u>&#xA0;</u>Realtime Video AI Summit</a>.</p><p>Held at Gray Area in San Francisco during&#xA0;<em>Open Source AI Week,</em>&#xA0;the summit united over 100 researchers, developers, and creative technologists from around the world to exchange ideas and explore the future of open, real-time video AI.</p><p>Across a full day of talks, installations, and workshops, the summit spanned topics from new diffusion pipelines and world-model research, to creative workflows and live performance systems, all reflecting how quickly the video field is moving and the necessity for a space for open collaboration.</p><p>The program featured key researchers in video AI research:</p><ul><li>&#x201C;StreamDiffusion V2&#x201D; by<a href="https://www.chenfengx.com/?ref=blog.livepeer.org"><u>&#xA0;</u>Chenfeng Xu (UT Austin)</a></li><li>&#x201C;Towards Video World Models&#x201D; by&#xA0;<a href="https://www.xunhuang.me/?ref=blog.livepeer.org">Xun Huang (CMU)</a></li><li>&#x201C;StreamV2V and Recent Advancements&#x201D; by<a href="https://jeff-liangf.github.io/projects/streamv2v/?ref=blog.livepeer.org"><u>&#xA0;</u>Jeff Liang (Meta)</a></li><li>&quot;StreamDiffusionTD&quot; by&#xA0;<a href="https://dotsimulate.com/?ref=blog.livepeer.org">DotSimulate</a></li></ul><p>Missed the event IRL?&#xA0;<a href="https://www.youtube.com/watch?v=yeoGzSWdNGM&amp;list=PL6FOXk46STqGP0iNrOvVA14_YPg3u_S6X&amp;ref=blog.livepeer.org"><strong>Watch all the recordings here!</strong></a></p><figure class="kg-card kg-image-card kg-card-hascaption"><img src="https://blog.daydream.live/content/images/2025/10/002.jpg" class="kg-image" alt="Rewinding the Realtime Video AI Summit" loading="lazy" width="1500" height="1007" srcset="https://blog.daydream.live/content/images/size/w600/2025/10/002.jpg 600w, https://blog.daydream.live/content/images/size/w1000/2025/10/002.jpg 1000w, https://blog.daydream.live/content/images/2025/10/002.jpg 1500w" sizes="(min-width: 720px) 720px"><figcaption><span style="white-space: pre-wrap;">Eric Tang - Founder of Daydream</span></figcaption></figure><p>What began as an open experiment has developed into a growing ecosystem where researchers, artists, and builders work side by side on the future of live AI media.</p><blockquote><em>&#x201C;WOW what a phenomenal event you hosted today. I&#x2019;ve attended a lot of events lately, but the speakers you curated helped shed my jadedness and genuinely made me excited about how AI can make us more human.&#x201D;</em><br>- Stacie C.</blockquote><p>And this is only the beginning. Planning for the next&#xA0;<strong>Realtime Video AI Summit 2026</strong>&#xA0;is already underway, with expanded research tracks and new opportunities for collaboration.</p><p>If you&#x2019;re developing new world models, building open video tools, or exploring creative applications of real-time video AI, this is your chance to showcase your work.</p><div class="kg-card kg-callout-card kg-callout-card-blue"><div class="kg-callout-emoji">&#x1F4E9;</div><div class="kg-callout-text"><b><strong style="white-space: pre-wrap;">Interested in sponsoring or speaking at our next Realtime Video AI Summit? </strong></b><a href="https://tally.so/r/n9LEx5?ref=blog.livepeer.org"><u><b><strong class="underline" style="white-space: pre-wrap;">Sign up here</strong></b></u></a><b><strong style="white-space: pre-wrap;">.</strong></b></div></div><p>Follow us on Twitter: <a href="https://x.com/DaydreamLiveAI?ref=blog.daydream.live">https://x.com/DaydreamLiveAI</a><br>Join us on Discord: <a href="https://discord.gg/m75kFvKN?ref=blog.daydream.live">https://discord.gg/m75kFvKN</a></p>`,
  datePosted: `Oct 29, 2025`,
  img: `https://blog.daydream.live/content/images/2025/10/001.jpg`,
  excerpt: `On October 20, 2025, Daydream brought together the leading voices in real-time AI and generative video by hosting the first-of-its-kind&#xA0;Realtime Video AI Summit.Held at Gray Area in San Francisco during&#xA0;Open Source AI Week,&#xA0;the summit united over 100 researchers, developers, and creative technologists from around the world to exchange ideas and explore the future of open, real-time video AI.Across a full day of talks, installations, and workshops, the summit spanned topics from ne`,
  readingTime: 1
},
{
  title: `Real-Time Generative Art: A Guide to StreamDiffusion and TouchDesigner`,
  href: `https://blog.daydream.live/real-time-generative-art-a-guide-to-streamdiffusion-and-touchdesigner/`,
  author: `By Livepeer Infraservice`,
  content: `<p>StreamDiffusion is a cutting-edge, real-time diffusion pipeline that is revolutionizing the creation of interactive and generative visual content. This open-source technology offers significant performance advantages over traditional diffusion-based systems, making it a powerful tool for artists, developers, and creators. When combined with platforms like <a href="https://daydream.live/?ref=blog.daydream.live" rel="noreferrer">TouchDesigner</a>, StreamDiffusion opens up a new realm of possibilities for real-time video generation, interactive installations, and immersive experiences.</p><h2 id="key-features-of-streamdiffusion"><strong>Key Features of StreamDiffusion</strong></h2><p>At its core, <a href="https://daydream.live/?ref=blog.daydream.live" rel="noreferrer">StreamDiffusion</a> is designed for speed and efficiency. Its key technical features include:</p><ul><li>Stream Batch: A novel approach to denoising that processes data in a continuous stream, enabling real-time generation.</li><li>Residual Classifier-Free Guidance: A technique that reduces computational costs without sacrificing output quality.</li><li>Stochastic Similarity Filter: A feature that improves GPU efficiency by filtering out unnecessary computations.</li><li>Input-Output Queue: A system that parallelizes the streaming process for smoother and faster performance.</li><li>Model Acceleration Tools: Various tools and techniques to accelerate the performance of the diffusion models.</li></ul><h2 id="integrating-streamdiffusion-with-touchdesigner-streamdiffusiontd"><strong>Integrating StreamDiffusion with TouchDesigner: StreamDiffusionTD</strong></h2><p>While StreamDiffusion is a powerful Python-based tool, its integration into visual development platforms like TouchDesigner can be complex. To simplify this process, Lyell Hintz aka @DotSimulate created StreamDiffusionTD, a TouchDesigner operator that encapsulates all of StreamDiffusion&apos;s features into a single, user-friendly component.</p><p>StreamDiffusionTD connects real-time inputs, such as audio, sensors, and camera feeds, to the StreamDiffusion pipeline, allowing for the creation of live visuals that can be manipulated in real time. The operator is designed to be transparent, exposing core parameters to give users immediate feedback and control over the creative process.</p><figure class="kg-card kg-embed-card"><iframe width="200" height="113" src="https://www.youtube.com/embed/CANAMxabbRQ?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen title="StreamDiffusionTD Updates // Daydream (non-local) Realtime Diffusion v0.2.99"></iframe></figure><h2 id="daydream-api-integration-and-enhanced-features"><strong>Daydream API Integration and Enhanced Features</strong></h2><p>A key feature of StreamDiffusionTD is its integration with the <strong>Daydream API</strong>, which enables remote GPU inference. This means users do not need a high-end local GPU to run StreamDiffusion, making the technology more accessible to a wider range of creators. The Daydream API integration also adds several advanced features, including:</p><ul><li><strong>Multi-ControlNet:</strong> The ability to use multiple ControlNet models simultaneously for more complex and detailed visual control.</li><li><strong>IPAdapter:</strong> A feature that allows users to use images as style guides for the generated visuals.</li><li><strong>TensorRT:</strong> A high-performance deep learning inference optimizer that significantly improves frame rates.</li></ul><h2 id="installation-and-requirements"><strong>Installation and Requirements</strong></h2><p>To get started with StreamDiffusionTD, you will need the following:</p><ul><li>Operating System: Windows 10 or 11</li><li>Graphics Card: An NVIDIA graphics card with CUDA support</li><li>Software:</li><li>Python 3.10.9</li><li>CUDA Toolkit 11.8 or 12.2</li><li>Git</li><li>Hugging Face ID</li></ul><p>The installation process involves downloading the StreamDiffusion repository, installing its dependencies, and optionally installing the TensorRT SDK for NVIDIA GPUs. Once the prerequisites are met, you can drag the StreamDiffusionTD tox file into your TouchDesigner project to get started.</p><h2 id="using-streamdiffusiontd">Using StreamDiffusionTD</h2><p>StreamDiffusionTD offers three main functionalities:</p><ul><li>Text-to-Image: Generate images from text prompts.</li><li>Image-to-Image: Transform existing images into new creations.</li><li>Video-to-Video: Apply real-time effects and transformations to video footage.</li></ul><p>By adjusting the various parameters within the StreamDiffusionTD component, users can create a wide range of unique and dynamic visuals, from audio-reactive concert visuals to camera-driven generative art for large-scale displays. The operator can also be extended and customized using Python, MIDI, OSC, and other inputs supported by TouchDesigner.</p><p></p><div class="kg-card kg-button-card kg-align-center"><a href="https://daydream.live/?ref=blog.daydream.live" class="kg-btn kg-btn-accent">Try Daydream</a></div>`,
  datePosted: `Oct 2, 2025`,
  img: `https://blog.daydream.live/content/images/2025/10/maxresdefault.jpg`,
  excerpt: `StreamDiffusion is a cutting-edge, real-time diffusion pipeline that is revolutionizing the creation of interactive and generative visual content. This open-source technology offers significant performance advantages over traditional diffusion-based systems, making it a powerful tool for artists, developers, and creators. When combined with platforms like TouchDesigner, StreamDiffusion opens up a new realm of possibilities for real-time video generation, interactive installations, and immersive `,
  readingTime: 2
},
{
  title: `Daydream in the Desert: Open Source Real-Time AI as a Creative Instrument`,
  href: `https://blog.daydream.live/daydream-in-the-desert-open-source-real-time-ai-as-a-creative-instrument/`,
  author: `By Livepeer Infraservice`,
  content: `<figure class="kg-card kg-video-card kg-width-regular kg-card-hascaption" data-kg-thumbnail="https://blog.daydream.live/content/media/2025/09/Blurred_For_Ria.0_Prob4_thumb.jpg" data-kg-custom-thumbnail>
            <div class="kg-video-container">
                <video src="https://storage.ghost.io/c/ee/84/ee847f83-2527-4049-945e-511415a6b18b/content/media/2025/09/Blurred_For_Ria.0_Prob4.mp4" poster="https://img.spacergif.org/v1/2000x1080/0a/spacer.png" width="2000" height="1080" playsinline preload="metadata" style="background: transparent url(&apos;https://storage.ghost.io/c/ee/84/ee847f83-2527-4049-945e-511415a6b18b/content/media/2025/09/Blurred_For_Ria.0_Prob4_thumb.jpg&apos;) 50% 50% / cover no-repeat;"></video>
                <div class="kg-video-overlay">
                    <button class="kg-video-large-play-icon" aria-label="Play video">
                        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24">
                            <path d="M23.14 10.608 2.253.164A1.559 1.559 0 0 0 0 1.557v20.887a1.558 1.558 0 0 0 2.253 1.392L23.14 13.393a1.557 1.557 0 0 0 0-2.785Z"/>
                        </svg>
                    </button>
                </div>
                <div class="kg-video-player-container">
                    <div class="kg-video-player">
                        <button class="kg-video-play-icon" aria-label="Play video">
                            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24">
                                <path d="M23.14 10.608 2.253.164A1.559 1.559 0 0 0 0 1.557v20.887a1.558 1.558 0 0 0 2.253 1.392L23.14 13.393a1.557 1.557 0 0 0 0-2.785Z"/>
                            </svg>
                        </button>
                        <button class="kg-video-pause-icon kg-video-hide" aria-label="Pause video">
                            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24">
                                <rect x="3" y="1" width="7" height="22" rx="1.5" ry="1.5"/>
                                <rect x="14" y="1" width="7" height="22" rx="1.5" ry="1.5"/>
                            </svg>
                        </button>
                        <span class="kg-video-current-time">0:00</span>
                        <div class="kg-video-time">
                            /<span class="kg-video-duration">0:12</span>
                        </div>
                        <input type="range" class="kg-video-seek-slider" max="100" value="0">
                        <button class="kg-video-playback-rate" aria-label="Adjust playback speed">1&#xD7;</button>
                        <button class="kg-video-unmute-icon" aria-label="Unmute">
                            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24">
                                <path d="M15.189 2.021a9.728 9.728 0 0 0-7.924 4.85.249.249 0 0 1-.221.133H5.25a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1.794a.249.249 0 0 1 .221.133 9.73 9.73 0 0 0 7.924 4.85h.06a1 1 0 0 0 1-1V3.02a1 1 0 0 0-1.06-.998Z"/>
                            </svg>
                        </button>
                        <button class="kg-video-mute-icon kg-video-hide" aria-label="Mute">
                            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24">
                                <path d="M16.177 4.3a.248.248 0 0 0 .073-.176v-1.1a1 1 0 0 0-1.061-1 9.728 9.728 0 0 0-7.924 4.85.249.249 0 0 1-.221.133H5.25a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h.114a.251.251 0 0 0 .177-.073ZM23.707 1.706A1 1 0 0 0 22.293.292l-22 22a1 1 0 0 0 0 1.414l.009.009a1 1 0 0 0 1.405-.009l6.63-6.631A.251.251 0 0 1 8.515 17a.245.245 0 0 1 .177.075 10.081 10.081 0 0 0 6.5 2.92 1 1 0 0 0 1.061-1V9.266a.247.247 0 0 1 .073-.176Z"/>
                            </svg>
                        </button>
                        <input type="range" class="kg-video-volume-slider" max="100" value="100">
                    </div>
                </div>
            </div>
            <figcaption><p><i><em class="italic" style="white-space: pre-wrap;">Input is blurred for privacy reasons</em></i></p></figcaption>
        </figure><p>For decades, the art of the Playa has been something you had to be there to experience, vast installations, ephemeral performances, and moments of collective creativity shared only by those able to spend a week in the desert. <br><br>Playa Daydream is our attempt to democratize that experience. In 2024, <a href="https://burningman.org/live-webcast/?ref=blog.daydream.live" rel="noreferrer">BMwebcast</a> partnered with Livepeer Studio to bring the essence of Black Rock Desert to a global audience through innovative live streaming. <br><br>This year, by weaving real-time AI into the official <a href="https://burningman.org/live-webcast/?ref=blog.daydream.live" rel="noreferrer">BMwebcast</a>, we&#x2019;re opening a door for global audiences not just to watch, but to create alongside the festival. Anyone, anywhere, could now influence and remix the visuals in real time from their phone, turning the Playa into a shared canvas that extends beyond Nevada and into the hands of a worldwide community.</p><figure class="kg-card kg-image-card"><img src="https://blog.daydream.live/content/images/2025/09/image.png" class="kg-image" alt="Daydream in the Desert: Open Source Real-Time AI as a Creative Instrument" loading="lazy" width="1600" height="636" srcset="https://blog.daydream.live/content/images/size/w600/2025/09/image.png 600w, https://blog.daydream.live/content/images/size/w1000/2025/09/image.png 1000w, https://blog.daydream.live/content/images/2025/09/image.png 1600w" sizes="(min-width: 720px) 720px"></figure><p>This creative project came together through the work of a small team at <a href="https://daydream.live/?ref=blog.daydream.live" rel="noreferrer">Daydream Live&#xA0;</a></p><ul><li>Ryan, who adapted and tuned the StreamDiffusion model that powered the real-time visuals.</li><li>Gioele, who designed the frontend and API experience that let participants interact.</li><li>Victor, who built the backend that carried the stream and inputs.</li><li>Amrit, who architected the infrastructure that made the system stable and scalable.</li></ul><p>Together, they turned a bold idea - making the Playa participatory for anyone, anywhere, into a functioning system running live at scale.&#xA0;</p><blockquote><br>&quot;Since 2013, I&#x2019;ve centered the webcast on real-time engagement and Remote Participation for those unable to travel to Black Rock Desert. The gift of Daydream extended that mission by giving Camp Envy and the global Burner community a collaborative way to modify their views of the Playa in real time. The feedback we received was overwhelmingly positive.This year, integrating AI to reimagine the webcast aligned with the theme&#xA0;<em>Tomorrow, Today</em>&#xA0;and with our artists&#x2019; tradition of exploring the relationship between big art, leading-edge technology, and challenging concepts. In the midst of debates about AI&#x2019;s role in art and society, the webcast offered a space to test its creative potential openly. I see it not just as a new lens, but as a living canvas where Remote Participants can shape what they experience together, as a global community.&quot;<br>- <em>Matthew F. Reyes (</em><a href="https://x.com/motorbikematt?ref=blog.daydream.live" rel="noreferrer"><em>@Motorbikematt</em></a><em>) <br>Producer at </em><a href="https://burningman.org/live-webcast/?ref=blog.daydream.live" rel="noreferrer"><em>Burning Man webcast</em></a></blockquote><p><strong>Why we built Playa Daydream</strong></p><figure class="kg-card kg-image-card"><img src="https://blog.daydream.live/content/images/2025/09/data-src-image-78e1fce8-a811-4513-b0cb-0c15a0ad12dd.png" class="kg-image" alt="Daydream in the Desert: Open Source Real-Time AI as a Creative Instrument" loading="lazy" width="1600" height="971" srcset="https://blog.daydream.live/content/images/size/w600/2025/09/data-src-image-78e1fce8-a811-4513-b0cb-0c15a0ad12dd.png 600w, https://blog.daydream.live/content/images/size/w1000/2025/09/data-src-image-78e1fce8-a811-4513-b0cb-0c15a0ad12dd.png 1000w, https://blog.daydream.live/content/images/2025/09/data-src-image-78e1fce8-a811-4513-b0cb-0c15a0ad12dd.png 1600w" sizes="(min-width: 720px) 720px"></figure><p><br><em>&#x201C;The Playa has always been about community, inclusion, and artistic self-expression. But for those unable to make it to the Black Rock Desert due to disability, age, family commitments &#x2013; the experience has remained largely out of reach. While the festival&#x2019;s webcast has grown increasingly sophisticated, streaming higher resolutions each year, it still left artistic participation to those physically present.</em></p><p><em>For over a decade, artists have been creating beautiful works inspired and derived from webcast screencaps - a tradition that has flourished online. Playa Daydream is designed to drive more of that, making it easier than ever for remote participants not just to watch, but to contribute creatively.</em></p><p><em>Through Daydream&#x2019;s hosted StreamDiffusion platform, viewers can apply AI renderings in real time to the official BMwebcast, bringing the spirit of participation and self-expression to a global audience.&#x201D;</em> <br>- Gieole</p><figure class="kg-card kg-video-card kg-width-regular" data-kg-thumbnail="https://blog.daydream.live/content/media/2025/09/8.-Swirl-Fish_thumb.jpg" data-kg-custom-thumbnail>
            <div class="kg-video-container">
                <video src="https://storage.ghost.io/c/ee/84/ee847f83-2527-4049-945e-511415a6b18b/content/media/2025/09/8.-Swirl-Fish.mp4" poster="https://img.spacergif.org/v1/1728x1080/0a/spacer.png" width="1728" height="1080" playsinline preload="metadata" style="background: transparent url(&apos;https://storage.ghost.io/c/ee/84/ee847f83-2527-4049-945e-511415a6b18b/content/media/2025/09/8.-Swirl-Fish_thumb.jpg&apos;) 50% 50% / cover no-repeat;"></video>
                <div class="kg-video-overlay">
                    <button class="kg-video-large-play-icon" aria-label="Play video">
                        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24">
                            <path d="M23.14 10.608 2.253.164A1.559 1.559 0 0 0 0 1.557v20.887a1.558 1.558 0 0 0 2.253 1.392L23.14 13.393a1.557 1.557 0 0 0 0-2.785Z"/>
                        </svg>
                    </button>
                </div>
                <div class="kg-video-player-container">
                    <div class="kg-video-player">
                        <button class="kg-video-play-icon" aria-label="Play video">
                            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24">
                                <path d="M23.14 10.608 2.253.164A1.559 1.559 0 0 0 0 1.557v20.887a1.558 1.558 0 0 0 2.253 1.392L23.14 13.393a1.557 1.557 0 0 0 0-2.785Z"/>
                            </svg>
                        </button>
                        <button class="kg-video-pause-icon kg-video-hide" aria-label="Pause video">
                            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24">
                                <rect x="3" y="1" width="7" height="22" rx="1.5" ry="1.5"/>
                                <rect x="14" y="1" width="7" height="22" rx="1.5" ry="1.5"/>
                            </svg>
                        </button>
                        <span class="kg-video-current-time">0:00</span>
                        <div class="kg-video-time">
                            /<span class="kg-video-duration">0:35</span>
                        </div>
                        <input type="range" class="kg-video-seek-slider" max="100" value="0">
                        <button class="kg-video-playback-rate" aria-label="Adjust playback speed">1&#xD7;</button>
                        <button class="kg-video-unmute-icon" aria-label="Unmute">
                            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24">
                                <path d="M15.189 2.021a9.728 9.728 0 0 0-7.924 4.85.249.249 0 0 1-.221.133H5.25a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1.794a.249.249 0 0 1 .221.133 9.73 9.73 0 0 0 7.924 4.85h.06a1 1 0 0 0 1-1V3.02a1 1 0 0 0-1.06-.998Z"/>
                            </svg>
                        </button>
                        <button class="kg-video-mute-icon kg-video-hide" aria-label="Mute">
                            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24">
                                <path d="M16.177 4.3a.248.248 0 0 0 .073-.176v-1.1a1 1 0 0 0-1.061-1 9.728 9.728 0 0 0-7.924 4.85.249.249 0 0 1-.221.133H5.25a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h.114a.251.251 0 0 0 .177-.073ZM23.707 1.706A1 1 0 0 0 22.293.292l-22 22a1 1 0 0 0 0 1.414l.009.009a1 1 0 0 0 1.405-.009l6.63-6.631A.251.251 0 0 1 8.515 17a.245.245 0 0 1 .177.075 10.081 10.081 0 0 0 6.5 2.92 1 1 0 0 0 1.061-1V9.266a.247.247 0 0 1 .073-.176Z"/>
                            </svg>
                        </button>
                        <input type="range" class="kg-video-volume-slider" max="100" value="100">
                    </div>
                </div>
            </div>
            
        </figure><p><strong>The technical and product challenges</strong><br><br>Most AI inferences today run on costly, resource-intensive server farms powered by expensive GPUs. Almost no cloud solutions can deliver them in real time. Our biggest technical hurdle was not only running a live AI stream, but doing so affordably.</p><p>We were also mindful of today&#x2019;s broader AI debates around copyright and intellectual property. Many AI models are closed-source, with opaque training data and little accountability. <br><br><strong>How we solved it</strong><br><br><em>&#x201C;This year&#x2019;s webcast introduces open-source AI woven into the broadcast, transforming the stream into an interactive experience. The technology powering it, called <strong>StreamDiffusion</strong>, is an open-source tool developed by researchers that enables real-time creative expression using AI. I&#x2019;ve been working with the Daydream team on a version of StreamDiffusion that gives artists a more granular level of control over the model, letting craftsmanship shine through in the output.&#x201D; </em><br>- Ryan Fosdick&#xA0;</p><p>To solve the cost challenge, the AI inference happened on cost effective consumer GPU such as RTX 4090. Thanks to the Livepeer Network&#x2019;s distributed AI capabilities, Playa Daydream achieved this with an extremely low carbon footprint.</p><p>The broadcast demonstrates just one example: using a reference image to change the style of the output. That&#x2019;s only a single knob. <br><br>There are many more that can be turned, allowing artists to adjust specific visual elements live, as the stream unfolds.For Playa Daydream, we chose an open-source, mobile first approach: running StreamDiffusion without additional fine-tuning, using a preset of IPAdapter images that avoid copyrighted material or specific artistic styles. <br><br>We also carefully configured ControlNets to ensure the system remained safe and respectful toward creators.</p><p>The result is a new layer of accessibility and participation: a way for the ethos of creativity and inclusion to extend beyond the desert, through open technology that is both transparent and sustainable.</p><p>Real-time AI feels alive: audio-reactive visuals, performances that merge human improvisation with machine responsiveness, or broadcasts like this BMwebcast stream where an interactive layer transforms a passive experience into a participatory one. With Daydream, we aim to make these tools accessible beyond labs or studios. Our cloud GPUs do the heavy lifting so that anyone, even without powerful hardware, can experiment in real time.</p><p><em>&#x201C;Underlying this is a commitment to open source. As an artist, my skepticism toward AI aligns with the anti-authoritarian ethos that open source embodies. In a world drifting toward opaque, centralized AI systems, transparency and openness are essential if these technologies are to remain creative instruments instead of tools of control.&#x201D; </em><br>- Ryan </p><p><strong>The Result </strong></p><figure class="kg-card kg-image-card"><img src="https://blog.daydream.live/content/images/2025/09/Screenshot-2025-09-18-at-2.27.11---PM.png" class="kg-image" alt="Daydream in the Desert: Open Source Real-Time AI as a Creative Instrument" loading="lazy" width="1780" height="430" srcset="https://blog.daydream.live/content/images/size/w600/2025/09/Screenshot-2025-09-18-at-2.27.11---PM.png 600w, https://blog.daydream.live/content/images/size/w1000/2025/09/Screenshot-2025-09-18-at-2.27.11---PM.png 1000w, https://blog.daydream.live/content/images/size/w1600/2025/09/Screenshot-2025-09-18-at-2.27.11---PM.png 1600w, https://blog.daydream.live/content/images/2025/09/Screenshot-2025-09-18-at-2.27.11---PM.png 1780w" sizes="(min-width: 720px) 720px"></figure><ul><li><strong><em>10M minutes</em></strong> and 102k unique viewers for the stream</li></ul><p>The response to Playa Daydream showed us that the project wasn&#x2019;t just a technical milestone, it was a creative one. Tens of thousands of remote burners logged in and voted on their favourite real-time outputs. For many, this was the first time AI felt less like a tool hidden in the background and more like a medium for collective expression. Remote burners shared how excited they were to actively shape the webcast, and the team reflected on what it meant to see their work come alive at this scale.</p><h3 id="from-the-team"><strong>From the Team</strong><br></h3><p><em>&quot;The BMwebcast Daydream livestream is just one example of what becomes possible when AI transforms from a black box into a responsive creative instrument. StreamDiffusion is just the beginning, we have more real-time AI tools in development, and as more artists gain access to these technologies, I&apos;m excited to see what new forms of expression emerge from this frontier where human creativity and machine capability meet in real time.&quot;</em><br>- Ryan</p><blockquote>&quot;Exactly one year ago, I made my first commit on what would become the foundation of our StreamDiffusion API service. To see that work now interacting with BMwebcast feels surreal. What began as an experiment in real-time AI streaming is today carrying a piece of the Playa out into the world. The Playa has always been a place I have deeply admired, even though I haven&#x2019;t had the chance to be there myself. Contributing to this project gave me the opportunity to help others, like me, participate from afar. For remote burners around the globe, the livestream wasn&#x2019;t just something to watch. Daydream turned it into a shared canvas, alive with collective imagination. For me, this moment represents the first time our technology has truly met the scale and spirit it was designed for. It&#x2019;s an honor to have played a part in opening that door, and I can&#x2019;t wait to see where our real-time AI journey takes us next.&quot; <br>- Victor</blockquote><p>Playa Daydream began as an experiment in extending BMwebcast&#x2019;s ethos of participation to anyone, anywhere. What emerged was a shared canvas where human creativity and real-time AI met in the moment. By choosing an open-source path, building on distributed infrastructure, and centering accessibility, the project showed how technology can deepen inclusion and democratize art.&#xA0;</p><p>For the team, seeing their work woven into the cultural fabric of the Playa was both surreal and affirming. For the global community, it was a chance to experience the Playa not just as spectators, but as creators.</p><p>This is only the beginning. As more artists and builders gain access to real-time tools, we expect new forms of expression to emerge proof that when technology stays open, transparent, and community-driven, it becomes an instrument for collective imagination.</p><div class="kg-card kg-button-card kg-align-center"><a href="https://playground.daydream.live/?ref=blog.daydream.live" class="kg-btn kg-btn-accent">Explore Daydream</a></div>`,
  datePosted: `Sep 19, 2025`,
  img: `https://blog.daydream.live/content/images/2025/09/BMWebcast-banner-image.png`,
  excerpt: `0:00 /0:12 1&#xD7; Input is blurred for privacy reasons For decades, the art of the Playa has been something you had to be there to experience, vast installations, ephemeral performances, and moments of collective creativity shared only by those able to spend a week in the desert. Playa Daydream is our attempt to democratize that experience. In 2024, BMwebcast partnered with Livepeer Studio to bring the essence of Black Rock Desert to a global audience through innovative live streaming. This yea`,
  readingTime: 7
}
];
