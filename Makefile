.PHONY: all
all:
	docker buildx build --platform linux/amd64 --load -t livepeer/docs .
