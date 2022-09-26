const redis = require('redis');

// 1 configure our redis -- because redis is running on the specific port
// we need to tell our server where it needs to run


async function  redisConnect(){
  redisClient = redis.createClient({
    host: 'localhost',
    legacyMode: true,
    port: 6379
});

  redisClient.on('error', (err) => console.log('Redis Client Error', err));

  await redisClient.connect();
}
redisConnect();

redisClient.on('error', function (err) {
    console.log('Could not establish a connection with redis. ' + err);
});


redisClient.on('connect', function (err) {
    console.log('Connected to redis successfully');
});

module.exports = redisClient;