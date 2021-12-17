---
sidebar_position: 3
title: Configure Livepeer
---

# Overview

`livepeer` has a number of configurable options. You can set your configuration
using either command-line flags or a config file as described below.

For a list of all configuration options, see the reference
[here](/docs/video-miners/reference/configuration).

# Configure Livepeer using command-line flags

`livepeer` can be configured with a number of command line flags as follows

```bash
livepeer \
    -network mainnet
    -ethUrl https://mainnet.infura.io/v3/<PROJECT_ID>
```

# Configure Livepeer using a config file

If you wish, you can use a config file (.conf) to configure `livepeer`. This may
be desirable for non-bash environments.

**Important: If you use a config file and also supply command-line flags, the
flags will override the values in the config file.**

#### Sample usage:

```bash
$: livepeer -config livepeer.conf
```

#### Sample livepeer.conf

```
broadcaster
cliAddr :7937
httpAddr :8938
orchAddr 127.0.0.1:8935,127.0.0.1:8936
v 6
```

