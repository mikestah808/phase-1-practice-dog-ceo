console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

//CHALLEGE 1

window.addEventListener('DOMContentLoaded', () => {
    getDogs();
    getBreed();
    filterBreeds();
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
    // console.log(Object.keys(data.message))
    Object.keys(data.message).forEach(breed => {
        // console.log(data.message)
        let li = document.createElement('li')
        li.id = "breed"
        li.innerText = breed
        ul.append(li)

        li.addEventListener('click', changeColor)
    })
})
}
// 1. Review what Object.key does
// 2. See how you can use Object.key for the data.message object





//CHALLENGE 3

function changeColor(event){
    // console.log(event)
    event.target.style.color = 'red';
    // let li = document.getElementById('breed')
    // console.log("hello");
    // alert("hello");
    // once <li> is clicked, it will change colors 

}

const select = document.getElementById('breed-dropdown')
select.addEventListener('click', filterBreeds)

function filterBreeds(event){
    console.log(event)
    // event.target.value = "a"    

        console.log('hello')


    //figure out where the array is
    //figure out how to use the filter method on the array 
    //user can filter breeds that start with a particular letter
}


