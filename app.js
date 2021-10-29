
console.log(`Number 1`);
const portillos = document.getElementById(`portillos`);
console.dir(portillos);


console.log(`Number 2`);
const images = document.getElementsByTagName(`img`);
console.dir(images);


console.log(`Number 3`);
const centered = document.getElementsByClassName(`center`);
console.dir(centered);


console.log(`Number 4`);
const ginosEast = document.querySelector(`#ginos`);

console.dir(ginosEast);


console.log(`Number 5`);
const pTags = document.querySelectorAll(`p`);
console.dir(pTags);


console.log(`Number 6`);
const h1 = document.querySelector(`h1`);

console.dir(h1);


h1.innerText = "Matt's Favorite Places To Eat In Sweet Home Chicago!";


console.log(`Number 7`);
const others = document.querySelector(`#others`);

console.dir(others);


others.innerHTML = `<h3>Other Favorites</h3>`;


console.log(`Number 8`);
const aTag = document.querySelector(`a`);

console.dir(aTag);


aTag.href = `https://www.choosechicago.com/articles/food-drink/5-classic-chicago-foods/`;


h1.classList.add(`background`, `text-color`);


h1.classList.remove(`background`);


const h4 = document.createElement(`h4`);


h4.innerText = "CHICAGO: A great place to eat!";


const bodySection = document.querySelector(`body`);
bodySection.prepend(h4);



const h5 = document.createElement(`h5`);


h5.innerText = "See you in the Windy City Sometime!";


aTag.insertAdjacentElement(`afterend`, h5);


document.querySelector(`ul > li`).remove();
