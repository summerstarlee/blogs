
const  fn = () => new Promise((resole) => {
    setTimeout(() => {
        resole()
    }, 1000)
})

const loop =  (arr, cb) => {
    for (let index = 0; index < arr.length; index++) {
        await fn()
        cb()
    } 
}

loop(a)



