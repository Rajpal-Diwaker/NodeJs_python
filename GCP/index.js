const express=require('express')
const app=express();
const publicip=require('public-ip');
let ip4,ip6;


(async ()=>{
    ip4=await publicip.v4();
    ip6=await publicip.v6();
})();

app.get('/',(req,res)=>{
     
        if(req.query.message)
            res.send(req.query.message)

        if(req.query.env)
            res.send(process.env)

        if(req.query.headers)
            res.send(JSON.stringify(req.headers))

        if(req.query.ip4)
            res.send(ip4)

        if(req.query.ip6)
            res.send(ip6)
        
        if(req.query.crash)
            process.exit(1)

    res.send('main route')
})


app.get('/hello',(req,res)=>{
    res.send('hello')
})

app.get('/message',(req,res)=>{
    res.send(req.query.message)
})

exports.helloWorld=app;