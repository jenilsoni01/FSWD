const fs = require('fs')

const filePath='./23BCE119_Pract2/data.json';

fs.readFile(filePath,'utf-8',(err,data)=>{
    if(err){
        console.log("Error reading to file:",err)
        return;
    }

    try {
        const jsonObject = JSON.parse(data); // parse the json object
        console.log('JSON object content:', jsonObject); // display the content
        console.log('Formatted JSON object content:', JSON.stringify(jsonObject, null, 2)); // if you want formatted output
    } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
    }

    console.log('JSON object has been stored in',filePath);    

})