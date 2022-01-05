---
sidebar_position: 2
---

# Install using a Binary Release

Run the appropriate commands for your operating system; then, using the same directory, follow the steps to [configure Livepeer](/installation/configuring-livepeer).

### Darwin (macOS)

```bash
# <RELEASE_VERSION> is the release version i.e. 0.5.14

# IMPORTANT: if you are using macOS with an M1 chip, you'll need to run these commands using the Rosetta emulator

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
