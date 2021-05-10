import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonTaskServiceService {

  constructor() { }
  employeesAdded = new Subject<any>();
  employees = [];

  addEmployee(details) {
    details.id = new Date().getTime();
    this.employees.push(details);
    this.employeesAdded.next(true);
  }

  getEmployees() {
    return this.employees;
  }

  deleteEmployee(empId) {
    let elementIndexToBeDeleted;
    for(let i = 0 ; i < this.employees.length ; i++) {
      if(this.employees[i].id == empId) {
        elementIndexToBeDeleted = i;
        break;
      }
    }
    this.employees.splice(elementIndexToBeDeleted, 1);
    this.employeesAdded.next(true);
  }

  getEmployeeWithId(empId) {
    let item = this.employees.find( item => item.id == empId) ? this.employees.find( item => item.id == empId) : null;
    return item;
  }

  updateEmployee(empId, data) {
    for(let i = 0 ; i < this.employees.length ; i++) {
      if(this.employees[i].id == empId) {
        this.employees[i] = data;
        break;
      }
    }
    this.employeesAdded.next(true);
  }
}
