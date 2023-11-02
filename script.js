const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Create a new list item
        const listItem = document.createElement("li");

        // Create a checkbox and a delete button
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.textContent = "Delete";

        // Add event listeners for checkbox and delete button
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                listItem.classList.add("completed");
            } else {
                listItem.classList.remove("completed");
            }
        });

        deleteButton.addEventListener("click", function () {
            listItem.remove();
            updateTaskCount();
        });

        // Add the task text, checkbox, and delete button to the list item
        listItem.textContent = taskText;
        listItem.appendChild(checkbox);
        listItem.appendChild(deleteButton);

        // Add the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";

        // Update the task count
        updateTaskCount();
    }
});

function updateTaskCount() {
    taskCount.textContent = taskList.children.length;
}
