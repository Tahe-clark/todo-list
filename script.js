function addTask() {
  const input = document.getElementById("new-task");
  if (!input) return console.error("Input introuvable");

  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.innerHTML = `
    <input type="checkbox" onchange="updateCounter()">
    <span>${text}</span>
  `;

  const list = document.getElementById("tasks-list");
  if (!list) return console.error("Liste introuvable");

  list.appendChild(li);
  input.value = "";
  updateCounter();
}

function updateCounter() {
  const unchecked = document.querySelectorAll(
    '#tasks-list input[type="checkbox"]:not(:checked)'
  ).length;

  const countElement = document.getElementById("count");
  if (countElement) {
    countElement.textContent = unchecked;
  } else {
    console.error("Compteur introuvable");
  }
}