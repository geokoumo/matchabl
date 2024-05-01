// const http=require('http')
// const port=3000

// const server=http.createServer(function(req,res){

// })

// server.listen(port,function(error){
//     if(error){
//         console.log('Something went wrong',error)
//     }else{
//         console.log('Server is listening on port', +port)
//     }
// })


const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.listen(3000, () => {
    console.log('Express server started on port 3000');
});