const todoInput =document.getElementById('todoInput');
const add = document.getElementById('add');
const list = document.getElementById('list');




function createElement() {
    const liTag =document.createElement('li');
    list.appendChild(liTag);
    liTag.className='list-group-item d-flex aling-items-center';
    
    const span = document.createElement('span');
    liTag.appendChild(span);
    span.innerHTML=todoInput .value;
    span.className="flex-grow-1"




    const btnDel = document.createElement('button');
    liTag.appendChild(btnDel);
    btnDel.innerHTML='<i class="bi bi-trash"></i>';
    btnDel.className='btn btn-outline-danger me-2';

       btnDel.onclick=()=>{
        console.log('btnDel');
        span.remove();

       }

    const btnImp = document.createElement('button');
    liTag.appendChild(btnImp);
    btnImp.innerHTML='<i class="bi bi-exclamation-octagon"></i>';
    btnImp.className='btn btn-outline-warning';
      
       btnImp.onclick=()=>{
         console.log('btnImp');
        span.innerHTML=span.innerHTML='<span style = "font-size:50%; color:red;"><i class="bi bi-exclamation-circle me-1"></i>Извините вы не правильно написали текст</span>'
       }
    
}



add.onclick=()=>{
 createElement();
 todoInput.value='';
 
    
 
}