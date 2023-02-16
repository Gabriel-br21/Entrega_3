const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao')

const c = require('./pastaC/index')

console.log(c.ola2)

const http = require('http')
http.createServer((req,res)=>{
    res.write('Bom dia')
    res.end
}).listen(8080)
