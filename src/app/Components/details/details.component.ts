import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonTaskServiceService } from 'src/app/services/common-task-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  employeesData = [];
  employeeTableHeading = ['First Name', 'Last Name', 'DOB', 'Gender', 'Department'];

  constructor(private commonService: CommonTaskServiceService, private router : Router) { }

  ngOnInit(): void {
      this.employeesData = this.commonService.getEmployees();
      this.commonService.employeesAdded.subscribe( () => {
        this.employeesData = this.commonService.getEmployees();
      });
  }

  deleteEmployee(empId) {
    this.commonService.deleteEmployee(empId);
  }

  goToCreateEmployee() {
    this.router.navigate(['']);
  }

  updateEmployeeDetails(empId) {
    this.router.navigate(['update'], { queryParams: { empID: empId } });
    
  }

}
