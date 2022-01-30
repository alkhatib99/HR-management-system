/**
 * Author:Abedalqader Alkhatib.
 * Declare table Of deprartment in accounting.html
 *  
 */


  function render() {
//Call the section 
    let main = document.getElementById('table-section');
// Create the table 

let table  = document.createElement('table');
main.appendChild(table);
//Create table header include first row
// "Department || # of Employees || Total Salary || Average

    let thead  = document.createElement('thead');
table.appendChild(thead);
table.setAttribute('border',"1");
    let trOfHead=document.createElement('tr');
    thead.appendChild(trOfHead);
    let th1=document.createElement('th');
    th1.textContent="Department";
    trOfHead.appendChild(th1);
    let th2=document.createElement('th');
    th2.textContent="# of Employees";
    trOfHead.appendChild(th2);
    let th3=document.createElement('th');
    th3.textContent="Total Salary";
    trOfHead.appendChild(th3);
    let th4=document.createElement('th');
    th4.textContent="Average";
    trOfHead.appendChild(th4);
    let tbody  = document.createElement('tbody');
table.appendChild(tbody);
//let count=0,sum=0;
let content=`<tr>
<td>Administration</td>
<td></td>
<td></td>
<td></td>
</tr>

<tr>
<td>Marketing</td>
<td></td>
<td></td>
<td></td>
</tr>

<tr>
<td>Development</td>
<td></td>
<td></td>
<td></td>
</tr>

<tr>
<td>Finance</td>
<td></td>
<td></td>
<td></td>
</tr>`;
tbody.innerHTML=content;
  

//create the footer element 
let tfooter=document.createElement('tfoot');
table.appendChild(tfooter);
//Declare the td tags inside textContent of trOfFoot include  
//Total|Total number of employees|Total salary for all departments|Average salary for all departments|
let trOfFoot =document.createElement('tr');
trOfFoot.innerHTML=`<td> Total:</td>
<td>Total number of employees: </td>
<td>Total salary for all departments:  </td>
<td>Average salary for all departments:</td>`
tfooter.appendChild(trOfFoot);
table.appendChild(tfooter);


};

render();


/*

function Department(departmentName, noOfEmp, avgSal,totalSal){

    this.departmentName=departmentName;
    this.noOfEmp=noOfEmp;
    this.avgSal=avgSal;
    this.totalSal=totalSal;
    Department.allDepartment.push(this);
}

//allEmployee=[];
Department.allDepartment=[];
let department=[];

function gettingItem(){
    let empObj = localStorage.getItem('employees');
     let parsEmpObj = JSON.parse(empObj);
    let depObj = localStorage.getItem('departments');
let parsDepObj = JSON.parse(depObj);
  //   console.log(parsObj);
    if (parsEmpObj !== null){
    allEmployee = parsEmpObj
    }
    if (parsDepObj !== null){
        Department.allDepartment = parsDepObj
      }
    
  }
  
function settingItem(){
 
    let data = JSON.stringify(Department.allDepartment);// convert the data to JSON format 
    localStorage.setItem('departments',data)
  
  }
  function creteDepArray()
  {
      
    for(var i = 0 ; i < allEmployee.length;i++)
    {
        let data = allEmployee[i];

        if(!department.includes(data.department))
        department[i]=data.department;


    }

    department.forEach(element => {
        
        let count=0;
        let sum=0;

        for(var i = 0 ; i < allEmployee.length;i++)
        {
let data=allEmployee[i];
            if(data.department=element)
            {
                count++;
                sum+=data.salary;

            }
        
        }
let dept =Department(element, count,(sum/count),sum);
    });

  }


    function render() {
//Call the section 
    let main = document.getElementById('table-section');
// Create the table 

let table  = document.createElement('table');
main.appendChild(table);
table.setAttribute('style','border:1px;');
//Create table header include first row
// "Department || # of Employees || Total Salary || Average

    let thead  = document.createElement('thead');
table.appendChild(thead);

    let trOfHead=document.createElement('tr');
    thead.appendChild(trOfHead);
    let th1=document.createElement('th');
    th1.textContent="Department";
    trOfHead.appendChild(th1);
    let th2=document.createElement('th');
    th2.textContent="# of Employees";
    trOfHead.appendChild(th2);
    let th3=document.createElement('th');
    th3.textContent="Total Salary";
    trOfHead.appendChild(th3);
    let th4=document.createElement('th');
    th4.textContent="Average";
    trOfHead.appendChild(th4);
    let tbody  = document.createElement('tbody');
table.appendChild(tbody);
//let count=0,sum=0;
let content=`<tr>
<td>Administration</td>
<td></td>
<td></td>
<td></td>
</tr>

<tr>
<td>Marketing</td>
<td></td>
<td></td>
<td></td>
</tr>

<tr>
<td>Development</td>
<td></td>
<td></td>
<td></td>
</tr>

<tr>
<td>Finance</td>
<td></td>
<td></td>
<td></td>
</tr>`;
tbody.innerHTML=content;
    // fill the table from an Department.allDepartment array 


    for(var i =0 ; i< Department.allDepartment.length;i++)
    {
   let data=Department.allDepartment[i];
   //Create row element 
  let tr =document.createElement('tr');
  //Create the td tags
  let td1=document.createElement('td');
  td1.textContent=data.departmentName;
  tr.appendChild(td1);
  let td2=document.createElement('td');
  td2.textContent=data.noOfEmp;
  tr.appendChild(td2);
  count+=noOfEmp;
  let td3=document.createElement('td');
  td3.textContent=data.totalSal;
  tr.appendChild(td3);
  sum+=totalSal;
   let td4=document.createElement('td');
  td4.textContent=data.avgSal;
  tr.appendChild(td4);
tbody.appendChild(tr);
}
//create the footer element 
//let tfooter=document.createElement('tfoot');
table.appendChild(tfooter);
//Declare the td tags inside textContent of trOfFoot include  
//Total|Total number of employees|Total salary for all departments|Average salary for all departments|
let trOfFoot =document.createElement('tr');
trOfFoot=`<td> Total: ${Department.allDepartment.length}</td>
<td>Total number of employees: ${this.count}</td>
<td>Total salary for all departments: ${this.sum}</td>
<td>Average salary for all departments: ${(this.sum/this.count)}</td>`

settingItem();

};

*/