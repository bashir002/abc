
const list = document.querySelector('#list');
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const clearBtn = document.querySelector('#clearBtn');

loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', addGrocery);
    list.addEventListener('click', deleteItem)
    clearBtn.addEventListener('click', clearGrocery);
}

function hideClear() {
    clearBtn.style.display = 'none';
}

function clearGrocery(e) {
 const items = document.querySelectorAll('.list-item')
 items.forEach(item => {
     item.remove();
 })

 hideClear()
}

function deleteItem(e) {
 if (e.target.className === 'list-item')
    e.target.remove();
if (list.children.length === 1) {
        hideClear()
    }
    
}


function showClear() {
    clearBtn.style.display = "inline-block"
}

function addGrocery(e) {
    const text = input.value

if(text === '') {
    showAlert();
} else {
const li = document.createElement('li')
li.className = 'list-item'
li.textContent = text;

list.appendChild(li);
input.value = '';
if (list.children.length > 1) {
    showClear()
}
console.log(li);
}
    e.preventDefault();
}

// function showAlert() {
//     alert.style.display = 'block';

//     setTimeout(() => {
//         alert.style.display = "none";
//     }, 2000);
//}