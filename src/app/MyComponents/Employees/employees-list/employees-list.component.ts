import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../Models/employee.model';
import { EmployeeService } from '../../../Services/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.scss'
})
export class EmployeesListComponent implements OnInit {
     
     employees : Employee[] = [];

     constructor(private employeeService : EmployeeService){}
     ngOnInit(): void {
      this.employeeService.getAllEmployees().subscribe(
        {
          next:(employees)=>
          {
            this.employees = employees;
            
          },
          error :(response) =>
          {
            console.log(response);
          }
        }
      );
     }
}



