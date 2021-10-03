const superagent = require('superagent')
const fs = require('fs')

////////////////////////////////////////3.Async Await/////////////////////////////////////////////////////
async function getRoboPic(){
    try {
        random = await roboHashPromise();
        console.log(`string ${data}`)
        response = await superagent.get(`https://robohash.org/${random}`)
        console.log(response.request.url)
        writeFilePromise("./robotImage.txt",response.request.url)
        console.log('successfully written')
    } catch (err) {
        console.log(err)
    }
}
getRoboPic()






////////////////////////////////////////2.Using Promises///////////////////////////////////////////////////
function roboHashPromise(){
    data = Math.random().toString(36).substring(2,7); 
    return new Promise((resolve,reject) => {
         resolve(data)       
    })
}

function writeFilePromise(filelocation,data) {
    return new Promise((resolve,reject) => {
        fs.writeFile(filelocation, data, (err) => {
            if (err) {
                reject("not able to write inside the file")
            }
            resolve()
        })
    })
}
//Promise Chaining
// roboHashPromise().then((data)=>{
//     console.log(`random string ${data}`)
//     return superagent.get(`https://robohash.org/${data}`)
// })
// .then((res)=>{
//     console.log(res.request.url)
//     return writeFilePromise("./robotImage.txt",res.request.url)
// })
// .then(()=>{
//     console.log('successfully written')
// })
// .catch((err)=>{
//     console.log(err)
// })





//////////////////////////////////////////1.Using Callback/////////////////////////////////////////////
// const roboHash=(err,data=>{})=>{
//     data = Math.random().toString(36).substring(2,7);
//     superagent
//     .get(`https://robohash.org/${data}`)
//     .end((err,res)=>{
//         console.log(res.request.url);
//         fs.writeFile("./robotImage.txt",res.request.url,(err)=>{
//             console.log("Image url sucessfully written inside the file");
//         });
//     });
// };
// roboHash()