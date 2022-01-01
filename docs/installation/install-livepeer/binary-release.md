---
sidebar_position: 2
---

# Install using a Binary Release

### Darwin (macOS)

```bash
# <RELEASE_VERSION> is the release version i.e. 0.5.14

# First, fetch the latest release
wget https://github.com/livepeer/go-livepeer/releases/download/<RELEASE_VERSION>/livepeer-darwin-amd64.tar.gz

# Next, extract it
tar -zxvf livepeer-darwin-amd64.tar.gz

# Finally, move it to the appropriate directory
mv livepeer-darwin-amd64/* /usr/local/bin/
```

### Linux

```bash
# <RELEASE_VERSION> is the release version i.e. 0.5.14

# First, fetch the latest release
wget https://github.com/livepeer/go-livepeer/releases/download/<RELEASE_VERSION>/livepeer-linux-amd64.tar.gz

# Next, extract it
tar -zxvf livepeer-linux-amd64.tar.gz

# Finally, move it to the appropriate directory
mv livepeer-linux-amd64/* /usr/local/bin/

# Currently, packages are available for Arch Linux
paru go-livepeer-bin
```

### Windows

```bash
# <RELEASE_VERSION> is the release version i.e. 0.5.14

# First, fetch the latest release
wget https://github.com/livepeer/go-livepeer/releases/download/<RELEASE_VERSION>/livepeer-windows-amd64.tar.gz

# Next, extract it
tar -zxvf livepeer-windows-amd64.tar.gz

# Finally, move it to the appropriate directory
mv livepeer-windows-amd64/* /usr/local/bin/
```
