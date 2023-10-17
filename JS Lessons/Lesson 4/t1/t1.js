'use strict';

// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const ul = document.querySelector('ul');

function teeLista() {
  ul.innerHTML = '';

  for (const [i, todo] of todoList.entries()) {
    console.log(i);
    const li = document.createElement('li');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const delButton = document.createElement('button');

    input.type = 'checkbox';
    input.id = 'todo-' + todo.id;
    input.checked = todo.completed;

    input.addEventListener('change', function (evt) {
      todo.completed = input.checked;
      console.log(todoList);
    });

    label.htmlFor = 'todo-' + todo.id;
    label.innerText = todo.task;

    delButton.innerHTML = '&#x2A09';
    delButton.addEventListener('click', function () {
      ul.removeChild(li);
      todoList.splice(i, 1);
      console.log(todoList);
    });

    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(delButton);
    ul.appendChild(li);
  }
}
teeLista();

const addButton = document.querySelector('#add');
const dialog = document.querySelector('dialog');
const form = document.querySelector('form');

addButton.addEventListener('click', function () {
  dialog.showModal();
});

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const text = document.querySelector('dialog input').value;
  const item = {
    id: todoList[todoList.length - 1].id + 1,
    task: text,
    completed: false,
  };
  todoList.push(item);
  console.log(todoList);
  teeLista();
  dialog.close();
});
