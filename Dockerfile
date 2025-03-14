FROM node:22-alpine
RUN corepack enable && corepack prepare pnpm@9.3.0 --activate
WORKDIR /app

# Install Python and build dependencies
RUN apk add --no-cache python3 make g++ gcc

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build-storybook

# Use official Nginx image as base
FROM nginx:alpine

# Copy Storybook static files from the build stage
COPY --from=0 /app/storybook-static/ /usr/share/nginx/html

# Expose port 80 (Nginx default)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
