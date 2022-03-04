console.log('%c HI', 'color: firebrick')

//CHALLEGE 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

window.addEventListener('DOMContentLoaded', () => {
    getDogs();
})



function getDogs(){
    const div = document.getElementById('dog-image-container')
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
        data.message.forEach(dog =>{

            let img = document.createElement('img')
            img.src = dog
            div.append(img)
        })
    })
}

//CHALLEGE 2
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

const ul = document.getElementById('dog-breeds')
fetch(breedUrl)
.then(res => res.json())
.then(data => {
    
})