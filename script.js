const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const weekContainer = document.querySelector(".week");

days.forEach(day => {
  const dayColumn = document.createElement("div");
  dayColumn.className = "day";
  dayColumn.innerHTML = `
    <h3>${day}</h3>
    <input type="text" placeholder="Add a task..." class="task-input" />
    <button onclick="addTask(this)">Add</button>
    <ul></ul>
  `;
  weekContainer.appendChild(dayColumn);
});
function addTask(button) {
    const input = button.previousElementSibling;
    const taskText = input.value.trim();
    if (taskText === "") return;
  
    const ul = button.nextElementSibling;
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" onchange="toggleDone(this)" />
      <span>${taskText}</span>
      <button onclick="deleteTask(this)">🗑️</button>
    `;
    ul.appendChild(li);
    input.value = "";
  }
  
  function toggleDone(checkbox) {
    const span = checkbox.nextElementSibling;
    span.style.textDecoration = checkbox.checked ? "line-through" : "none";
    span.style.color = checkbox.checked ? "gray" : "black";
  }
  
  function deleteTask(button) {
    button.parentElement.remove();
  }
// ----- Top Priorities -----

function addPriority() {
    const input = document.getElementById("priority-input");
    const list = document.getElementById("priority-list");
    const text = input.value.trim();
  
    if (text === "") return;
    if (list.children.length >= 3) {
      alert("Only 3 priorities allowed.");
      return;
    }
  
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${text}</span>
      <button onclick="this.parentElement.remove()">🗑️</button>
    `;
    list.appendChild(li);
    input.value = "";
  }
  
  // ----- Reminders -----
  
  function addReminder() {
    const task = document.getElementById("reminder-task").value.trim();
    const date = document.getElementById("reminder-date").value;
    const time = document.getElementById("reminder-time").value;
    const list = document.getElementById("reminder-list");
  
    if (!task || !date || !time) {
      alert("Please fill in all reminder fields.");
      return;
    }
  
    const li = document.createElement("li");
    li.innerHTML = `
      <span>📅 ${task} — ${date} at ${time}</span>
      <button onclick="this.parentElement.remove()">🗑️</button>
    `;
    list.appendChild(li);
  
    // Optional: Notification logic could go here
    document.getElementById("reminder-task").value = "";
    document.getElementById("reminder-date").value = "";
    document.getElementById("reminder-time").value = "";
  }
    