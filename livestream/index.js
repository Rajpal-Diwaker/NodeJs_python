const fs=require('fs');
const http=require('http');
const server=http.createServer();

server.on('request',(req,res)=>{
    
    // fs.readFile('input.txt',(err,data)=>{
    //     if(err){
    //        return console.log(err);
    //     }
    //     else{
    //         res.end(data.toString());
    //     }
    // })

    const rsteram=fs.createReadStream('input.txt');

    rsteram.on('data',(chunkdata)=>{
        res.write(chunkdata);
    });

    rsteram.on('end',()=>{
        res.end()
    });

});

server.listen(3000,'127.0.0.1');