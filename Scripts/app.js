'use strict';


function Employee( fullName, department, level,imageName)
{
    this.employeeId=generateId();
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageUrl=`CSS/images/${imageName}.jpg`;
    this.salary=this.calculateSalary();
}
const arr=[];

function generateId(){
let num="";
    for(var i = 0 ; i < 4 ; i++)
{
        let n = Math.floor(Math.random()*10);
num+=n.toString();
}

if(!arr.includes(num))
{ 
arr.push(num);
return num;
}
else{
    return generateId();
}
}
function generateRandom(min,max){

    max=Math.floor(max);
    min=Math.floor(min);
   return  Math.floor(min+Math.random()*(max-min));
}

Employee.prototype.calculateSalary= function(){
    let sal;
    if (this.level == 'Senior')
     sal = generateRandom(1500,2000);
       else if (this.level == 'Mid-Senior')
       sal = generateRandom(1000,1500);
    
    else if (this.level == 'Junior')
    sal = generateRandom(500,1000);
    
let netSal=sal-(sal*0.075);

return netSal;
}

//calculateSalary();
Employee.prototype.render = function(){
    let main = document.getElementById('section-emp');
    let div  = document.createElement('div');
div.setAttribute('id',"card-div");
    main.appendChild(div);
let img = document.createElement('img');
div.appendChild(img);
img.setAttribute('alt','The Emp Photo');
img.setAttribute('src',this.imageUrl);
let p=document.createElement('p');
div.appendChild(p);
p.innerHTML=`Name: ${this.fullName} - ID: ${this.employeeId} <br> 
Department: ${this.department} - Level: ${this.level}<br> ${this.salary}`;




  //  document.write(`<div><img src="`+this.imageUrl+`" width="128px" height="128px" />  <br><p>The Employee: `+ this.fullName +` <br>Who has level:`+ this.level +` <br>Worked in: `+this.department +`<br>Salary is: `+this.salary+`$</p></div>`);
 //console.log(this.fullName)
}

let empForm = document.getElementById('empForm');
empForm.addEventListener("submit", addNewEmployee);

function addNewEmployee(event){
  event.preventDefault();
  let name = event.target.name.value;
  let dept=event.target.department.value;
  let level=event.target.Level.value;
  let imgurl = event.target.Image.value;
  let newEmp = new Employee(name,dept,level,imgurl);
  newEmp.render();
  console.log(newEmp);
}


