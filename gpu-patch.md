---
title: Patch the GPU 
sidebar_position: 7
---

To run unlimited concurrent encoding sessions (currently restricted on commercial-grade NVIDIA GPUs), you can install an NVENC patch for your operating system.

Once you have confirmed your [NVIDIA GPU](/video-miners/reference/gpu-support) is supported by Livepeer, you can patch your GPU as follows:

### Prerequisite

Check you are running the latest driver version on your NVIDIA GPU, or update your driver before proceeding. Access the GPU configuration, Display Adapters, and drivers for your operating system either directly or through your NVIDIA Control Panel. 

You can download the NVENC [Patch Tool](https://github.com/keylase/nvidia-patch) for your operating system, and the patch that matches the version for your GPU.

### Run the patch tool

This example follows the installation of the [Windows version](https://github.com/keylase/nvidia-patch/tree/master/win) of the patch tool and patches, but versions for other operating systems are also available.

1. Download the [patch tool](https://github.com/keylase/nvidia-patch) and patch that matches your GPU, and save and extract these files to your desired location.

1. Extract and `run` the patch tool application via your `cli`, or double-click the `patch.exe` file. Follow the prompt; **locate** and **select** the patch file for your version of the GPU, i.e. file `1337` you saved locally. 

1. You will be prompted by the patch tool for the NVIDIA `.dll` file, found in  `c: windows/system32/`. 

1. Open the `.dll`, then double-click the patch tool to apply the patch. 

A confirmation dialog will display a notification that the patch is installed with no errors. 

You can test streaming can be performed with unlimited concurrent sessions using the  `livepeer_bench.exe` [benchmarking tool](/video-miners/how-to-guides/benchmarking).