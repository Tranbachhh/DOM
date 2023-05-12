function AddGroup() {
    const groupDiv = document.createElement('div');
    groupDiv.id = 'groupItem';
  
    const input = document.createElement('input');
    input.value = 'Group Item_20204634';
    input.id = 'groupName';
    input.style.border = 'none';
    input.readOnly = true;
    input.addEventListener('dblclick', () => {
      input.readOnly = false;
      input.value = input.value.slice(0,-9);
    })
    input.addEventListener('blur', function() {
      input.readOnly = true;
      input.value = input.value + '_20204634';
    });
  
    const deleteButton = document.createElement('button');
    const imgdelete = document.createElement('img');
    imgdelete.src = "./img/delete.jpg";
    imgdelete.width = 13;
    deleteButton.id = 'deleteButton';
    deleteButton.appendChild(imgdelete);
    deleteButton.addEventListener('click', () => {
        var result = window.confirm("Trần Xuân Bách_20204634 có muốn xoá group "+ input.value + " ?");
        if(result)DeleteGroup(groupDiv)
      });
  
    const addItemButton = document.createElement('button');
    addItemButton.textContent = 'Add Text';
    addItemButton.addEventListener('click', () => {
      AddItem(groupDiv,'text')
    });

    const addItemButtonC = document.createElement('button');
    addItemButtonC.textContent = 'Add Check';
    addItemButtonC.addEventListener('click', () => {
      AddItem(groupDiv,'checkbox')
    });
  
    const addGroupButton = document.createElement('button');
    addGroupButton.textContent = 'Add Group Item';
    addGroupButton.addEventListener('click', () => {
      AddGroup();
    });
  
    groupDiv.appendChild(input);
    groupDiv.appendChild(deleteButton);
    groupDiv.appendChild(addItemButton);
    groupDiv.appendChild(addItemButtonC);
    groupDiv.appendChild(addGroupButton);

    const parentElement = document.querySelector('#main');
    parentElement.appendChild(groupDiv);
  }

  function AddItem(group,type) {
    const itemDiv = document.createElement('div');
    itemDiv.id = 'item'
  
    const input1 = document.createElement('input');
    input1.type = 'text';
    input1.placeholder = 'Item Info Name';
    input1.style.border = 'none'
    input1.readOnly = true;
    input1.addEventListener('dblclick', () => {
      input1.readOnly = false;
    })
    input1.addEventListener('blur', function() {
      input1.readOnly = true;
    });
  
    const input2 = document.createElement('input');
    input2.type = type;

    const deleteButton = document.createElement('button');
    const imgdelete = document.createElement('img');
    imgdelete.src = "./img/delete.jpg";
    imgdelete.width = 13;
    deleteButton.appendChild(imgdelete);
  
    itemDiv.appendChild(input1);
    itemDiv.appendChild(input2);
    itemDiv.appendChild(deleteButton);
    group.appendChild(itemDiv);

    deleteButton.addEventListener('click', () => {
        var result = window.confirm("Trần Xuân Bách_20204634 có muốn xoá item "+ input1.value + " ?");
        if(result)group.removeChild(itemDiv)
      });

  }


function DeleteGroup(group){
    const parentElement = document.querySelector('#main');
    parentElement.removeChild(group);
}
