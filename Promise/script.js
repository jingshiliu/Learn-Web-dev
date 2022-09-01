// const job = function(state){
//     return new Promise((resolve, reject)=>{
//         if(state)
//             resolve('Resolved')
//         else 
//             reject('Rejected')
//     })
// }

// let promise = job(true)
// promise
// .then(function(data){
//     console.log(data)
//     return job(false)
// })
// .then(data =>{
//     console.log(data)
// })
// .catch(function(data){
//     console.log(data)

// })
// .then(data=>{
//     console.log(data)
// })


// const body = document.querySelector('body')

// function promise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, 1000)
//     })
// }

// function changeBGColor(color) {
//     body.style.backgroundColor = color
// }

// promise()
//     .then(() => {
//         changeBGColor('red')
//         return promise()
//     })
//     .then(() => {
//         changeBGColor('green')
//         return promise()
//     })
//     .then(() => {
//         changeBGColor('blue')
//     })


const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve(color, delay)
        }, delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('purple', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('brown', 1000))
//     .then(() => delayedColorChange('pink', 1000))
//     .then(() => delayedColorChange('yellow', 1000))

// delayedColorChange('red', 1000)
//     .then(() => 'blue', 1000)
//     .then((color, delay) =>{
//         console.log(color, delay)
//     })
//     .then((color)=>{
//         console.log(color)
//     })
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('purple', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('brown', 1000))
//     .then(() => delayedColorChange('pink', 1000))
//     .then(() => delayedColorChange('yellow', 1000))



// const delayedColorChange = (color) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve(color);
//         }, 1000)
//     })
// }

// delayedColorChange('orange')
//     .then(() => delayedColorChange('white'))
//     .then(() => delayedColorChange('green'))



// ---------------- async --------------------
const login = async (username, password) =>{
    if(!(username && password))
        throw "Missing Credentials"
    if(password === 'goodpassword')
        return 'Welcome'
    throw 'Invalid Password'
}

// login('asda', 'goodpassword').then(data =>{
//     console.log(data)
// })


async function rainbow(){
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    // await delayedColorChange('red', 1000)
    // await delayedColorChange('blue', 1000)
    // await delayedColorChange('red', 1000)
    // await delayedColorChange('white', 1000)
    // await delayedColorChange('red', 1000)
    await new Promise((resolve, reject) =>{
        delayedColorChange('blue', 1000)
        console.log('hello')
        resolve()
    })
    console.log('world')
}
// rainbow()
// let a;
// try{
//      let a = 1
//     console.log(a)
//     asdaw.awd()
// }catch(e){
//     a = 2
// }
// console.log(a)


fetch('https://swapi.dev/api/people/1')
.then(res =>{
    console.log(res)
    return res.json()
})
.then(data =>{
    console.log(data)
    return fetch('https://swapi.dev/api/people/2')
})
.then(res=>{
    return res.json()
})
.then( data =>{
    console.log(data)
})
.catch(e =>{
    console.log(e)
})


const makeRequest = async ()=>{
    let res = await fetch('https://swapi.dev/api/people/1')
    let data = await res.json()
    console.log(data)
    res = await fetch('https://swapi.dev/api/people/2')
    data = await res.json()
    console.log(data)
}


