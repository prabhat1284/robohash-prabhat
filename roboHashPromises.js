const superagent = require("superagent");
const fs = require("fs");

const randomStr = () => {
  result = Math.random().toString(36).substring(2, 7);
  return result;
};

////////////////////////////////////////2.Using Promises///////////////////////////////////////////////////
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
//Promise Chaining
roboHashPromise()
  .then((data) => {
    console.log(`random string ${data}`);
    return superagent.get(`https://robohash.org/${data}`);
  })
  .then((res) => {
    console.log(res.request.url);
    return writeFilePromise("./robotImage.txt", res.request.url);
  })
  .then(() => {
    console.log("successfully written");
  })
  .catch((err) => {
    console.log(err);
  });
