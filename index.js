const superagent = require('superagent')
const fs = require('fs')

////////////////////////////////////////3.Async Await/////////////////////////////////////////////////////
async function getRoboPic(){
    try {
        ran = []
        i=0
        while(i<3){
            random = await roboHashPromise();
            ran.push(random)
            i++
        }
        response1 = await superagent.get(`https://robohash.org/${ran[0]}`)
        console.log(response1.request.url)
        response2 = await superagent.get(`https://robohash.org/${ran[1]}`)
        console.log(response2.request.url)
        response3 = await superagent.get(`https://robohash.org/${ran[2]}`)
        console.log(response3.request.url)
        const all = await Promise.all([response1,response2,response3])
        // console.log(all)
        const images = all.map((el)=> {return el.request.url});
        console.log(images)
        writeFilePromise("./robotImage.txt",images.join("\n"))
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