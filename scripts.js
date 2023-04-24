// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯
import {monsters} from './monsters.js';
console.log(monsters);

for (let monster of monsters) {
    showMonsters(monster);
}



function showMonsters(monster) {
    const monsterDiv = document.createElement('div');
monsterDiv.className = 'monster';
const img = document.createElement('img');
img.src = `https://robohash.org/${monster.id}?set=set2`;
img.alt = monster.name;
const paragraph = document.createElement('p');
paragraph.className = 'name';
paragraph.innerText = monster.name;
const email = document.createElement('p')
email.className = 'email';
email.innerText = monster.email;

monsterDiv.append(img, paragraph, email);

document.querySelector('.monsters').append(monsterDiv);
}

showNotFound();

function showNotFound() {
    const notFound = document.createElement('div');
notFound.className = 'p-5 not-found';
notFound.style.display = 'none';
const span = document.createElement('span');
span.innerText = '404';
const headings = document.createElement('h1');
headings.innerText = '🧟‍♂️ No Monster Found 🧟‍♂️';

notFound.append(span, headings);
document.querySelector('.monsters').append(notFound);
}



document.querySelector('#search-monster').addEventListener('keyup', function(e){
    const keyword = e.target.value.toLowerCase();

    const monsters = document.querySelectorAll('.monster');

    let notFound = true;

    for (let monster of monsters) {
        const name = monster.children[1].innerText.toLowerCase();

        const email = monster.children[2].innerText.toLowerCase();

        if(name.includes(keyword) || email.includes(keyword)){
          monster.style.display = 'block';
          notFound = false;
        } else {
            monster.style.display = 'none';
        }
    }
    if (notFound) {
        document.querySelector('.not-found').style.display = 'block';
    } else {
        document.querySelector('.not-found').style.display = 'none';
    }
})

document.querySelector('#search-monster-form').addEventListener('submit', (e) => {
    e.preventDefault();
})