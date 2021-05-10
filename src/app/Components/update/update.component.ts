import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonTaskServiceService } from 'src/app/services/common-task-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  empId;
  myForm: FormGroup;
  employeeInformation = null;
  showMessage = false;
  employeesData = [];

  constructor(private commonService: CommonTaskServiceService, private ActivatedRoute : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.employeesData = this.commonService.getEmployees();
    this.empId = this.ActivatedRoute.snapshot.queryParamMap.get('empID');
    this.employeeInformation = this.commonService.getEmployeeWithId(this.empId);
    this.myForm = new FormGroup({
      firstName: new FormControl(this.employeeInformation.firstName),
      lastName: new FormControl(this.employeeInformation.lastName),
      dob: new FormControl(this.employeeInformation.dob),
      gender : new FormControl(this.employeeInformation.gender),
      department : new FormControl(this.employeeInformation.department)
    });

    this.commonService.employeesAdded.subscribe( () => {
      this.showMessage = true;
      setTimeout( () => {
        this.showMessage = false;
      }, 2000);
    })
  }

  updateEmployee(myForm) {
    this.commonService.updateEmployee(this.empId, {firstName:myForm.controls.firstName.value, lastName:myForm.controls.lastName.value, dob:myForm.controls.dob.value, gender:myForm.controls.gender.value, department:myForm.controls.department.value});
  }
  viewEmployeeDetails() {
    this.router.navigate(['details'])
  }
  goToCreateEmployee() {
    this.router.navigate(['']);
  }
}
