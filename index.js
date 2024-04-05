function addTodo() {
  var input = document.getElementById('newTodo');
  var todoText = input.value.trim();

  if (todoText === '') return; // Don't add empty todo items

  var todoList = document.getElementById('todo-list');

  var li = document.createElement('li');
  li.className = 'todo-item';
  
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', toggleTodo);

  var label = document.createElement('label');
  label.textContent = todoText;

  var deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', deleteTodo);

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  input.value = ''; // Clear input field after adding todo
}

function toggleTodo() {
  var listItem = this.parentNode;
  if (this.checked) {
    listItem.style.textDecoration = 'line-through';
    listItem.style.opacity = '0.5';
  } else {
    listItem.style.textDecoration = 'none';
    listItem.style.opacity = '1';
  }
}

function deleteTodo() {
  var listItem = this.parentNode;
  listItem.remove();
}
