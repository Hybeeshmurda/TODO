let todos = [];

		function addTodo() {
			let todoInput = document.getElementById("todo-input");
			let todoList = document.getElementById("todo-list");
			let todoText = todoInput.value.trim();
			if (todoText === "") {
				alert("Please enter a todo item.");
				return;
			}
			todos.push(todoText);
			let todoItem = document.createElement("li");
			todoItem.innerText = todoText;
			todoList.appendChild(todoItem);
			todoInput.value 
		}