'use strict';

const fs = require("fs");
const { exec } = require("child_process");

const sampleZipPath = "./../sampleFiles/samplezip.zip";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.returnzipfile = (event, context, callback) => {
  //GOAL 1. solved. The encoded need to use is ASCII
  fs.readFile(sampleZipPath, "ascii", (err, data)=>{
    if(err) callback(err, null);

    console.log("data string size: "+data.length);
    console.log("data TextEncoded size: "+(new TextEncoder().encode(data)).length);
    
    let response =  {
      statusCode: 200,
      headers:{
        "Content-Type": "application/zip"
      },
      body: data
    };
    callback(null, response);
  });

  // let bufData = fs.readFileSync(sampleZipPath);
  // let response = {
  //   statusCode: 200,
  //   headers: {
  //     "Content-Type": "application/zip"
  //   },
  //   body: bufData.toString("ascii");
  // };
  // callback(null, response);
};

module.exports.nodejsjavafn = (event, context, callback) => {
  //This need to be tested in deployed state on AWS Lambda

  exec("java -version",(error, stdout, stderr)=>{
    if(error) callback(error, null);

    let response = {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Node and Java both Runtimes available!',
        }
      ),
    };
    callback(null, response)
  })


};