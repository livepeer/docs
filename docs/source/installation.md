# Installation

First, download the latest mainnet compatible release for your platform from the [releases](https://github.com/livepeer/go-livepeer/releases) page. If you are using OSX, download `livepeer-darwin-amd64.tar.gz`. If you are using Linux, download `livepeer-linux-amd64.tar.gz`.

To download the file using wget:

```
$ wget https://github.com/livepeer/go-livepeer/releases/download/<RELEASE_VERSION>/livepeer-<YOUR PLATFORM>-amd64.tar.gz
```

After downloading the file, untar the archive and move the `livepeer` binary so that it is executable within your `$PATH`:

```
$ tar -C /usr/local/bin -xfz livepeer-<YOUR_PLATFORM>-amd64.tar.gz --strip 2
```