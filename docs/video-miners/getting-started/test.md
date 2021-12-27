---
title: Testing
sidebar_position: 4
---

# Testing

## Pre-requisites

- Make sure you have
  [activated your orchestrator](/video-miners/getting-started/activation)
- Make sure your orchestrator is running

## Check public accessibility

1. Install [grpcurl](https://github.com/fullstorydev/grpcurl#installation)

2. Clone the go-livepeer repository:

   ```bash
   git clone https://github.com/livepeer/go-livepeer
   ```

3. Query the gRPC server that should be running at your orchestrator's service
   address:

   ```bash
   # <SERVICE_ADDR> should be your orchestrator's service address
   grpcurl -insecure -import-path go-livepeer/net -proto lp_rpc.proto <SERVICE_ADDR> net.Orchestrator/Ping
   ```

   If the request is successful, you should see a response that looks like (the
   actual value does not matter):

   ```bash
   {
       "value": "xpLwLD/j/pk102yS5zsF7/EbF1FsWOo9IAYd4ojyfG4vTC/MtA/4VtwTYt1WmyCSuGdkIKhmWZ2C7ovW8CLuIhw="
   }
   ```

## Check leaderboard results

The explorer contains an
[orchestrator leaderboard](https://explorer.livepeer.org/orchestrators?orchestratorTable=performance)
that displays performance metrics of individual orchestrators on the network
based on the results of transcoding tests.

After your orchestrator is activated, it will start receiving test streams as
long as it is publicly accessible and the results of the tests will be visible
in the leaderboard.

More information on the orchestrator leaderboard as well as steps to take if you
observe poor results on the leaderboard can be found
[here](/video-miners/reference/leaderboard).

