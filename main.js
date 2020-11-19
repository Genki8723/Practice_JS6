'use strict';

  const tbody = document.getElementById('todo-list');
  const todoStatus = document.getElementsByName('status');
  const todos = [];

  document.getElementById('addButton').addEventListener('click', addTodo);
  document.getElementById('allBtn').addEventListener('change', showTodo);
  document.getElementById('workingBtn').addEventListener('change', showTodo);
  document.getElementById('doneBtn').addEventListener('change', showTodo);

  function addTodo()
  {
    const taskName = document.getElementById('inputTask');
    const taskNameValue = taskName.value;
    taskName.value = '';
    const todo = {
      content: taskNameValue,
      state: '作業中'
    }

    todos.push(todo);

    showTodo();
  }

  function createElement(arrayTodo)
  {
    for (let i = 0; i < arrayTodo.length; i++)
    {
      const tr = document.createElement('tr');
      const idNumber = document.createElement('td');
      const tdTable = document.createElement('td');
      const state = document.createElement('td');
      const del = document.createElement('td');

      const stateBtn = document.createElement('button');
      const delBtn = document.createElement('button');

      idNumber.innerHTML = arrayTodo[i].number;
      tdTable.innerHTML = arrayTodo[i].content;
      stateBtn.innerHTML = arrayTodo[i].state;
      delBtn.innerHTML = "削除";

      state.appendChild(stateBtn);
      del.appendChild(delBtn);

      stateBtn.classList.add('state');
      stateBtn.id = i;
      delBtn.classList.add('remove');
      delBtn.id = i;

      tr.appendChild(idNumber);
      tr.appendChild(tdTable);
      tr.appendChild(state);
      tr.appendChild(del);

      tbody.appendChild(tr);
    }
  }

  function showTodo()
  {
    for (let i = tbody.childNodes.length - 1; i >= 0; i--)
    {
      tbody.removeChild(tbody.childNodes[i]);
    }
    for (let i = 0; i < todos.length; i++)
    {
      todos[i].number = i;
    }

    if (todoStatus[0].checked)
    {
      createElement(todos);
    } else if (todoStatus[1].checked)
    {
      const workingTodos = todos.filter(todo => todo.state === '作業中');
      createElement(workingTodos);
    } else if (todoStatus[2].checked)
    {
      const finishedTodos = todos.filter(todo => todo.state === '完了');
      createElement(finishedTodos);
    }

    const stateButtons = document.getElementsByClassName('state');
    for (let i = 0; i < stateButtons.length; i++)
    {
      stateButtons[i].addEventListener('click', changeState);
    };

    const removeButtons = document.getElementsByClassName('remove');
    for (let i = 0; i < removeButtons.length; i++)
    {
      removeButtons[i].addEventListener('click', remove);
    };
  }

  function changeState()
  {
    for (let i = tbody.childNodes.length - 1; i >= 0; i--)
    {
      tbody.removeChild(tbody.childNodes[i]);
    }
    let id = this.getAttribute('id');

    if (todoStatus[0].checked)
    {
      if (todos[id].state === '作業中')
      {
        todos[id].state = '完了';
      } else
      {
        todos[id].state = '作業中';
      }
      showTodo();
    } else if (todoStatus[1].checked)
    {
      if (workingTodos[id].state === '作業中')
      {
        workingTodos[id].state = '完了';
      } else
      {
        workingTodos[id].state = '作業中';
      }
      showTodo();
    } else if (todoStatus[2].checked)
    {
      if (finishedTodos[id].state === '作業中')
      {
        finishedTodos[id].state = '完了';
      } else
      {
        finishedTodos[id].state = '作業中';
      }
      showTodo();
    }

  }

  function remove()
  {
    for (let i = tbody.childNodes.length - 1; i >= 0; i--)
    {
      tbody.removeChild(tbody.childNodes[i]);
    }
    let id = this.getAttribute('id');

    if (todoStatus[0].checked)
    {
      todos.splice(id, 1);
    } else if (todoStatus[1].checked)
    {
      todos.splice(workingTodos[id].number, 1);
    } else if (todoStatus[2].checked)
    {
      todos.splice(finishedTodos[id].number, 1);
    }
    showTodo();
  }
