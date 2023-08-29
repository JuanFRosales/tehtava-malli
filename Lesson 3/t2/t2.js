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

const ul = document.querySelector('ul'); //makes variable


const fragment = document.createDocumentFragment();
// Append the todo items to the document fragment
todoList.forEach(item => {
  const list = document.createElement('li');
  const li = `<li>
    <input type="checkbox" id="todo-${item.id}" ${item.completed ? 'checked' : ''}>
    <label for="todo-${item.id}">${item.task}</label>
  `;
  ul.insertAdjacentHTML('beforeend', li);
});



