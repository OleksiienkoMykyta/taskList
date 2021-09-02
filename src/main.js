function bodyMaker() {
  const div = document.createElement('div');
  div.classList.add('container');
  document.body.prepend(div);

  const button = document.createElement('button');
  button.id = 'button';
  button.innerHTML = 'Добавить';
  div.prepend(button);

  const input = document.createElement('input');
  input.id = 'input';
  div.prepend(input);

  const ul = document.createElement('ul');
  ul.id = 'ul';
  ul.classList.add('ul');
  div.append(ul);
}

function liAdder(val) {
  const li = document.createElement('li');
  li.id = 'li';
  li.innerHTML = val;
  document.querySelector('#ul').append(li);
}

function storageSet(arr){
  const str = JSON.stringify(arr);
  localStorage.setItem('list', str);
}

function storageGet(arr){
  const getStr = localStorage.getItem('list');
  arr = JSON.parse(getStr);
  const val = document.querySelector('#input').value;
  console.log('VAL', val, '|||||||||');
  const trimmed = val.trim();
  console.log('trim', trimmed, '|||||||||');
  if (trimmed !== ''){
    arr.push(trimmed);
  }
  return arr;
}

function sortFunc() {
  const items = document.querySelectorAll('#ul li');
  let arr = [];
  if (localStorage.getItem('list')){
    arr = storageGet(arr);
  }

  if(!localStorage.getItem('list')){
    for (let i = 0; i < items.length; i += 1) {
      arr.push(items[i].innerHTML);
    }
  }

  arr.sort();
  localStorage.clear();
  storageSet(arr);
  document.querySelector('#ul').innerHTML = '';
  document.querySelector('#input').value = '';
  for (let i = 0; i < arr.length; i += 1) {
    liAdder(arr[i]);
  }
}

function listMaker() {
  bodyMaker();

  document.querySelector('#button').addEventListener('click', () => {
    if (document.querySelector('#input').value !== '') {
      liAdder(document.querySelector('#input').value);
      sortFunc();
    }
  });

  document.querySelector('#input').addEventListener('keypress', () => {
    if (event.keyCode === 13) {
      if (document.querySelector('#input').value !== '') {
        liAdder(document.querySelector('#input').value);
        sortFunc();
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  // localStorage.clear();
  listMaker();
  if (localStorage.getItem('list')){
    sortFunc();
  }
});
