let input = document.getElementById("input");
let listContainer = document.getElementById("list-container");

// Add task
function addTask() {
    if (input.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        // Delete icon
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    input.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.nodeName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    } else if (e.target.nodeName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);
//local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();