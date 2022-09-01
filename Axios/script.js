axios.get('https://swapi.dev/api/people/1')
    .then(res => {
        console.log("response", res)
    })

// In Axios, the request return a response object that contains "data",
// So we don't have to do 'res.json()' for 'fetch' function


const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`)
        console.log(res.data)
    }catch(e){
        console.log(e)
    }
}


const getDadJoke = async ()=>{
    const config = {
        headers:{
            Accept: 'application/json',
        }
    }
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    return res.data.joke
}

const newDadJokeButton = document.querySelector('button')
const dadJokeDisplaySection = document.querySelector('.dadJokeDisplayer')
newDadJokeButton.addEventListener('click', async ()=>{
    // getDadJoke()
    // .then(joke=>{
    //     dadJokeDisplaySection.innerText = joke
    // })

    const joke = await getDadJoke()
    
    let jokeContainer = document.createElement('p')
    jokeContainer.innerText = joke
    dadJokeDisplaySection.append(jokeContainer)
})