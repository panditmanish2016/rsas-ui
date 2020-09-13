import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { TestComponent } from './test/test.component';
import { UtilityModule } from '../utility/utility.module';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
// import {MatNativeDateModule} from '@angular/material/datepicker';

import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatNativeDateModule
} from '@angular/material';
import { RegistrationScreenComponent } from './registration-screen/registration-screen.component';



@NgModule({
  declarations: [HomeScreenComponent, TestComponent, LoginScreenComponent,
     RegistrationScreenComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UtilityModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeModule { }
