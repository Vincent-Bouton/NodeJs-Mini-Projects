const fs = require('fs')
const crypto = require('crypto')

const start = Date.now()
process.env.UV_THREADPOOL_SIZE = 4;

setTimeout(()=> console.log("Timer 1 finished"), 0)
setImmediate(()=>console.log("immediate 1 finished"))


fs.readFile('test-file.txt',()=>{
    console.log("I/O Finished")
    console.log("---------------------")
    setTimeout(()=> console.log("Timer 3 finished"), 0)
    setTimeout(()=> console.log("Timer 4 finished"), 3000)
    setImmediate(()=>console.log("immediate 2 finished"))

    process.nextTick(()=>console.log("process.texttick"))

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', ()=>{
        console.log(Date.now() - start,"password blabla")
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', ()=>{
        console.log(Date.now() - start,"password blabla")
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', ()=>{
        console.log(Date.now() - start,"password blabla")
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', ()=>{
        console.log(Date.now() - start,"password blabla")
    })

})

console.log("toooop level")
