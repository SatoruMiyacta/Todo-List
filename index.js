const form = document.getElementsByClassName('form');
const button = document.getElementsByClassName('c-btn')[1,2];
const add = document.getElementsByClassName('add-list');

// 追加リスト作成

const addTasks = (task) => {

    // 
    const listItem = document.createElement('td');
    const showItem = taskList.appendChild(listItem);
    showItem.innerHTMl = task;

    // 
    const deleteButton = document.createElement('button');
    deleteButton.innerHTMl = 'Delete';
    listItem.appendChild(deleteButton);

    // 
    deleteButton.addEventListener('click', evt => {
        evt.preventDefault();
        deleteTasks(deleteButton);
    });
};

// 
const deleteTasks = (deleteButton) => {
    const chosenTask = deleteButton.closest('td');
    add.removeChild(chosenTask);
};

button.addEventListener('click', evt => {
    evt.preventDefault();
    const task = form.value;
    addTasks(task);
    form.value = '';
});


