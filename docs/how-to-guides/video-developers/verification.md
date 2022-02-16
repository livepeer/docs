---
title: Enable Verification (Experimental)
sidebar_position: 5
---

# Enable Verification (Experimental)

The broadcaster can verify transcoded results received from orchestrators by
sending verification requests to a verifier that runs alongside the broadcaster.
The current default verifier implementation uses a machine learning classifier -
refer to the
[verifier documentation](https://github.com/livepeer/verification-classifier)
for more details.

Verification is currently experimental and needs to be explicitly enabled by the
user. R&D to improve its accuracy (in classifying correctly vs. incorrectly
transcoded video) and performance (in terms of run time and computation cost) is
underway, but in the short term, expect to see higher computational costs and
transcoding latency after enabling verification for a broadcaster.

## Run the verifier

1. Install [Docker](https://docs.docker.com/install/)

2. Launch the verifier:

```bash
git clone https://github.com/livepeer/verification-classifier
cd verification-classifier
./launch_api.sh
```

`./launch_api.sh` will start a verifier server running within a Docker container
that accepts verification requests at the `/verify` endpoint. You should see log
output that indicates that the verifier is listening on port 5000:

```bash
Sending build context to Docker daemon  5.904MB
Step 1/4 : FROM verifier:v1
---> fe5d1924dab5
Step 2/4 : COPY /api ./scripts
---> Using cache
---> bc21bfb203ef
Step 3/4 : ENTRYPOINT ["python"]
---> Using cache
---> 816b804bc7e7
Step 4/4 : CMD ["scripts/api.py"]
---> Using cache
---> 548f58689798
Successfully built 548f58689798
Successfully tagged verifier-api:v1
Verifier server listening in port 5000
```

## Connect to a local verifier

If you are running the verifier on the same machine as the broadcaster, then you
can run the below command in order to connect the broadcaster with the verifier:

```bash
livepeer \
  -network rinkeby \
  -ethUrl <ETH_URL> \
  -broadcaster \
  -verifierUrl http://localhost:5000/verify \
  -verifierPath ~/verification-classifier/stream
```

- `-verifierUrl` is used to specify the address (`http://<IP>:<port>/verify`)
  that the verifier is receiving requests at. In this case, since the verifier
  and broadcaster are on the same machine all requests can be received on
  `localhost`.
- `-verifierPath` is used to specify the path to the volume that the verifier
  will read segment data from. By default, the verifier will read segment data
  from a volume mounted on the `/stream` directory within the
  `verification-classifier` project. So, if you started the verifier from within
  `~/verification-classifier` the value for `-verifierPath` should be
  `~/verification-classifier/stream`.

The broadcaster logs should indicate the address of the verifier being used:

```
Using the Epic Labs classifier for verification at http://localhost:5000/verify
```

## Connect to a remote verifier

If you are running the verifier on a separate machine from the broadcaster, you
will need to make sure that the verifier endpoint is accessible by the
broadcaster and that the verifier's volume is accessible over the network.

One way to make the verifier endpoint accessible to the broadcaster without
making it publicly accessible is to create an SSH tunnel from the broadcaster
machine to the verifier machine.

Create an SSH tunnel with the following command run from the broadcaster
machine:

```bash
ssh -N -L 5000:127.0.0.1:5000 -i <SSH_KEY_FILE> <USER>@<HOSTNAME>
```

Note that the command will not output anything if it is successfuly run.

One way to make the verifier's volume accessible over the network is to mount
the verifier's volume on the broadcaster machine over an SSH connection using
[sshfs](https://github.com/libfuse/sshfs).

Mount the verifier's volume on the broadcaster machine by running the following
command on the broadcaster machine:

```bash
sshfs -o IdentityFile=<SSH_KEY_FILE> <USER>@<HOSTNAME>:<FOLDER_ON_VERIFIER> <FOLDER_ON_BROADCASTER>
```

After the SSH tunnel is setup and the remote volume is mounted, run the
following command to start the broadcaster:

```bash
livepeer \
  -network rinkeby \
  -ethUrl <ETH_URL> \
  -broadcaster \
  -verifierUrl http://localhost:5000/verify \
  -verifierPath <FOLDER_ON_BROADCASTER>
```

The broadcaster also supports sharing segment data with a verifier using
external cloud storage providers such as Amazon's S3 or Google's GCS.
Documentation on using external cloud storage providers will be added in the
future.

