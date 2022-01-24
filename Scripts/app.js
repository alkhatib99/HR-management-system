'use strict';


function Employee(employeeId, fullName, department, level,)
{
    this.employeeId=employeeId;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageUrl="CSS/images/person.png";
    this.salary=this.calculateSalary();
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
 document.write(`<div><img src="`+this.imageUrl+`" width="128px" height="128px" />  <br><p>The Employee: `+ this.fullName +` <br>Who has level:`+ this.level +` <br>Worked in: `+this.department +`<br>Salary is: `+this.salary+`$</p></div>`);
 //console.log(this.fullName)
}

let emp1 = new Employee(1000,"Ggazzi Samer", "Adminstration","Senior");
emp1.render();
let emp2 = new Employee(1001,"Lana Ali", "Finance","Senior");
emp2.render();
let emp3 = new Employee(1002,"Tamara Ayoub", "Marketing","Senior");
emp3.render();
let emp4 = new Employee(1003,"Safi Waleed", "Adminstration","Mid-Senior");
emp4.render();
let emp5 = new Employee(1004,"Omar Zaid", "Development","Senior");
emp5.render()
let emp6 = new Employee(1005,"Rana Saleh", "Development","Mid-Senior");
emp6.render();
let emp7 = new Employee(1006,"Hadi Ahmed", "Finance","Junior");
emp7.render();

