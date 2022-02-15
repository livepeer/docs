---
slug: /livepeer-quick-start/configuring-livepeer
sidebar_position: 5
title: Configure Livepeer
---

# Set your Livepeer configuration options

You can set your `livepeer` configuration using one of the following:

- command-line flags 
- environment variables
- your config file -- as described below

**Important** It is important to note that if you use a config file and also supply environment variables or command-line flags, the environment variables and flags will override the values
in the config file.

### Configuration Options
`livepeer` has a number of configurable options.

For an indepth list of 
[Configuration options](/reference-information/video-mining-references/configuration)



## Configure Livepeer using command-line flags

`livepeer` can be configured with a number of command line flags as follows:

```bash
livepeer \
    -broadcaster
    -network mainnet
    -ethUrl https://mainnet.infura.io/v3/<PROJECT_ID>
```

## Configure Livepeer using environment variables

`livepeer` can be configured using environment variables as follows:

```bash
export LP_BROADCASTER=true
export LP_NETWORK='mainnet'
export LP_ETHURL='https://mainnet.infura.io/v3/<PROJECT_ID>'
livepeer
```

**Important: If you use environment variables and also supply command-line
flags, the flags will override environment variables.**

## Configure Livepeer using a config file

`livepeer` can be configured using a config file as follows:

**livepeer.conf**

```
broadcaster
network mainnet
ethUrl https://mainnet.infura.io/v3/<PROJECT_ID>
```

```bash
livepeer -config livepeer.conf
```


