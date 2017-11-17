# Livepeer Documentation

These docs are visible at http://livepeer.readthedocs.io

## Building Locally

These docs are generated using Sphinx.

```
$ pip install sphinx
$ git clone https://github.com/livepeer/docs.git
$ cd docs/docs
$ make html
$ open build/html/index.html
```

Another nice option is to use `sphinx-autobuild` which will run a server that automatically rebuilds the updates for you after any changes. If you're in the `./docs` subdirectory...

```
sphinx-autobuild  ./source/ _build/html/
```

You can access the docs at http://localhost:8000

## Contributing

All contributions and doc updates are appreciated! Please make pull requests into the master branch with updates.

If you have questions, feel free to join our chat room at (http://gitter.im/livepeer/Lobby).
