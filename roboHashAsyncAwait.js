const superagent = require("superagent");
const fs = require("fs");

const randomStr = () => {
  result = Math.random().toString(36).substring(2, 7);
  return result;
};
//////////////////////////////Using Async Await///////////////////////////////////////////////////////////

async function getRoboPic() {
  try {
    random = await roboHashPromise();
    console.log(`string ${data}`);
    response = await superagent.get(`https://robohash.org/${random}`);
    console.log(response.request.url);
    writeFilePromise("./robotImage.txt", response.request.url);
    console.log("successfully written");
  } catch (err) {
    console.log(err);
  }
}
getRoboPic();

function roboHashPromise() {
  return new Promise((resolve, reject) => {
    data = randomStr();
    resolve(data);
  });
}

function writeFilePromise(filelocation, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filelocation, data, (err) => {
      if (err) {
        reject("not able to write inside the file");
      }
      resolve();
    });
  });
}
