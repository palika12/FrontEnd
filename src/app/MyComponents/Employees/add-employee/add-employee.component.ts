import { Component } from '@angular/core';
import { Employee } from '../../../Models/employee.model';
import { EmployeeService } from '../../../Services/employee.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {

  constructor(private addEmployeeService : EmployeeService , private router : Router){}

  AddEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    salary: 0,
    phonenumber: 0,
    department: ''
  }

  addEmployee() {
    debugger;
    this.addEmployeeService.addEmployee(this.AddEmployeeRequest).subscribe({
    next :(employee) => {
    this.router.navigate(['employees']);
  },
  error :(response) =>
  {
    console.log(response);
  }
});}

}



   
