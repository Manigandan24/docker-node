const express=require('express')
const redis=require('redis')
const keys = require('./keys');

const app=express();

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000
});

redisClient.set('hits',0)

app.get('/visits',(req,res)=>{
	console.log("inside get method")
	redisClient.get('hits',(err,hits)=>{
	res.send('Number of Visists ' +hits)
	redisClient.set('hits',parseInt(hits)+1)})
	
	
})

app.listen('8080',()=>{
	console.log('node js listening on port 8080')
})