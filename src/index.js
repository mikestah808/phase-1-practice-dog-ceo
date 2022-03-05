console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breedArr = [];

//CHALLEGE 1

document.addEventListener('DOMContentLoaded', () => {
    getDogs();
    getBreed();
    const select = document.getElementById('breed-dropdown')
    select.addEventListener('change', (event) => {
        let ul = document.getElementById('dog-breeds')
        ul.innerHTML = ""
        let breedFilter = breedArr.filter(b => b[0] === event.target.value)
        breedFilter.map(b => addBreedToDOM(b))
        // event.target.value
    })
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
fetch(breedUrl)
.then(res => res.json())
.then(data => {
    Object.keys(data.message).forEach(breed => {
        addBreedToDOM(breed)
    })

    breedArr = (Object.keys(data.message))
})  
}
// 1. Review what Object.key does
// 2. See how you can use Object.key for the data.message object





//CHALLENGE 3

function changeColor(event){
    event.target.style.color = 'red';

}


//CHALLENGE 4




    //figure out where the array is
    //figure out how to use the filter method on the array 
    //user can filter breeds that start with a particular letter

function addBreedToDOM(breed){
    const ul = document.getElementById('dog-breeds')
    let li = document.createElement('li')
    li.id = "breed"
    li.innerText = breed
    ul.append(li)
    li.addEventListener('click', changeColor)
}


