var td_arr = [];
var id_elem=0;
function Element(){
  this.task= '';
  this.id='';
}
Element.prototype.Display=function(){
  var elem_div=document.createElement('div');
  var elem_btn=document.createElement('button');
  var elem_li=document.createElement('li');
  var elem_br=document.createElement('br');

  // elem_btn.className='td_done_btn btn btn-info';
  elem_btn.className='td_done_btn btn_cl';
  elem_btn.innerHTML='Mark Done';
  elem_li.id=this.id;
  elem_li.className='td_list_item';
  elem_li.innerHTML=this.task;

  document.getElementById('list').appendChild(elem_div);
  elem_div.appendChild(elem_li);
  elem_div.appendChild(elem_btn);
  document.getElementById('list').appendChild(elem_br);
  elem_btn.addEventListener("click" ,remove);
}

function remove(){
  var elem=this.previousSibling.id;
  this.parentNode.previousSibling.remove();
  this.parentNode.remove();
  for( var a in td_arr){
      if(td_arr[a].id==elem){
        td_arr[a].Completed();
      }
   }
}

Element.prototype.Completed=function(){
  var elem_div=document.createElement('div');
  var elem_li=document.createElement('li');
  elem_li.innerHTML=this.task;
  elem_li.className='td_comp_item';
  document.getElementById('comp_list').appendChild(elem_div);
  elem_div.appendChild(elem_li);
}


function add_element(){
  var task=document.getElementById('task_input').value;
  if(task!=''){
    id_elem++;
    var a= new Element();
    a.task=task;
    a.id='id_'+id_elem;
    td_arr.push(a);
    a.Display();
    document.getElementById('task_input').value='';
  }

}
