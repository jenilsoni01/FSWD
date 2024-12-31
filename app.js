const { log } = require('console');
const { ADDRCONFIG } = require('dns');
const fs=require('fs');
// create JSON obj
const jsonObject={
    Name: "exe",
    age: 123,
    city: "city1"
}

const jsonString = JSON.stringify(jsonObject,null,2)

const fileDestination = 'app_output.json'

fs.writeFile(fileDestination,jsonString,'utf-8',(err)=>{
    if(err)console.log("Error writing to file:",err);
    else console.log('JSON object has been stored in',fileDestination);    
})
