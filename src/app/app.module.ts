import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonTaskServiceService } from './services/common-task-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './Components/details/details.component';
import { UpdateComponent } from './Components/update/update.component';
import { CreateEmployeeComponent } from './Components/create-employee/create-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    UpdateComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CommonTaskServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
