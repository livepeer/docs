---
slug: /video-miners/core-concepts/dual-mining
title: Dual Mining
sidebar_position: 7
---

# Dual Mining

Dual mining refers to the process of performing different types of work with the
same hardware. The term was popularized in the context of PoW mining where it
referred to concurrently mining different cryptocurrencies by executing ther PoW
hashing algorithms using the same GPU. In the context of Livepeer, dual mining
can still involve using a GPU to mine a cryptocurrency like Ethereum, but it
also involves using the GPU to transcode video as a video miner on the Livepeer
network.

## Why consider dual mining?

Dual mining can be considered to:

- Improve the utilization of GPUs
  - This can be of particular interest to Livepeer video miners since unlike in
    other blockchain networks, there is not always work for the GPU to do in the
    Livepeer network
- Create an additional revenue stream with existing GPUs

One of the benefits of using transcoding as the additional workload in dual
mining is that its usage of GPU cores is minimal relative to other potential
workloads since most of the heavy lifting is done by the hardware encoder and
decoder embedded in the GPU. See the
[Nvidia video encoding and decoding docs](https://developer.nvidia.com/nvidia-video-codec-sdk)
for more information on the separation of video encoding and decoding from the
GPU cores.

## Tradeoffs and considerations

There are still a few tradeoffs and points to consider when dual mining:

- In most cases, VRAM is likely to be the constraining factor for transcoding
  capacity. The more VRAM that is consumed by the other workload (i.e. ethash
  mining), the less streams that can be concurrently transcoded. So, GPUs that
  have more VRAM will have more transcoding capacity when dual mining
- There is still a performance tradeoff between the two workloads. For example,
  hashrate for ethash mining will linearly decrease as more streams are
  concurrently transcoded. The use of CUDA MPS with newer generation GPUs can
  help reduce the rate at which hashrate decreases - see the
  [dual mining guide](/video-miners/how-to-guides/dual-mining) for more
  information
- If you are just transcoding right now, then dual mining another cryptocurrency
  can increase power consumption on your GPU especially if the other
  cryptocurrency uses a PoW hashing algorithm. So, in this case, the cost of
  electricity and cooling for your GPU should be factored in when considering
  dual mining
- If you are just mining a cryptocurrency like Ethereum right now, then
  transcoding is unlikely to increase the power consumption on your GPU based on
  previous testing
