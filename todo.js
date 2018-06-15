class TodoApp {
	constructor(rootApp, todoTasks) {
		this.rootApp = rootApp;
		this.todoTasks = todoTasks;
		this.todoStatus = this.todoTasks.map((x) => x = false);
	}
	todoHandler() {
		if(Object.prototype.toString.call(this.todoTasks) === '[object Array]') {
			this.todoTasks.forEach((el, id) => {
				const label = document.createElement('label');
				const radio = document.createElement('input');
				const brTag = document.createElement('br');

				label.innerText = el;
				label.className = 'task-name';
				radio.setAttribute('type', 'radio');
				radio.value = id;

				if(radio)
					radio.onchange = () => {this.markTaskComplete(id)};

				this.rootApp.appendChild(radio);
				this.rootApp.appendChild(label);
				this.rootApp.appendChild(brTag);
			});
		} else {
			throw new Error('Tasks should be of type Array');
		}
	}
	markTaskComplete(id) {
		this.todoStatus[id] = true;
		if(this.todoStatus[id]) {
			document.getElementsByClassName('task-name')[id].style.textDecoration = 'line-through';
		}
	}
}
