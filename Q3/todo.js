document.getElementById('new-task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('new-task-title').value;
    const details = document.getElementById('new-task-details').value;
    addTask(title, details);
    this.reset();
});

function addTask(title, details) {
    const list = document.getElementById('tasks-list');
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = `
        <div class="task-content">
            <h3>${title}</h3>
            <p>${details}</p>
        </div>
        <div class="task-actions">
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;
    list.appendChild(task);
}

function editTask(button) {
    const task = button.closest('.task');
    const title = prompt('Edit the title', task.querySelector('h3').textContent);
    const details = prompt('Edit the details', task.querySelector('p').textContent);
    if (title) {
        task.querySelector('h3').textContent = title;
    }
    if (details !== null) {
        task.querySelector('p').textContent = details;
    }
}

function deleteTask(button) {
    if (confirm('Delete this task?')) {
        remove = button.closest('.task');
        remove.remove();
    }
}





