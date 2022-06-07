"use script";

// --------------1----------------


// const input = document.getElementById('input');
// const button = document.getElementsByClassName('c-btn');
// const addList = document.getElementsByClassName('add-list');

// // 追加リスト作成

// const addTasks = (task) => {
//     // 
//     const listItem = document.createElement('tr');
//     const showItem = addList.appendChild(listItem);
//     showItem.innerHTMl = task;

//     // 
//     const deleteButton = document.createElement('button');
//     deleteButton.innerHTMl = 'Delete';
//     listItem.appendChild(deleteButton);

//     // 
//     deleteButton.addEventListener('click', evt => {
//         evt.preventDefault();
//         deleteTasks(deleteButton);
//     });
// };

// // 
// const deleteTasks = (deleteButton) => {
//     const chosenTask = deleteButton.closest('tr');
//     addList.removeChild(chosenTask);
// };

// button.addEventListener('click', evt => {
//     evt.preventDefault();
//     const task = input.value;
//     addTasks(task);
//     input.value = '';
// });







// -------------  2  ---------------- 

// const table = document.querySelector('table');
// const input = document.getElementById('input');
// const btn = document.getElementsByTagName('button')[0];
// const buttonEdit = document.getElementsByTagName('button')[1];
// const buttonDelete = document.getElementsByTagName('button')[2];


// btn.addEventListener('click', () => {

//     // オブジェクト格納

//     const item = {};

//     item.done = false;
//     item.input = input.value;
//     item.buttonEdit = buttonEdit.value;
//     item.buttonDelete = buttonDelete.value;
    

//     // フォームをリセット
//     input.value = '';
//     buttonEdit.value = '';
//     buttonDelete.value = '';

//     console.log(item);


//     // table生成

//     const tr = document.createElement('tr');

//     for (const prop in item) {
//         const td = document.createElement('td');
//         td.textContent = item[prop];
//         tr.appendChild(td);
//     }

//     table.append(tr);

    


// });





// -----------3------------------

const table = document.querySelector('table');
const input = document.getElementById('input');
const addBtn = document.getElementsByTagName('button')[0];
const buttonEdit = document.getElementsByTagName('button')[1];
const buttonDelete = document.getElementsByTagName('button')[2];

// 配列

let number = 1;
let todos = [];

// リスト追加

addBtn.addEventListener("click", () => {

    // 何の値も入力されなかったとき

    if (input.value ==="") {
        alert("タスクを入力してください");
        return;
    }

    // 空配列にtodoを保存する

    todos.push({
        id: number,
        title: input.value
    });

    createListView();

    input.value = "";
    number++;

});





const createListView = () => {


    // タスクを削除

    while (table.firstChild){
        table.removeChild(table.firstChild);
    }

    // table作成

    todos.forEach((todo) => {

    const todoItem = document.createElement("tr");
    const todoId = document.createElement("td");
    const todoTitle = document.createElement("td");
    const todoEdit = document.createElement("td");
    const editBtn = document.createElement("button");
    const todoDelete = document.createElement("td");
    const deleteBtn = document.createElement("button");

    todoId.textContent = todo.id;
    todoTitle.textContent = todo.title;
    editBtn.textContent = "Edit";
    editBtn.classList.add("c-btn");
    todoEdit.appendChild(editBtn);
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("c-btn");
    deleteBtn.classList.add("secondary");
    todoDelete.appendChild(deleteBtn);

    todoItem.appendChild(todoId);
    todoItem.appendChild(todoTitle);
    todoItem.appendChild(todoEdit);
    todoItem.appendChild(todoDelete);

    table.appendChild(todoItem);

    });

    
};






