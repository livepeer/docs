---
title: Choose a specific orchestrator
---

Depending on your business goals, it may be desirable to route streams to a specific orchestrator or set of orchestrators. 

To do this, you can run Catalyst with the `ethOrchAddr` flag, which accepts an orchestrator address or a space-separated list of orchestrator addresses.

**For example**

```bash
docker run <image id> --mode mainnet --ethOrchAddr 0x1234 0x5678

# Mac M1 only
# docker run --platform linux/amd64 <image id>  --mode local
```
```
