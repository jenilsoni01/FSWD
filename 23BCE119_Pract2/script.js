const fs=required('fs')

const filePath=data.json;

fs.readFile(fileDestination,jsonString,'utf-8',(err,data)=>{
    if(err){
        console.log("Error reading to file:",err)
        return
    }
    console.log('JSON object has been stored in',filePath);    
    
})