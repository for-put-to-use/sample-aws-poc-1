'use strict';

const fs = require("fs");
const { exec, execSync } = require("child_process");

const sampleZipPath = "./../sampleFiles/samplezip.zip";

module.exports.hello = async (event) => {
  console.log("hello executing ...");
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
  let encodings = ["ascii", "binary" ]
  console.log("path: "+sampleZipPath)
  //GOAL 1. solved. The encoded need to use is ASCII
  fs.readFile(sampleZipPath, encodings[0], (err, data)=>{
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
  console.log("about to run java cmd");
  console.log(">>START");
  // let ret = execSync("npx java-invoke-local --server");
  // let ret2 = execSync("java -version");
  // console.log(ret2);
  // console.log("->"+ret);
  console.log("<<END");
  
  let child1 = exec("java -version",(error, stdout, stderr)=>{
    let response = {};
    if(stdout){
      console.log("stdout:--");
      console.log(stdout);
      response = {
        statusCode: 200,
        body: stdout.toString()
      };
    }
    else
      console.log("stdout is null");

    if(stderr){
      console.log("stderr:--");
      console.log(stderr);
      response = {
        statusCode: 200,
        body: stderr.toString()
      };
    }
    else
      console.log("stderr is null");

    // console.log(execSync("java -version"));

    if(error) callback(error, null);

    callback(null, response)
  })


};

module.exports.openapigeneratortest = (event, context, callback) => {
  console.log("openapigeneratortest executing ...");
  let cmd = "npx @openapitools/openapi-generator-cli list";

  


  try{
    let ret = execSync(cmd);
    let response =  {
      statusCode: 200,
      body: ret.toString()
    };
    callback(null, response);
  }
  catch(error){
    let response =  {
      statusCode: 500,
      body: error.toString()
    };
    callback(error, null);
  }

};