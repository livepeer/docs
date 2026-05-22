Perfect. Next page in the IA:

v2/pages/05_orchestrators/setting-up-an-orchestrator/hardware-requirements.mdx
Hardware Requirements

Running an Orchestrator is running production GPU infrastructure.
This page defines minimum, recommended, and production-grade configurations for video transcoding and AI inference workloads.

Overview

An Orchestrator performs:

Real-time video transcoding (H.264, HEVC, AV1)

AI inference pipelines (diffusion, segmentation, enhancement, style transfer)

Ticket redemption + on-chain interactions

Network participation + monitoring

Performance depends on:

GPU architecture

NVENC / NVDEC support

VRAM

CPU thread availability

I/O bandwidth

Network latency

1. Minimum Requirements (Testing / Dev)

Use this for:

Local experimentation

Testnet participation

Low-volume pool participation

Component Minimum
GPU NVIDIA RTX 2060 / 3060
VRAM 8GB
CPU 4 cores
RAM 16GB
Storage 250GB SSD
Network 100 Mbps symmetrical
OS Ubuntu 22.04 LTS

⚠ Not recommended for sustained mainnet participation.

2. Recommended Production Setup (Video)

For reliable transcoding:

Component Recommended
GPU NVIDIA RTX 3080 / 3090 / A4000
VRAM 12–24GB
CPU 8–16 cores
RAM 32GB+
Storage NVMe SSD (1TB+)
Network 1 Gbps symmetrical
Uptime 99%+
Why these specs?

Video workloads require:

Multiple simultaneous NVENC sessions

Stable sustained GPU clock

Fast disk I/O for segment buffering

Low jitter

3. AI Inference Requirements

AI pipelines (e.g., diffusion, segmentation, generative effects) require more VRAM than transcoding.

Pipeline Type GPU Recommendation VRAM
Light real-time effects RTX 3080 12GB
Stable Diffusion RTX 3090 / 4090 24GB
ComfyStream pipelines A5000 / A6000 24–48GB
Enterprise AI nodes H100 / L40S 48–80GB
VRAM Considerations

Diffusion-based pipelines:

Base SD1.5: ~8–10GB

SDXL: ~16–24GB

Multi-model chains: 24GB+

If VRAM is insufficient:

Inference crashes

Latency spikes

OOM errors

4. GPU Architecture Support

Livepeer supports NVIDIA GPUs with:

CUDA support

NVENC/NVDEC hardware encoding

Recent driver support

Minimum recommended compute capability:

CUDA 7.5+

Check support:

nvidia-smi

5. Data Center vs Home Setup
   Home Operator

Pros:

Lower startup cost

Flexible experimentation

Cons:

Residential ISP instability

NAT issues

Power cost volatility

Data Center / Colocation

Pros:

Stable IP

1–10 Gbps bandwidth

Redundant power

Professional cooling

Cons:

Higher monthly cost

Setup complexity

Recommended for:

Pools

AI pipelines

Enterprise-grade uptime

6. Bandwidth Requirements

Video transcoding bandwidth formula:

Required Bandwidth ≈ (Input Bitrate × Renditions) + Overhead

Example:

6 Mbps input

4 renditions

= ~24–30 Mbps sustained upload

For AI pipelines:

Depends on frame size + output format

Usually lower bandwidth, higher GPU compute

7. Scaling Considerations

Single GPU can handle:

~4–8 HD transcoding streams

1–3 SDXL inference streams (depending on model)

Scaling methods:

Multiple GPUs in same node

Multiple orchestrator instances

Pool participation

8. Power & Cooling

High-end GPUs draw:

RTX 4090: ~450W

A6000: ~300W

H100: ~700W

Cooling must support sustained workloads.

Thermal throttling = revenue loss.

9. Monitoring Metrics

Monitor:

GPU temperature

GPU utilization %

VRAM usage

NVENC session count

Network latency

Failed segment rate

Recommended tools:

Prometheus

Grafana

nvidia-smi daemon mode

Livepeer Orchestrator Stats dashboard

10. Failure Modes
    Issue Impact
    GPU OOM Inference crash
    High latency Job loss
    Ticket redemption lag ETH delay
    Packet loss Broadcaster churn
    Disk full Segment drop

Production operators must treat this as infrastructure engineering, not hobby compute.

Hardware Summary Matrix
Use Case Entry Serious Enterprise
Video RTX 3060 RTX 3090 A6000
AI RTX 3080 RTX 4090 H100
Network 100 Mbps 1 Gbps 10 Gbps
Uptime 90% 99% 99.9%
Final Note

Hardware quality directly affects:

Selection probability

Broadcaster retention

Fee revenue

Delegator confidence

Being selected by stake is one thing.
Retaining demand is performance-driven.

Next page in setup list:

Orchestrator Stats / Installation

Proceed?

Yes

Great. Next page:

v2/pages/05_orchestrators/setting-up-an-orchestrator/orchestrator-stats.mdx
Orchestrator Stats & Monitoring

If you can’t measure it, you can’t operate it.

Running an Orchestrator is not just about GPU power. It is about:

Reliability

Performance

Fee redemption

Delegator confidence

Network reputation

This page explains how to monitor and interpret Orchestrator metrics in production.

1. Overview: What Are Orchestrator Stats?

Every Orchestrator exposes:

Local performance metrics

Network participation stats

Reward distribution

Fee earnings

Stake and delegation info

Ticket redemption activity

Stats come from two layers:

Source Type
Local node GPU + system + segment performance
On-chain contracts Rewards, stake, fees, inflation 2. Local Node Metrics

The Orchestrator exposes a stats endpoint (typically via Prometheus-compatible metrics).

Common metrics include:

GPU Metrics

gpu_utilization

gpu_memory_used

nvenc_sessions_active

temperature_celsius

Video Processing

segments_processed_total

segment_failures_total

transcode_latency_ms

AI Inference

inference_jobs_total

inference_latency_ms

oom_errors_total

Networking

segment_upload_bytes

segment_download_bytes

round_trip_latency_ms

Example Monitoring Stack

Recommended production setup:

Prometheus

Grafana dashboards

Alertmanager

Node exporter

NVIDIA exporter

3. On-Chain Stats (Explorer)

On-chain data is visible in:

🔗 https://explorer.livepeer.org

Key metrics:

Metric Meaning
Total Stake Total LPT bonded
Your Bonded Stake Stake bonded to you
Active Status Whether you are in the active set
Reward Cut % LPT you retain from delegators
Fee Share % ETH you retain from delegators
Inflation Rate Current LPT issuance rate
Bonding Rate % total LPT staked 4. Current Network Metrics (Example Fields)

Pull from Explorer when publishing

Metric Placeholder
Total LPT Supply [Insert current]
Bonding Rate [Insert current %]
Inflation Rate [Insert current %]
Active Orchestrators [Insert current #]
Total Fees (30d) [Insert ETH value] 5. Reward Monitoring

Every round (≈ 1 day), orchestrators may:

Call reward() on BondingManager

Mint inflationary LPT

Distribute pro-rata to delegators

Key things to track:

Did reward() execute?

Did inflation mint?

Did delegators receive stake increase?

Failure to call reward = loss of revenue + delegator dissatisfaction.

6. Ticket Redemption Monitoring

Orchestrators receive probabilistic tickets.

Important metrics:

Tickets received

Winning tickets redeemed

ETH claimed

Gas spent (Arbitrum)

Monitor:

ticket_value_total

ticket_redeemed_total

redemption_failure_total

7. Performance KPIs

Professional operators track:

KPI Target
Uptime 99%+
Segment failure rate &lt; 1%
GPU utilization 60–85%
Ticket redemption delay &lt; 1 round
Delegator churn Low 8. Reputation & Selection

Being in the active set depends on:

Stake ranking

Top N bonded orchestrators

Not slashed

Not jailed

Even if selected by stake, poor performance causes:

Broadcaster avoidance

Delegator exit

Fee decline

9. Slashing & Risk Monitoring

Watch for:

Double-signing

Fraudulent ticket redemption

Protocol violations

Slashing impacts:

Bonded LPT

Delegators

Reputation permanently

10. AI vs Video Monitoring Differences
    Dimension Video AI
    Workload type Continuous segments Burst jobs
    GPU utilization Sustained Spiky
    Latency tolerance Low Moderate
    VRAM pressure Moderate High

Operators must tune monitoring differently.

11. Example Alerting Rules

Alert if:

GPU &gt; 90°C

Inference OOM &gt; 3/hour

Segment failure rate &gt; 2%

No reward call for 2 rounds

Ticket redemption backlog grows

12. Delegator Transparency

Operators should publish:

Reward call history

Fee share policy

Hardware specs

Uptime stats

Professional transparency increases stake.

13. Stats vs Business Health

Hardware performance ≠ business performance.

Business health metrics:

Revenue per GPU

Revenue per stake

Delegator growth

Job win rate

Marketplace participation

14. Common Mistakes

Ignoring reward calls

Not redeeming tickets

Running without monitoring

No alerting

Overheating GPUs

Underestimating network jitter

15. Operational Philosophy

You are:

Infrastructure provider

Validator

Market participant

Staking pool manager

AI compute operator

Treat it like a cloud business.

Next page in setup list:

Quickstart: Add Your GPU to Livepeer

Proceed?

Yes

Great. Next page:

v2/pages/05_orchestrators/setting-up-an-orchestrator/setting-up-an-orchestrator/quickstart-add-your-gpu-to-livepeer.mdx
Quickstart: Add Your GPU to Livepeer

This guide connects your GPU to the Livepeer network as an Orchestrator worker — ready to process video or AI jobs.

This page assumes:

You have a GPU-equipped machine

You have Docker or a native install environment

You have access to an Ethereum wallet (for staking)

This guide covers:

Installing Livepeer

Connecting to Arbitrum

Registering as an Orchestrator

Enabling GPU transcoding

Verifying work

Monitoring performance

1. Understand What You're Running

An Orchestrator consists of:

Component Role
go-livepeer Core orchestrator binary
GPU drivers NVIDIA + NVENC or CUDA
Arbitrum RPC On-chain interaction
Wallet For staking and fees
Optional: Prometheus Metrics collection 2. Hardware Requirements

Minimum (development):

NVIDIA GPU (T4 / 3060 equivalent)

8–16 GB RAM

4 CPU cores

50 GB SSD

Stable broadband

Production:

Data center or high uptime cloud

Static IP

Reverse proxy

Firewall rules configured

3. Install NVIDIA Drivers (Linux Example)
   sudo apt update
   sudo apt install nvidia-driver-535
   sudo reboot

Verify:

nvidia-smi

4. Install Docker
   sudo apt install docker.io
   sudo systemctl enable docker

5. Pull Livepeer Docker Image
   docker pull livepeer/go-livepeer:latest

6. Start Orchestrator Node

Basic example:

docker run -d \
 --gpus all \
 -p 8935:8935 \
 -p 7935:7935 \
 livepeer/go-livepeer \
 -orchestrator \
 -transcoder \
 -network arbitrum \
 -ethUrl https://arb1.arbitrum.io/rpc \
 -monitor=true

Flags explained:

Flag Purpose
-orchestrator Enables orchestrator mode
-transcoder Enables local GPU transcoding
-network Select Arbitrum
-ethUrl RPC endpoint
-monitor Enable metrics 7. Create Ethereum Wallet

Option 1: Use Metamask
Option 2: Hardware wallet
Option 3: CLI key

You must fund wallet with:

ETH (for gas)

LPT (to stake)

8. Bond LPT

Using Explorer:

Visit https://explorer.livepeer.org

Connect wallet

Click “Bond”

Self-bond or join pool

Alternatively via CLI (advanced).

9. Register as Orchestrator

Your node must:

Self-bond LPT

Set reward cut

Set fee share

Call reward() once per round

After bonding, you may enter active set if stake is high enough.

10. Verify GPU Detection

Check logs:

`docker logs <container-id>`

Look for:

Transcoder started
Using NVIDIA NVENC

11. Test Video Transcoding

Use Livepeer CLI or Studio test stream.

Confirm:

Segments processed

No failures

GPU utilization increases

12. Enable AI Inference (Optional)

If running AI workloads:

-enableAI=true

Ensure:

Sufficient VRAM

CUDA properly installed

13. Expose Metrics

Metrics endpoint:

http://localhost:7935/metrics

Integrate with:

Prometheus

Grafana dashboards

14. Join a Pool (Optional)

Instead of self-running staking:

Join an orchestrator pool

Contribute GPU

Receive revenue share

This lowers operational complexity.

15. Confirm On-Chain Status

Visit Explorer:

Check:

Active status

Stake ranking

Reward calls

Fee earnings

16. Production Hardening Checklist

Reverse proxy (nginx)

TLS termination

Firewall port restrictions

Auto-restart container

Log rotation

Alerting setup

Reward automation script

17. Common Setup Failures
    Issue Fix
    GPU not detected Check drivers
    Cannot connect to RPC Use reliable Arbitrum endpoint
    Not in active set Increase stake
    No jobs Check reputation & availability
    Reward not minting Call reward() each round
18. What Happens Next?

Once live:

Broadcasters send jobs

Tickets are issued

Winning tickets redeemed

Inflation minted

Delegators rewarded

You are now part of:

Video processing network

AI inference marketplace

Decentralized compute protocol

Next page:

Hardware Requirements (Setup Checklist)

Proceed?
