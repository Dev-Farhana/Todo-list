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
          removeBtn.style.backgroundColor='transparent';
      removeBtn.style.opacity = '0.8';
      removeBtn.style.height = '40px';
      removeBtn.style.width = '60px';
      removeBtn.style.marginLeft = '10px';
      removeBtn.style.borderStyle = 'none';
      removeBtn.style.color = '#000';
      removeBtn.style.fontWeight= "700";
      removeBtn.style.fontSize= '1vw';

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
  
