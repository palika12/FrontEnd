import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EmployeeService } from '../../../Services/employee.service';
import { Employee } from '../../../Models/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.scss'
})
export class EditEmployeeComponent {

  employeeDetails: Employee = {
    id: '',
    name: '',
    email: '',
    salary: 0,
    phonenumber: 0,
    department: ''
  }

  constructor(private route : ActivatedRoute , private employeeService : EmployeeService, private router : Router){

  }
  ngOnInit ():void {
    
       this.route.paramMap.subscribe({
          next : (params) =>{
            const id = params.get('id');

            if(id)
            {
              this.employeeService.getEmployee(id).subscribe({
                next : (response) =>
                {
                 this.employeeDetails = response;
                },
                error :(response) =>
                {
                  console.log(response);
                }
              });
            }
          }
       })
      }

      updateEmployee() {
         
             this.employeeService.updateEmployee(this.employeeDetails.id,this.employeeDetails).subscribe({
              next : (response) =>
              {
                this.router.navigate(['employees']);
              },
              error :(response) =>
              {
                console.log(response);
              }
             })
        }

        deleteEmployee(id : string){
          this.employeeService.deleteEmployee(id).subscribe({
            next : (response) =>
            {
              this.router.navigate(['employees']);
            },
            error :(response) =>
            {
              console.log(response);
            }
          })
        }
}
