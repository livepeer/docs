---
sidebar_position: 5
title: Configure Livepeer
---

# Overview

`livepeer` has a number of configurable options. You can set your configuration
using either command-line flags, environment variables, or a config file as
described below.

For a list of all configuration options, see the reference
[here](/video-miners/reference/configuration).

# Configure Livepeer using command-line flags

`livepeer` can be configured with a number of command line flags as follows:

```bash
livepeer \
    -broadcaster
    -network mainnet
    -ethUrl https://mainnet.infura.io/v3/<PROJECT_ID>
```

# Configure Livepeer using environment variables

`livepeer` can be configured using environment variables as follows:

```bash
export LP_BROADCASTER=true
export LP_NETWORK='mainnet'
export LP_ETHURL='https://mainnet.infura.io/v3/<PROJECT_ID>'
livepeer
```

**Important: If you use environment variables and also supply command-line
flags, the flags will override environment variables.**

# Configure Livepeer using a config file

`livepeer` can be configured using a config file as follows:

#### livepeer.conf

```
broadcaster
network mainnet
ethUrl https://mainnet.infura.io/v3/<PROJECT_ID>
```

```bash
livepeer -config livepeer.conf
```

**Important: If you use a config file and also supply environment variables or
command-line flags, the environment variables and flags will override the values
in the config file.**
