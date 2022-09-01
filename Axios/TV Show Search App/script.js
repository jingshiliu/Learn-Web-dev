BASE_URL = 'https://api.tvmaze.com/search/shows'
const displaySection = document.querySelector('#tvShowsDisplaySection')

const form = document.querySelector('#searchTVShow')
form.addEventListener('submit', async e =>{
    e.preventDefault()
    let userTerm = form.querySelector('input').value

    const res = await axios.get(`${BASE_URL}?q=${userTerm}`)
    let img_url = res.data[0].show.image.medium

    addImageToDisplay(getImageElement(img_url))
})

function addImageToDisplay(img){
    displaySection.append(img)
}

function getImageElement(url){
    let img = document.createElement('img')
    img.src = url
    return img
}