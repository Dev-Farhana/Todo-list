function addTask( ){
    const input = document.getElementById('taskInput');
    const text = input.value.trim();

    if(text === ''){
      return
    }

   const taskList = document.getElementById('taskList');
   const newTask = document.createElement('li');
   newTask.textContent = text;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'x';
    removeBtn.onclick = function () {
      taskList.removeChild(newTask);    
    };
    removeBtn.style.backgroundColor='red';
    removeBtn.style.opacity = '0.6';
    removeBtn.style.height = '40px';
    removeBtn.style.width = '60px';
    removeBtn.style.marginLeft = '10px';
    removeBtn.style.borderStyle = 'none';
    removeBtn.style.color = '#fff';



      newTask.appendChild(removeBtn);
      taskList.appendChild(newTask);
      input.value = '';
} 

  // Event listener to add a task when Enter key is pressed

document.getElementById('taskInput').addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
      addTask();
    }
})  
  