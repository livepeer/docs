---
title: Discoverability Check
sidebar_position: 5
---

Once your orchestrator is activated and publicly accessible, it will start receiving test streams. The results of the tests will be visible in the [Livepeer Explorer](/video-miners/reference/leaderboard) performance leaderboard. 

## Check public accessibility

You can check your orchestrator is publicly accessible as follows:

### Prerequisites

- If you haven't already, be sure to check your [orchestrator is running and activated](/video-miners/getting-started/activation#start-a-combined-orchestrator-and-transcoder).

- Install [grpcurl](https://github.com/fullstorydev/grpcurl#installation)


1. Clone the go-livepeer repository:

   ```bash
   git clone https://github.com/livepeer/go-livepeer
   ```

1. Query the gRPC server that should be running at your orchestrator's service
   address:

   ```bash
   # <SERVICE_ADDR> should be your orchestrator's service address
   grpcurl -insecure -import-path go-livepeer/net -proto lp_rpc.proto <SERVICE_ADDR> net.Orchestrator/Ping
   ```

   If the request is successful, you should see a response (the actual value does not matter):

   ```bash
   {
       "value": "xpLwLD/j/pk102yS5zsF7/EbF1FsWOo9IAYd4ojyfG4vTC/MtA/4VtwTYt1WmyCSuGdkIKhmWZ2C7ovW8CLuIhw="
   }
   ```

2. Check leaderboard results

You can check the results of the transcoding tests on the Livepeer Explorer [orchestrator leaderboard](https://explorer.livepeer.org/orchestrators?orchestratorTable=performance) which displays performance metrics of individual orchestrators on the network.

> **Note:**More information on the orchestrator leaderboard as well as steps to take if you observe poor results on the [leaderboard](/video-miners/reference/leaderboard).

