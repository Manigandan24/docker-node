const express=require('express')
const redis=require('redis')

const app=express();
const redisClient=redis.createClient({
	host:'redis-server',
	port:6379
});
redisClient.set('hits',0)

app.get('/',(req,res)=>{
	redisClient.get('hits',(err,hits)=>{
	res.send('Number of Visists ' +hits)
	redisClient.set('hits',parseInt(hits)+1)
	})
})

app.listen('8080',()=>{
	console.log('node js listening on port 8080')
})