---
sidebar_position: 2
---

# Install using a Binary Release

Run the appropriate commands for your operating system; then, using
the same directory, follow the steps to [configure
Livepeer](/installation/configuring-livepeer).

## Recommended

Use the `install.sh` script from the repository to get a completely
automated latest release installed onto your system. The script
requires presence of `curl`, `sha256sum` (for checksum verification)
and `gpg` (for signature validation). To install required dependencies
please use the following commands (for popular ubuntu/mac systems):

### Dependencies

```bash
# For ubuntu
# apt install curl gnupg2

# For macOS
# brew install curl coreutils
```

### Installation

```bash
sh -c "$(curl -fsSL https://raw.github.com/livepeer/go-livepeer/master/install.sh)"
```

Additional steps to install custom release for individual OS are declared below.

## Darwin (macOS)

```bash
# <RELEASE_VERSION> is the release version, e.g. v0.5.29
# IMPORTANT: if you are using macOS with an M1 chip, you'll need to run these commands using the Rosetta emulator

# Fetch the latest release
wget https://github.com/livepeer/go-livepeer/releases/download/<RELEASE_VERSION>/livepeer-darwin-amd64.tar.gz

# Next, extract it
tar -zxvf livepeer-darwin-amd64.tar.gz

# Finally, move it to the appropriate directory
mv livepeer-darwin-amd64/* /usr/local/bin/
```

## Linux

```bash
# <RELEASE_VERSION> is the release version, e.g. v0.5.29

# Fetch the latest release
wget https://github.com/livepeer/go-livepeer/releases/download/<RELEASE_VERSION>/livepeer-linux-amd64.tar.gz

# Next, extract it
tar -zxvf livepeer-linux-amd64.tar.gz

# Finally, move it to the appropriate directory
mv livepeer-linux-amd64/* /usr/local/bin/
```

## Windows

```shell
# <RELEASE_VERSION> is the release version, e.g. v0.5.29

# Fetch the latest release .zip
wget https://github.com/livepeer/go-livepeer/releases/download/<RELEASE_VERSION>/livepeer-windows-amd64.zip

# Next, extract it
unzip livepeer-windows-amd64.zip

# Finally, move it to the appropriate directory, e.g. C:\Users\UserName\livepeer-folder
move livepeer-windows-amd64 e.g. C:\Users\UserName\livepeer-folder
```

> **Note** At this time Livepeer does not provide automatic
> updates. You can perform a manual update or use a script. **A
> community-created** [Bash script to update Livepeer is available on
> the livepeer
> Forum](https://forum.livepeer.org/t/bash-script-to-update-livepeer/1513).

## Third-party packages

Packages for different Linux distributions are maintained by Livepeer
community members. Before using these packages, please verify that
they have been updated to use the [latest builds of
go-livepeer](https://github.com/livepeer/go-livepeer/releases). This
list will be updated as a best-effort, but we cannot guarantee if
individual packages are up to date or verify their integrity.

In the future, Livepeer core contributors may publish official
packages for the distributions below.

### Arch Linux
**Source**

https://aur.archlinux.org/packages/go-livepeer-bin/

**Installation**
```
paru go-livepeer-bin
```
