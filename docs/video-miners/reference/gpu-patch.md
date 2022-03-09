---
title: GPU Patches
sidebar_position: 7
---

There is a patch which should be run for all operating systems to run unlimited concurrent streams (currently restricted on NVIDIA GPUs).

Once you have confirmed your [NVIDIA GPU(s)](/video-miners/reference/gpu-support) are supported by Livepeer for transcoding, you can patch your GPU.

### Prerequisite

Make sure you are running the latest driver version on your NVIDIA GPU or update your driver before proceeding further.

To find your GPU(s) capacity, check the Display Adapters and drivers on your system directly, or through your NVIDIA Control Panel. 

You will need a [Patch Tool](https://github.com/keylase/nvidia-patch/tree/master/win) and patch that matches the version for your GPU.

### Run the patch tool

This follows running a Windows version but the patch can be run on any system.

1. Download the version of the [patch tool](https://github.com/keylase/nvidia-patch) and the patch that matches the version of your GPU, saving and extracting the files to your desired location.

1. Extract and `Run` the patch tool application which you can do via your `cli` or double-clicking the `patch.exe` file. Follow the prompt; **locate** and **select** the patch file `1337` you saved to your desktop for the your version of the GPU. 

1. Double click on the patch - it will prompt you for the NVIDIA `.dll` file. 

1. In this Windows example, a `.dll` will be found in  `c: windows/system32/`, open the `.dll`, then double-click the patch tool to apply the patch. 

	A dialog with a confirmation will notify you that the patch has been installed with no errors. Now videos streams on your machine should be provided with unlimited concurrent sessions.