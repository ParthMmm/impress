build-dev:
	docker build -t react-app-dev -f Dockerfile.dev .

###################

build-local:
	docker build \
		-t impress \
		--build-arg CADDYFILE=Caddyfile.local \
		--build-arg BASE_URL=http://localhost:8000/ \
		-f Dockerfile.production .

###################

build-production:
	docker build \
		-t impress \
		--build-arg CADDYFILE=Caddyfile.production \
		--build-arg BASE_URL=https://impresswitch.me/ \
		-f Dockerfile.production .