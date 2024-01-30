import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Employee } from '../Models/employee.model';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseApiUrl : string = environment.baseApiUrl;
  constructor(private http : HttpClient) { }

  getAllEmployees() : Observable<Employee[]>{
    
        return this.http.get<Employee[]>(this.baseApiUrl + "/api/EmployeeDetails");
  }

  addEmployee(addEmployeeRequest : Employee) : Observable<Employee>{
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Employee>(this.baseApiUrl + "/api/EmployeeDetails",addEmployeeRequest)
  }

  getEmployee(id : string) : Observable<Employee>{

      return this.http.get<Employee>(this.baseApiUrl + "/api/EmployeeDetails/"+id);
  }

  updateEmployee(id : string , updateEmployeeRequest : Employee) : Observable<Employee>
  {
     return this.http.put<Employee>(this.baseApiUrl + "/api/EmployeeDetails/"+id,updateEmployeeRequest);
  }

  deleteEmployee(id : string): Observable<Employee>{
     
      return this.http.delete<Employee>(this.baseApiUrl + "/api/EmployeeDetails/"+id);
  }
}
