function addTask(){
    //getting the value from the input
    let inputTask= document.getElementById("inputTask");
    console.log(inputTask.value);
  //display the value on the list
    let ul = document.getElementById("taskList");
    ul.innerHTML+=` <li class=""> ${inputTask.value} </li>`;//template string
    inputTask.value="";//clearing the input
}


