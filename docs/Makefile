# Run from repo root: make -C docs all   OR from docs/: make all
.PHONY: all
all:
	docker buildx build --platform linux/amd64 --load -f Dockerfile -t livepeer/docs ..
