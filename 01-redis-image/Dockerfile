# Use an existing docker image as a base
FROM alpine

# Download and install dependency
RUN apk add --update redis
# Check cache
RUN apk add --update gcc

# Tell the image what to do when it starts as a container
CMD ["redis-server"]