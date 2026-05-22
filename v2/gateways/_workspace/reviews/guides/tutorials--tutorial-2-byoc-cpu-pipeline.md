# Review: tutorials/tutorial-2-byoc-cpu-pipeline.mdx

| Check | Result | Notes |
|-------|--------|-------|
| 1.1-1.8 Frontmatter | PASS | All fields present; includes tutorial: 2-of-3 |
| 2.1 UK English | PASS | "initialised" used correctly |
| 2.2 No em-dashes | PASS | |
| 2.4 Entity-led | PASS | |
| 3.1 Headings | PASS | |
| 4.1 One job | PASS | BYOC CPU pipeline creation and testing |
| 4.11 No TODO | WARN | TODO block lines 24-39 with multiple REVIEW flags (PyTrickle API, http-trickle, BYOC flags) |
| 4.12 No dead ends | PASS | 4-card Related Pages |
| 4.13 Min 2KB | PASS | ~16KB |
| 5.1 Template | PASS | Tutorial with StyledSteps |
| 5.15 Related Pages | PASS | |
| 7.1 In docs.json | PASS | Line 2699 |
| 8.6 Links | WARN | REVIEW flag about PyTrickle API accuracy and http-trickle pip install correctness |

## Frontmatter: All 10 fields present

## Heading Score: 20/20

## Verdict: PASS (needs human verification)

Good tutorial flow: build processor, package Docker, test isolation, wire into Gateway-Orchestrator. REVIEW flags at top are critical - PyTrickle API (FrameProcessor vs process_video_async), http-trickle package (Go not Python), and BYOC flag names all need verification before this tutorial is fully reliable. Optional Whisper-tiny step adds depth.
