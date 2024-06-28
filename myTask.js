document.addEventListener("DOMContentLoaded", (e) => {
  const pageTitle = document.title;
 

  if (pageTitle === "My Task") {
    let tbody = document.querySelector(".tasklist tbody");
    let storedData = localStorage.getItem("formData");
    let formData = JSON.parse(storedData);
    formData.forEach((element,idx) => {
        // console.log(element.title,element.description,element.priority,element.dueDate)
      let tabrow = document.createElement("tr");
      tabrow.innerHTML = `
        <tr>
            <td >${element.title}</td>
            <td>${element.description}</td>
            <td>${element.priority}</td>
            <td>${element.dueDate}</td>
            <td >
                <a href="editTask.html" data-index='${idx}' class="editBtn">Edit</a>
                &nbsp;| &nbsp;                    
                <a href="" id="delete" data-index='${idx}'>Delete</a>
            </td>
            <td>
                <select name="status" id="" data-index='${idx}' >    
                    <option value="running">Running</option>
                    <option value="completed">Completed</option>
                </select>
            </td>
        </tr>   
        `;
      if (element.title) {
        tbody.appendChild(tabrow);
      }
    });
    // let tabData = document.querySelectorAll('.tasklist tbody tr');
    // console.log(tabData)
    // tabData.addEventListener('click',(e)=>{
    //     if(e.target.classList.contains('editBtn')){
    //         prompt("hiiiii")
    //         console.log('asas')
    //     }
    //     console.log(e.target);
    // })
  }
  // ---------------------------------------------------------------------------------------------------
  else if (pageTitle === "New Task") {

    let form = document.getElementById("taskForm");
    let cancelTask = document.getElementById('cancelTask');
   
    // on clicking cancel button
    cancelTask.addEventListener('click',()=>{
      window.location.href = "myTask.html";
    })

    // on clicking submit button
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let title = document.getElementById("title").value;
      let description = document.getElementById("description").value;
      let priority = document.getElementById("priority").value;
      let status = document.getElementById("status").value;
      let dueDate = document.getElementById("dueDate").value;

      //   const formData = { title, description, priority, dueDate };

      // Retrieve existing tasks from local storage
      let existingTask = JSON.parse(localStorage.getItem("formData")) || [];

      // Add new form data to existing tasks
      existingTask.push({ title, description, priority, dueDate });

      // Save updated tasks back to local storage
      localStorage.setItem("formData", JSON.stringify(existingTask));

      cancelTask();
    });
  }
  // ---------------------------------------------------------------------------------------------------
  else if(pageTitle === "Edit Task"){
    document.addEventListener('hover',(e)=>{

    })
  }
});
