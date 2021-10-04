const superagent = require("superagent");
const fs = require("fs");

const randomStr = () => {
  result = Math.random().toString(36).substring(2, 7);
  return result;
};

const roboHash = (err, data) => {
  superagent.get(`https://robohash.org/${randomStr()}`).end((err, res) => {
    console.log(res.request.url);
    fs.writeFile("./robotImage.txt", res.request.url, (err) => {
      console.log("Image url sucessfully written inside the file");
    });
  });
};
roboHash();
