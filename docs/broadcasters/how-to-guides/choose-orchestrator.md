---
title: Choose a specific orchestrator
---

Depending on your business goals, it may be desirable to route streams to a specific orchestrator or set of orchestrators. 

To do this, you can run the broadcaster node with the `ethOrchAddr` flag, which accepts an orchestrator address or a space-separated list of orchestrator addresses.

**For example**

```bash
livepeer \
  -broadcaster \
  -network arbitrum-one-rinkeby \
  -ethUrl https://rinkeby.arbitrum.io/rpc \
  -ethOrchAddr 0x1234 0x5678 0x9012
```
