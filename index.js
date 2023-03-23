const http = require('http');
const fsystem = require('fs');


function showErrorPage(res){
    fsystem.readFile('404.html', 'utf8', (err, html) => {
        if(err){
            console.log('Now you are just completely fucked');
        }
        res.end(html);
    });
}


const server = http.createServer((req, res) => {
    
    if(req.url === '/'){
        fsystem.readFile('index.html', 'utf8', (err, html) => {
            if(err){
                showErrorPage(res);
            }else{
                res.end(html);
            }
        })
    }else if(req.url === '/about' ){
        fsystem.readFile('about.html', 'utf8', (err, html) => {
            if(err){
                showErrorPage(res);
            }else{
                res.end(html);
            }
        })
    }else if(req.url === '/contact'){
        fsystem.readFile('contact-me.html', 'utf8', (err, html) =>{
            if(err){
                showErrorPage(res);
            }else{
                res.end(html)
            }
        })

    }else{
        showErrorPage(res);
    }

})


server.listen(5000, () => {
    console.log("She's up and running")
});


