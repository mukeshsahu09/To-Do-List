const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

let editTodo = null;
addBtn.addEventListener('click', (e) => {
    if (inputBox.value === "") {
        alert("Enter some task!!");
        return;
    }
    if (addBtn.value === "Edit") {
        editTodo.target.previousElementSibling.innerHTML = inputBox.value;
        inputBox.value = "";
        addBtn.value = "Add";
    }
    // create

    else {

        const li = document.createElement("li");
        const p = document.createElement("p");
        const del = document.createElement("button");

        del.innerHTML = "Delete";
        del.id = "del";
        const edit = document.createElement("button");
        edit.innerHTML = "Edit";
        edit.id = "edit";
        p.innerHTML = inputBox.value;
        li.appendChild(p)
        li.appendChild(edit)
        li.appendChild(del)

        list.appendChild(li)
        inputBox.value = ""
    }
})

// update

list.addEventListener('click', (e) => {
    if (e.target.innerHTML === "Delete") {
        e.target.parentElement.remove();
    }
    else if (e.target.innerHTML === "Edit") {
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value = "Edit";
        editTodo = e;

    }
})