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

function Employee( employeeId,fullName, department, level,imageUrl)
{
    this.employeeId=employeeId;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageName;
    this.imageUrl=imageUrl;
    this.salary=this.calculateSalary();
    Employee.allEmployee.push(this);

};
Employee.allEmployee=[];

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
 function render() {

    let main = document.getElementById('section-emp');
    
    for(var i =0 ; i< Employee.allEmployee.length;i++)
    {
   let data=Employee.allEmployee[i];
   let div  = document.createElement('div');
    div.setAttribute('class',"card-div");
    let img = document.createElement('img');
    img.setAttribute('alt','The Emp Photo');

    img.setAttribute('src',`${data.imageUrl}`);
    
    div.appendChild(img);
   
    let p=document.createElement('p');
    div.appendChild(p);
    p.innerHTML=`ID:  ${data.employeeId} <br>Name: ${data.fullName}  <br> 
    Department:  ${data.department} <br> Level: ${data.level}<br>
    Salary:  ${data.salary}`;
main.appendChild(div);
    }
};


     
 //  document.write(`<div><img src="`+this.imageUrl+`" width="128px" height="128px" />  <br><p>The Employee: `+ this.fullName +` <br>Who has level:`+ this.level +` <br>Worked in: `+this.department +`<br>Salary is: `+this.salary+`$</p></div>`);
     //console.log(this.fullName)
    


//////// The Functions //////////
/**
 * 
 * 
 */
let arr = []


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
   
    let newEmp = new Employee(generateId(),name,dept,level,imgurl);
    
   settingItem();
};


const emp1 = new Employee("1000","Ghazi Samer","Adminstration","Senior","./CSS/images/Ghazi.jpg");
const emp2 = new Employee("1001","Lana Ali","Finance","Senior","./CSS/images/Lana.jpg");
const emp3 = new Employee("1002","Tamara Ayoub","Marketing","Senior","./CSS/images/Tamara.jpg");
const emp4 = new Employee("1003","Safi Walid","Adminstration","Mid-Senior","./CSS/images/Safi.jpg");
const emp5 = new Employee("1004","Omar Zaid","Development","Senior","./CSS/images/Omar.jpg");
const emp6 = new Employee("1005","Rana Saleh","Development","Junior","./CSS/images/Rana.jpg");
const emp7 = new Employee("1006","Hadi Ahamad","Finance","Mid-Senior","./CSS/images/Hadi.jpg");
settingItem();

console.log( Employee.allEmployee);


function settingItem(){
    let data = JSON.stringify(Employee.allEmployee);// convert the data to JSON format 
    localStorage.setItem('employees',data)
  
  
  }
  
  
  //2. get date : take the data from local storage 
  
  function gettingItem(){
    let stringObj = localStorage.getItem('employees');
     console.log(stringObj);
    let parsObj = JSON.parse(stringObj);
    console.log(parsObj);
    if (parsObj !== null){
      Employee.allEmployee = parsObj
    }
  
  
  }

 

  gettingItem();
  render();

 console.log(Employee.allEmployee);