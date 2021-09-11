import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmpOperationService {

  constructor() { }
  GetAll() {
    let EmployeeList = JSON.parse(localStorage.getItem('Employees'));
    return EmployeeList;
  }

  AddNew(newEmp) {
    let EmployeeList = JSON.parse(localStorage.getItem('Employees')) || [];
    EmployeeList.push(newEmp);
    localStorage.setItem('Employees', JSON.stringify(EmployeeList));
  }
}
