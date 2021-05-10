import { Component, OnInit } from '@angular/core';
import { CommonTaskServiceService } from './services/common-task-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'SampleProject';
  

  ngOnInit() {
      
  }
}
