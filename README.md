# Express + Redis Rate Limiter Microservice

A simple Node.js microservice that demonstrates rate limiting using Redis. This service restricts the number of requests a client can make within a time window, using Redis as an in-memory data store to track request counts.

## 💡 Features

- Per-IP rate limiting using Redis
- Environment-configurable window and request limits
- Built with Express.js and ioredis
- Docker Compose for easy Redis setup

## 🚀 Getting Started

### 📦 Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [VS Code](https://code.visualstudio.com/) (recommended)

### 🧑‍💻 Clone the repository

```bash
git clone https://github.com/faraazh23/express-redis-rate-limiter.git
cd express-redis-rate-limiter
