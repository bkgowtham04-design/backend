import http from 'http'


const app = http.createServer()

const Port = 5000

app.listen(Port,()=>{

  console.log(`server Running on https://localhost:${Port}`);
  

})