# todo_js_practice

To-Do List App

This is a simple command-line To-Do List application written in JavaScript. The app allows users to add, list, and delete tasks interactively.

Features

	•	Add tasks to the to-do list
	•	List all tasks with their indexes
	•	Delete tasks by their index
	•	Quit the application

How It Works

The app continuously prompts the user to enter a command:
	•	add: Prompts the user to enter a task to add to the to-do list.
	•	list: Displays all tasks in the list along with their indexes.
	•	delete: Prompts the user to enter the index of the task to delete.
	•	quit: Exits the application.

The app will continue to run until the user types “quit”.

Code Structure

	•	let todo = []: Initializes an empty array to store the tasks.
	•	let req = prompt("please enter your request"): Prompts the user to enter a command at the start.
	•	Loop (while (true)): Runs an infinite loop to handle user commands until “quit” is entered.

Commands

	1.	Add a Task
	•	If the user enters “add”, they are prompted to input a new task.
	•	The task is added to the todo array.
	•	A confirmation message is displayed.
	2.	List Tasks
	•	If the user enters “list”, the app displays all tasks with their indexes.
	•	If the list is empty, it displays a message indicating no tasks are present.
	3.	Delete a Task
	•	If the user enters “delete”, they are prompted to enter the index of the task they want to delete.
	•	The app checks if the index is valid before deleting the task.
	•	If the index is valid, the task is removed, and a confirmation message is shown. If not, it displays an “Invalid index” message.
	4.	Quit
	•	If the user enters “quit”, the app displays a “quitting app” message and exits the loop.
