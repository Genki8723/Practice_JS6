'use strict';
(function ()
{

  const todos = [];

  const inputTask = document.getElementById('inputTask');
  const addButton = document.getElementById('addButton');
  
  const todoList = document.getElementById('todo-list');

  const workingBtn = document.getElementById('workingBtn');
  const doneBtn = document.getElementById('doneBtn');

  const statusRadioBtn = document.getElementsByName('status');
  


  const todoChange = (tr, switchBtn) => {    
          tr.classList.remove('hidden');
          if(workingBtn.checked === true) {
               tr.classList.remove('hidden');
               if(switchBtn.textContent === '完了') {
                    tr.classList.add('hidden');
               }
          }else if (doneBtn.checked === true) {
               tr.classList.remove('hidden');
               if(switchBtn.textContent === '作業中') {
                    tr.classList.add('hidden');
               }
          }
     }    
  //ラジオボタンの状態をセット
  const statusType = {
    ALL: 'allBtn',
    WORKING: 'workingBtn',
    DONE: 'doneBtn',
  };

  //削除を実行する関数
   const delList = index => {
      todos.splice(index, 1);
      showTodo();
   }
  
  //削除ボタンを作成する関数
  const createDelBtn = (index) => {
    const delButton = document.createElement('button');
    delButton.textContent = '削除';
    delButton.addEventListener('click', () => {
      delList(index);
    })
    return delButton;
  }

  addButton.addEventListener('click', () => {
    const todoTable = inputTask.value;

    //フォームの値をクリアにする
    inputTask.value = '';
    const todoBtn = document.createElement('button');
    todoBtn.textContent = '作業中';
    todoBtn.addEventListener('click' ,() => {
      if(todoBtn.textContent === '作業中') {
        todoBtn.textContent = '完了';
      } else {
        todoBtn.textContent = '作業中';
      }
    })

  
    const todo = {status: statusType.ALL};

    todo.value = todoTable;
    todo.state = todoBtn;


    todos.push(todo);

    showTodo();
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
      const switchBtn = todo.state; 


      const delButton = createDelBtn(index);
      const disButton = document.getElementsByName('status');

      for (let i = 0; i < disButton.length; i++) {
        disButton[i].addEventListener('change', function () {
          todoChange(tr, switchBtn);
        });
      }

      todoChange(tr, switchBtn);

      del.appendChild(delButton);
      state.appendChild(todo.state);
      todoList.appendChild(tr);
      tr.appendChild(idNumber);
      tr.appendChild(tdTable);
      tr.appendChild(state);
      tr.appendChild(del);
    });

  
  }
}());