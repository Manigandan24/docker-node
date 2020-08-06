const express=require('express')

var server=express()

server.get('/',(req,res)=>{
	res.send('hello world from node js')
})

server.listen(8080,()=>{
	console.log('listening on port 8080')
})