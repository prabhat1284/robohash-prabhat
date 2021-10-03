const superagent = require('superagent')
const fs = require('fs')

//1.Using Callback
const roboHash=(err,data)=>{
    data = Math.random().toString(36).substring(2,7);
    superagent
    .get(`https://robohash.org/${data}`)
    .end((err,res)=>{
        console.log(res.request.url);
        fs.writeFile("./robotImage.txt",res.request.url,(err)=>{
            console.log("Image url sucessfully written inside the file");
        });
    });
};
roboHash()