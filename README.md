# Todo

Simple Todo App Script which you can use in any of your project!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need to have a ES6 Compatible Browser. In most of the cases, Google Chrome will be suitable for you.

### Installing

It's really easy to install this script. Insert 3 lines of code and you're good to go!

```
<script src = "path/todo.js"></script>
```

Now, create as many task as you need.

```
let todos = new TodoApp(rootApp, tasks);
```

Now it's time to run the code:

```
todos.todoHandler();
```

Here's a quick demo:
```
let todos = new TodoApp(
		// Your root app where you want to render the tasks
		document.getElementById('todoLister'),
		// Tasks. Note: Tasks should be of type Array
		[
			'Get Up',
			'Brush Teeth',
			'Goto Work'
		]
	); 
todos.todoHandler();
```

## Built With

* [ES6](http://es6-features.org/) - The only language used

## Contributing

You can submit the pull requests to us.

## Version Control

We use [Git](https://git-scm.com/) for version control.

## Authors

* **Sanjay Banjade** - *All work* - [SanjayBanjade](https://github.com/SanjayBanjade)

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
