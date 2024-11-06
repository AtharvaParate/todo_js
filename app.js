let todo = [];

let req = prompt("please enter your request");

while (true) {
  if (req == "quit") {
    console.log("quitting app");
    break;
  }

  if (req == "list") {
    console.log("-----------------");
    if (todo.length === 0) {
      console.log("No tasks in the list.");
    } else {
      for (let i = 0; i < todo.length; i++) {
        console.log(`${i}: ${todo[i]}`);
      }
    }
    console.log("-----------------");
  } else if (req == "add") {
    let addTask = prompt("please enter the task you want to add");
    todo.push(addTask);
    console.log("task added successfully");
  } else if (req == "delete") {
    let idx = parseInt(prompt("please enter the task index to delete"));
    if (!isNaN(idx) && idx >= 0 && idx < todo.length) {
      todo.splice(idx, 1);
      console.log("task deleted successfully");
    } else {
      console.log("Invalid index.");
    }
  } else {
    console.log("Invalid command. Please enter add, list, delete, or quit.");
  }

  req = prompt("please enter your request");
}
