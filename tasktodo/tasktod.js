(function() {
var input = document.getElementById('input');
var btn = document.getElementById('btn');
var lists = {
  todo: document.getElementById ('todo'),
   done: document.getElementById ('done')
 }

var makeTaskHtml = function(str, onCheck){
   var el = document.createElement('li');
var checkbox = document.createElement('input');
var label = document.createElement('span');

label.textContent = str;
checkbox.type = 'checkbox';
checkbox.addEventListener('click',onCheck);
el.appendChild(checkbox);
el.appendChild(label);

   return el;
 };


 var addTask = function(task){
 lists.todo.appendChild(task);
 };
 var onCheck = function(event){
  var task = event.target.parentElement;
  var list = task.parentElement.id;

  lists[list ==='done'? 'todo':'done'].appendChild(task);
  this.checked = false;
};
var userinput = function (){
  var str = input.value.trim();
  if (str.length > 0) {
    addTask(makeTaskHtml(str, onCheck));
    input.value = '';
    input.focus();
  }
  //store
    var listsString = JSON.stringify(lists);
    localStorage.setItem("lists",listsString);
};
btn.addEventListener('click', userinput);
input.addEventListener('keyup', function(event){
  var code = event.keyCode;
  if (code == 13) {
    userinput();
  }
});
input.focus();
}());

//for date
function SetDate()
{
var date = new Date();

var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

var today = month +"-"+ day + "-" + year;


document.getElementById('myDate').value ="Last Modified: " + today;
}