'use strict';
(function ()
{

  const todos = [];

  const tbody = document.getElementById('todo-list');
  const inputTask = document.getElementById('inputTask');
  const addButton = document.getElementById('addButton');
  
  const todoList = document.getElementById('todo-list');

  const addBtn = document.getElementById('addButton').addEventListener('click', addTodo);
  const allBtn = document.getElementById('allBtn').addEventListener('change', watchTodo);
  const workingBtn = document.getElementById('workingBtn').addEventListener('change', watchTodo);
  const doneBtn = document.getElementById('doneBtn').addEventListener('change', watchTodo);

  const statusRadioBtn = document.getElementsByName('status');
  
  let workingTodos;
  let finishedTodos;

  function addTodo() {
    const taskName = document.getElementById('inputTask');
    const taskNameValue = taskName.value;
    taskName.value = "";
       const todo = {
         status: statusType.ALL,
         content: taskNameValue,
         state: '作業中'
       }
    todos.push(todo);
    watchTodo();
  }



   function createElement(arrayTodo) {
        for (let i = 0; i < arrayTodo.length; i++) {
          const tr = document.createElement('tr');
          const idNumber = document.createElement('td');
          const tdTable = document.createElement('td');
          const state = document.createElement('td');
          const del = document.createElement('td');

          const stateButton = document.createElement('button');
          const removeButton = document.createElement('button');

          idNumber.innerHTML = arrayTodo[i].number;
          tdTable.innerHTML = arrayTodo[i].content;
          stateButton.innerHTML = arrayTodo[i].state;
          removeButton.innerHTML = "削除";

          state.appendChild(stateButton);
          del.appendChild(removeButton);

          stateButton.classList.add('state');
          stateButton.id = i;
          removeButton.classList.add('remove');
          removeButton.id = i;

          tr.appendChild(idNumber);
          tr.appendChild(tdTable);
          tr.appendChild(state);
          tr.appendChild(del);

          tbody.appendChild(tr);
        }
      }

  //ラジオボタンの状態をセット
  const statusType = {
    ALL: 'allBtn',
    WORKING: 'workingBtn',
    DONE: 'doneBtn',
  };

  //削除を実行する関数
  const delList = index =>
  {
    todos.splice(index, 1);
    showTodo();
  }
  
  //削除ボタンを作成する関数
  const createDelBtn = (index) =>
  {
    const delButton = document.createElement('button');
    delButton.textContent = '削除';
    delButton.addEventListener('click', () =>
    {
      delList(index);
    })
    return delButton;
  }

  addButton.addEventListener('click', () =>
  {
    const todoTable = inputTask.value;

    //フォームの値をクリアにする
    inputTask.value = '';
    const todoBtn = document.createElement('button');
    todoBtn.textContent = '作業中';
    todoBtn.addEventListener('click', () =>
    {
      if (todoBtn.textContent === '作業中')
      {
        todoBtn.textContent = '完了';
      } else
      {
        todoBtn.textContent = '作業中';
      }
    })



    todo.value = todoTable;
    todo.state = todoBtn;

    todos.push(todo);

    showTodo();
  });

  function watchTodo()
  {
    for (let i = tbody.childNodes.length - 1; i >= 0; i--)
    {
      tbody.removeChild(tbody.childNodes[i]);
    }
    for (let i = 0; i < todos.length; i++)
    {
      todos[i].number = i;
    }

    if (statusRadioBtn[0].checked) {
      createElement(todos);
    } else if (statusRadioBtn[1].checked)
    {
      workingTodos = todos.filter(todo => todo.state === '作業中');
      createElement(workingTodos);
    } else if (statusRadioBtn[2].checked)
    {
      finishedTodos = todos.filter(todo => todo.state === '完了');
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
    while (todoList.firstChild)
    {
      todoList.textContent = '';
    }
    for (let i = tbody.childNodes.length - 1; i >= 0; i--)
    {
      tbody.removeChild(tbody.childNodes[i]);
    }
    let id = this.getAttribute('id');

    if (statusRadioBtn[0].checked)
    {
      if (todos[id].state === '作業中')
      {
        todos[id].state = '完了';
      } else
      {
        todos[id].state = '作業中';
      }
      watchTodo();
    } else if (statusRadioBtn[1].checked)
    {
      if (workingTodos[id].state === '作業中')
      {
        workingTodos[id].state = '完了';
      } else
      {
        workingTodos[id].state = '作業中';
      }
      watchTodo();
    } else if (statusRadioBtn[2].checked)
    {
      if (finishedTodos[id].state === '作業中')
      {
        finishedTodos[id].state = '完了';
      } else
      {
        finishedTodos[id].state = '作業中';
      }
      watchTodo();
    }
  }


  function remove () {
    for (let i = tbody.childNodes.length - 1; i >= 0; i--) {
      tbody.removeChild(tbody.childNodes[i]);
    }
    let id = this.getAttribute('id');

    if (todoShow[0].checked) {
      todos.splice(id, 1);
    } else if (todoShow[1].checked) {
      todos.splice(workingTodos[id].number, 1);
    } else if (todoShow[2].checked) {
      todos.splice(finishedTodos[id].number, 1);
    }
    watchTodo();
  }
  const showTodo = () =>
  {
    while (todoList.firstChild)
    {
      todoList.textContent = '';
    }

    };
  }
  
)
