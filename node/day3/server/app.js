import http from "http"

import dotenv from "dotenv"

import path from "path"

import fs from "fs"


dotenv.config()







const folderpath = path.join(process.cwd(),"public","image","logo")


const newfolder = fs.mkdir(folderpath,{recursive:true},(e)=>{

    if(e){
        console.log(e);
        
    }else{
        console.log(`sucessfully folder created`);
        
    }

})

const newfile = path.join(folderpath,"data.txt")

//  console.log(newfile);


fs.writeFile(newfile,"This is React and Node",(e)=>{
       if(e){
        console.log(e);
        
       }else{
        console.log(`file sucessfully created`);
        
       }


       
})




const app = http.createServer()

const PORT = process.env.PORT




app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
    
})