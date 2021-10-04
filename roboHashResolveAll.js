const superagent = require("superagent");
const fs = require("fs");

const randomStr = () => {
  result = Math.random().toString(36).substring(2, 7);
  return result;
};

/////////////////////////////////////Using ResolveAll//////////////////////////////////////////

async function getRoboPic() {
  try {
    ran = [];
    i = 0;
    while (i < 3) {
      random = await roboHashPromise();
      ran.push(random);
      i++;
    }
    response1 = await superagent.get(`https://robohash.org/${ran[0]}`);
    response2 = await superagent.get(`https://robohash.org/${ran[1]}`);
    response3 = await superagent.get(`https://robohash.org/${ran[2]}`);
    const all = await Promise.all([response1, response2, response3]);
    // console.log(all)
    const images = all.map((el) => {
      return el.request.url;
    });
    console.log(images);
    writeFilePromise("./robotImage.txt", images.join("\n"));
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
