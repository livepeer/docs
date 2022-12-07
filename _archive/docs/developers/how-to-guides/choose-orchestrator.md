---
title: Choose a specific orchestrator
---

Depending on your business goals, it may be desirable to route streams to a specific orchestrator or set of orchestrators.

To do this, you can run Catalyst with the `--orchAddr` flag, which accepts a comma-separated list of orchestrator service URLs.

**For example**

```bash
docker run \
  --name catalyst \
  -it \
  -v $HOME/livepeer:/etc/livepeer \
  -p 4242:4242 \
  -p 8080:8080 \
  -p 1935:1935 \
  -p 8889:8889/udp \
  --shm-size=2G \
  livepeer/catalyst \
  --mode mainnet \
  --ethUrl <arbitrum-rpc-url> \
  --orchAddr https://orchestrator.example.com:8935
```
