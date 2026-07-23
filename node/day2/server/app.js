import dotenv from "dotenv"

import os from "os"

import http from "http"

import path from "path"




// console.log(process.env);


 dotenv.config()


console.log(process.env);


// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.cpus());


const folder = path.join("assets", "src" ,"image")

console.log(folder);

const base = path.basename("assets", "src" ,"image")

console.log(base);
console.log(process.cwd());

console.log(process.env.name);





const app = http.createServer()

const PORT = process.env.PORT

app.listen(PORT,()=>{
  console.log(`server running on http://localhost:${PORT} `);
  
})







