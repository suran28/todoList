const http = require('http');

// 프로미스 기반의 fs모듈을 사용할 수 있다.
const fs = require('fs').promises; 

http.createServer(async (req,res) => {
    try{
        console.log(req.method, req.url);
        if (req.method === 'GET'){
            if (req.url === '/') {
                const data = await fs.readFile('./index.html');
                res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
                res.end(data);
            } else if (req.url === '/login') {
                console.log('ahahahahah');
                const data = await fs.readFile('./login.html');
                res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
                res.end(data);
                console.log('ahahahahah');
            }
            try {
                const data = await fs.readFile(`.${req.url}`);
                return res.end(data);
            } catch (err) {
                console.log(err);
            }
        }
    } catch(err){
        res.writeHead(500,{'Content-Type':'text/html; charset=utf-8'});
        res.end(err.message);
    }
}).listen(8080, () => {
    console.log("8080번 포트에서 서버 대기중")
});

