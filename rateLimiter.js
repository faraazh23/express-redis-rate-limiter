const Redis = require("ioredis");
require("dotenv").config();

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
});

const WINDOW = parseInt(process.env.RATE_LIMIT_WINDOW);
const MAX_REQUESTS = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS);

function rateLimiter(req, res, next) {
  const ip = req.ip;
  const key = `rate-limit:${ip}`;

  redis.incr(key, (err, count) => {
    if (err) {
      return res.status(500).send("Internal error");
    }  

    if (count === 1) {
      redis.expire(key, WINDOW);
    }

    if (count > MAX_REQUESTS) {
      return res.status(429).send("Too many requests - please try again later.");
    }

    next();
  });
}

module.exports = rateLimiter;
