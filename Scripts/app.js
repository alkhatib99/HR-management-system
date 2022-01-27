'use strict';
/*

array of objects are created to store the objects of Employee are initalize dynamically,
it called 'empObjDyn'.

array of object employee are created to store the Employees are initialized static 'hard coded' and,
it's called 'empObjStat'
*/
const empObjDyn=[];
const empObjStat=[]

///// The Employee's function and function prototype //////

function Employee( employeeId,fullName, department, level)
{
    this.employeeId=employeeId;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageName;
    this.imageUrl="";
    this.salary=this.calculateSalary();
};

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
};


//calculateSalary();
Employee.prototype.render = function(){
    let main = document.getElementById('section-emp');
    let div  = document.createElement('div');
    div.setAttribute('id',"card-div");
    main.appendChild(div);
    let img = document.createElement('img');
    div.appendChild(img);
    img.setAttribute('alt','The Emp Photo');
    if(!this.imageUrl.match(""))
    img.setAttribute('src',this.imageUrl);

    else 
    img.setAttribute('src',this.imageName);
    
    let p=document.createElement('p');
    div.appendChild(p);
    p.innerHTML=`Name: ${this.fullName} - ID: ${this.employeeId} <br> 
    Department: ${this.department} - Level: ${this.level}<br> ${this.salary}`;
    
    empObjDyn.push(this);
    
    
    
      //  document.write(`<div><img src="`+this.imageUrl+`" width="128px" height="128px" />  <br><p>The Employee: `+ this.fullName +` <br>Who has level:`+ this.level +` <br>Worked in: `+this.department +`<br>Salary is: `+this.salary+`$</p></div>`);
     //console.log(this.fullName)
    
    };



//////// The Functions //////////
/**
 * 
 * 
 */
let arr = []


function generateId(){
var num="";
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

};




function generateRandom(min,max){

    max=Math.floor(max);
    min=Math.floor(min);
    return  Math.floor(min+Math.random()*(max-min));
};



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
};


let emp1 = new Employee("1000","Ghazi Samer","Adminstration","Senior");
empObjStat.push(emp1);
let emp2 = new Employee("1001","Lana Ali","Finance","Senior");
empObjStat.push(emp2);
let emp3 = new Employee("1002","Tamara Ayoub","Marketing","Senior");
empObjStat.push(emp3);
let emp4 = new Employee("1003","Safi Walid","Adminstration","Mid-Senior");
empObjStat.push(emp4);
let emp5 = new Employee("1004","Omar Zaid","Development","Senior");
empObjStat.push(emp5);
let emp6 = new Employee("1005","Rana Saleh","Development","Junior");
empObjStat.push(emp6);
let emp7 = new Employee("1006","Hadi Ahamad","Finance","Mid-Senior");
empObjStat.push(emp7);


for(var i = 0 ; i <empObjStat.length;i++)
    {let firstName =empObjStat[i].fullName.substr(0,empObjStat[i].fullName.indexOf(' '));
        //firstName=firstName.sub
    empObjStat[i].imageName=`CSS/images/${firstName}.jpg`;
    empObjStat[i].render();
   }

