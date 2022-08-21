
let grid = document.querySelector('.grid');
let list = document.querySelector('.list');
let ul = document.querySelector('ul');
let mic = document.getElementById('voice-search');
let search = document.querySelector('input');
let li = document.getElementsByTagName('li');


list.onclick = () => {
    ul.classList.add('list-display');
    list.classList.add('active');
    grid.classList.remove('active');
}

grid.onclick = () => {
    ul.classList.remove('list-display');
    list.classList.remove('active');
    grid.classList.add('active');
}

//  search Item 

search.onkeyup = () => {
    const x = search.value.toLowerCase();
    showItem(x);
}

function showItem(x){
    for(let list of li){
        let product = list.children[1].children[0].innerHTML;
        let name = product.toLowerCase();
        if(name.indexOf(x) > -1){
            list.style.display = '';
        }
        else{
            list.style.display = 'none';
        }
    }
}

// voice search

mic.onclick = () => {
    mic.classList.add('record');
    let recognization = new webkitSpeechRecognition;
    recognization.lang = 'en-US';
    recognization.start();
    recognization.onresult = e => {
        const m = search.value = e.results[0][0].transcript;
        showItem(m);
        mic.classList.remove('record');
    }
}