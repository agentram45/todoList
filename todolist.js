const btn = document.getElementById("btn");
const inputbox = document.getElementById("inputbox");
const todolist = document.getElementById("todolist");

btn.addEventListener("click",() => {
    const inputtext = inputbox.value.trim();
    if(inputtext.length <=0 ) {
        alert("you must write something");
    }
    else {
        const li = document.createElement("li");
        const p  = document.createElement("p");
        p.innerHTML = inputbox.value;
        li.appendChild(p);
        todolist.appendChild(li);
        inputbox.value = "";

        const editbtn = document.createElement("button");
        editbtn.innerText = "Edit";
        editbtn.classList.add("editbuttonstyle");
        li.appendChild(editbtn);

        const deletebtn = document.createElement("button");
        deletebtn.innerText = "Remove";
        deletebtn.classList.add("deletebuttonstyle");
        li.appendChild(deletebtn);

        deletebtn.addEventListener("click", (e) => {
            todolist.removeChild(e.target.parentElement);
        })

        editbtn.addEventListener("click", (e) => {
            const pElement = e.target.parentElement.querySelector("p");
            inputbox.value = pElement.innerText;
            todolist.removeChild(e.target.parentElement);
        })
    }
})
