const textInputField = document.querySelector('#text-input-feild');
const addButton = document.querySelector('#add-button');
const todosContainer = document.querySelector('.todos-container');

addButton.addEventListener('click', () =>{
    if(textInputField.value.trim().length == '')
    return;
    // console.log(textInputField.value);

    //create div add class todo-item-container
    const todoItemContainer =document.createElement('div');
    todoItemContainer.classList.add('todo-item-container');

    todosContainer.appendChild(todoItemContainer);

    // craete p element and Id = todo-text
const todoText = document.createElement('p');
todoText.Id ='todo-text'
todoText.innerText = textInputField.value;
todoItemContainer.appendChild(todoText);

// add double click to todo text
todoText.addEventListener('dblclick', () =>{
    todoText.classList.add('line-through');
    editButton.setAttribute("disabled", "disabled")
})

// create button add id = edit = button
const editButton = document.createElement('button');
editButton.id='edit-button';
// create img add to edit button
const editImage = document.createElement('img');
editImage.src = 'edit.png';
editButton.appendChild(editImage);
todoItemContainer.appendChild(editButton)
// add click event ti edit button here 
editButton.addEventListener('click', () =>{
    textInputField.value = todoText.innerText;
    const parent = editButton.parentElement;
    parent.parentElement.removeChild(parent)
});
// create button add id = delete-button
const deleteButton = document.createElement('button');
deleteButton.id = 'delete-button';

//create img add it to delete button
const deleteImage = document.createElement('img');
deleteImage.src = 'delete.png';
// deleteImage.Id = '.delete-icon'
deleteButton.appendChild(deleteImage);
todoItemContainer.appendChild(deleteButton);

// add click event for deleteButton
deleteButton.addEventListener('click', () =>{
    const parent =deleteButton.parentElement;
    parent.parentElement.removeChild(parent);
})




textInputField.value = "";

});