document.getElementById('container');

document.querySelector('#container');

document.querySelectorAll('.second');

document.querySelector('ol .third');

let divText =  document.querySelector('#container');
divText.innerText = 'Hello!';

let divFooter = document.querySelector('.footer');
divFooter.classList.add('main');

divFooter.classList.remove('main');

let newLI = document.createElement('li');

newLI.innerText = 'four';

let list = document.querySelector('ul');
list.append(newLI);

let allLI = document.querySelectorAll('ol li');
for(let li of allLI){
    li.style.backgroundColor = 'green';
}

divFooter.remove();