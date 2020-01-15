# Livepeer Documentation

These docs are visible at http://livepeer.readthedocs.io

## Contributing

All contributions and doc updates are appreciated! The docs are written in Markdown and RestructuredText, and can be edited directly in this repo or by editing the page that you want at http://livepeer.readthedocs.io. Please make pull requests into the master branch with updates.

If you have questions, feel free to join [the Livepeer Discord server](https://discord.gg/RR4kFAh).

## Building Locally

These docs are generated using Sphinx. A Python virtual environment is recommended for
dependency installation and running sphinx-autobuild. If you are new to Python
virtual environments and needs assistance installing and using one, then please
visit [virtual environment guide](https://virtualenv.pypa.io/en/stable/installation/)
for instructions.

```
$ git clone https://github.com/livepeer/docs.git
$ cd docs/docs
$ pip install -r requirements.txt
$ make html
$ open build/html/index.html
```

Another nice option is to use `sphinx-autobuild` which will run a server that automatically rebuilds the updates for you after any changes. If you're in the `./docs` subdirectory...

```
sphinx-autobuild  ./source/ _build/html/
```

You can access the docs at http://localhost:8000


