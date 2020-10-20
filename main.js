'use strict';
  const todos = [];

  const inputTask = document.getElementById('inputTask');
  const addButton = document.getElementById('addButton');

  const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', () => {
  const todoTable = inputTask.value;
  const todoBtn = document.createElement('button');
  todoBtn.textContent = '作業中';


  const todo = {};
  todo.value = todoTable;
  todo.state = todoBtn;
});


  todos.forEach((todo,index) => {
    const tr = document.createElement('tr');
    const idNumber = document.createElement('td');
    const tdTable = document.createElement('td');
    const state = document.createElement('td');
    const del = document.createElement('td');

    idNumber.textContent = index + 1;
    tdTable.textContent = todo.value;

    const delButton = document.createElement('button');
    delButton.textContent = '削除';

  todoList.appendChild(tr);
  tr.appendChild(idNumber);
  tr.appendChild(tdTable);
  tr.appendChild(state);
  tr.appendChild(del);
  state.appendChild(todoBtn);
  del.appendChild(delButton);
});