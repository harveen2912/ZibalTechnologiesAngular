import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonTaskServiceService } from 'src/app/services/common-task-service.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  constructor(private commonService : CommonTaskServiceService, private router: Router) {}
  myForm: FormGroup;
  showMessage = false;
  showError = false;

  ngOnInit(): void {
    this.commonService.employeesAdded.subscribe(() => {
      this.showMessage = true;
      this.myForm.reset();
      setTimeout(() => {
        this.showMessage = false;
      }, 2000);
    });
    this.myForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      gender : new FormControl('', Validators.required),
      department : new FormControl('', Validators.required)
    });
  }

  addEmployee(myForm: FormGroup) {
    console.log('form', myForm.valid);
    if(!myForm.valid) {
      this.showError = true;
      setTimeout( () => this.showError = false , 2000);
      return;
    }
    this.commonService.addEmployee({firstName:myForm.controls.firstName.value, lastName:myForm.controls.lastName.value, dob:myForm.controls.dob.value, gender:myForm.controls.gender.value, department:myForm.controls.department.value});
  }

  viewEmployeeDetails() {
    this.router.navigate(['details'])
  }

}
