const http = require('http');
const fs = require('fs');
const server = http.createServer();
//웹 서버 제작

const port = 8080;
//포트번호는 원하는대로 가능

server.listen(port,function () {
    console.log('웹 서버가 시작되었습니다.');
});
server.on('connection',function(){
    console.log('사용자가 접속했습니다.');
});
server.on('request',function(req, res){
    console.log('클라이언트 요청이 들어왔습니다.');
    var imgfile = 'icon_intrd01.png'
    fs.readFile(imgfile,function(err,data){
        res.writeHead(200, {"Content-Type": "image/png; charset=utf-8"});
        res.write(data);
        res.end();
    });
   
});
server.on('close',function(){
    console.log("서버가 종료되었습니다.");
});
