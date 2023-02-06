document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += `
          <div class="task">
               <span id="taskname">
                  ${document.querySelector("#newtask input").value}
               </span>
               <button class="complete">
                  <i class="far fa-check-circle"></i>
               </button>
               <button class="delete">
                  <i class="far fa-trash-alt"></i>
               </button>
          </div>`;

    let current_task = document.querySelectorAll(".delete");
    for (let i = 0; i < current_task.length; i++) {
      current_task[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    let completed_task = document.querySelectorAll(".complete");
    for (let i = 0; i < completed_task.length; i++) {
      completed_task[i].onclick = function () {
        this.parentNode.style.textDecoration = "line-through";
        this.parentNode.style.color = "gray";
        this.style.display = "none";
        this.nextSibling.style.display = "none";
      };
    }
  }
};
