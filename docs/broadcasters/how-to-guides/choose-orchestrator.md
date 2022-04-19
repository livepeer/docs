---
title: Choose a specific orchestrator
---

Depending on your business goals, it may be desirable to route streams to a specific orchestrator or set of orchestrators. 

To do this, you can run Catalyst with the `ethOrchAddr` or `--orchAddr` flag, which accepts an orchestrator address or a space-separated list of orchestrator addresses.

**For example**

```bash
docker run <image id> --mode mainnet --ethOrchAddr 0x1234 0x5678

# alternatively
# docker run <image id> --mode mainnet --orchAddr https://service-uri:1234
```
```
