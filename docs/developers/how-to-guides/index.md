---
title: Guides
sidebar_position: 1
---

The following is an annotated list of guides providing information and instructions about how you can further configure your Livepeer node when developing with Livepeer:

### [Configure Broadcasting Preferences](/developers/how-to-guides/managing-broadcasters/broadcasting-preferences)

Set options and follow methods to configure broadcasting preferences provided for the Livepeer node transcoding output.

### [Integrate a CDN](/developers/how-to-guides/cdn-integration)

Make your output video available via a conventional [CDN](/developers/how-to-guides/cdn-integration) so that requests into your site or DApp for video streaming through Livepeer pull video from the network while served off of a CDN.

> 	**Note:** In the future, we aim to provide this option with the p2p network that Livepeer forms around a stream.

### [Withdraw Broadcasting Funds](/developers/how-to-guides/managing-broadcasters/withdrawing-broadcaster-funds)

Use the `livepeer_cli` to unlock, withdraw, and cancel requests to withdraw broadcasting funds.

### [Record a stream](/developers/how-to-guides/recording-stream)

Use the Livepeer built-in feature to record your stream on the s3-like object storage using the flag `-recordStore` on the broadcaster node.

> **Note:** Additional instructions are provided to enable this option when running Catalyst.

### [Enable verification (experimental)](/developers/how-to-guides/managing-broadcasters/verification)

Install and run a verifier alongside a broadcaster to verify transcoded results received from orchestrators. 

### [Troubleshooting](/developers/how-to-guides/managing-broadcasters/troubleshooting)

Enable detailed logs, and troubleshoot errors you may encounter when managing broadcasters.