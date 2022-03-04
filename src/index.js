console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

//CHALLEGE 1

window.addEventListener('DOMContentLoaded', () => {
    getDogs();
    getBreed();
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

function getBreed(){
const ul = document.getElementById('dog-breeds')
fetch(breedUrl)
.then(res => res.json())
.then(data => {
    data.message.forEach(breed => {
        let li = document.createElement('li')
        li.innerText = breed
        ul.append(li)
    })
})
}