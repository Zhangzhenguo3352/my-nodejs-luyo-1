const http = require('http');
const fs = require('fs');

http.createServer(function(req,res,next){
    console.log('有人访问了'+req.url);
        switch(req.url){
            case '/':
                fs.readFile('wwww/index.html',function(err,data){
                   if(err){
                       console.log('404')
                   }else{
                       res.write(data);
                       res.end()
                   }
                });
                break;
            case '/a':
                fs.readFile('wwww/a.html',function(err,data){
                    if(err){
                        console.log('404')
                    }else{
                        res.write(data);
                        res.end()
                    }
                });
                break
            case '/b':
                fs.readFile('wwww/b.html',function(err,data){
                    if(err){
                        console.log('404')
                    }else{
                        res.write(data);
                        res.end()
                    }
                });
                break
        }

}).listen(8181,function(){
    console.log('打开端口： localhost:8181')
})