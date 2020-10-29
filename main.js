'use strict';
(function ()
{

  const todos = [];

  const inputTask = document.getElementById('inputTask');
  const addButton = document.getElementById('addButton');

  const todoList = document.getElementById('todo-list');

  //削除ボタンを作成する関数
  const createDelBtn = (tr) => {
    const delButton = document.createElement('button');
    delButton.textContent = '削除';
    delButton.addEventListener('click', () => {
      todos.splice(tr,1);
      showTodo();
    })
  }

  addButton.addEventListener('click', () =>
  {
    const todoTable = inputTask.value;
    const todoBtn = document.createElement('button');
    todoBtn.textContent = '作業中';


    const todo = {};
    todo.value = todoTable;
    todo.state = todoBtn;
  });

  const showTodo = () => {
    while (todoList.firstChild) {
      todoList.textContent = '';
    }

    todos.forEach((todo, index) => {
      const tr = document.createElement('tr');
      const idNumber = document.createElement('td');
      const tdTable = document.createElement('td');
      const state = document.createElement('td');
      const del = document.createElement('td');

      idNumber.textContent = index + 1;
      tdTable.textContent = todo.value;
      
      createDelBtn(index, delButton);
      todoList.appendChild(tr);
      tr.appendChild(idNumber);
      tr.appendChild(tdTable);
      tr.appendChild(state);
      tr.appendChild(del);
      state.appendChild(todoBtn);
    });

    const delList = index => {
      todos.splice(index, 1);
      showTodo();
    }
  }
}());