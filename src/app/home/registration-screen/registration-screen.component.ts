import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { NAVIGATION_URL } from 'src/app/utility/navigation.shared';
import { I18NLabel, Gender } from 'src/app/utility/utility.shared';
import { CustomRouterService } from 'src/app/utility/custom-router.service';
import { ConfirmedValidator, PasswordStrengthValidator } from './PasswordValidation';




@Component({
  selector: 'app-registration-screen',
  templateUrl: './registration-screen.component.html',
  styleUrls: ['./registration-screen.component.scss']
})
export class RegistrationScreenComponent implements OnInit {

  minDate: Date;
  maxDate: Date;
  navItemList: I18NLabel[];
  genderList: Gender[];
  studentRegistrationForm: FormGroup;
  studentRegistrationFormArray = new FormArray([]);
  confirmPasswordControl: any;

  constructor(private location: Location, private customRouterService: CustomRouterService, private fb: FormBuilder) {
    // Set the minimum to January 1st 30 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 30, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
    const MOBILE_PATTERN = /[0-9\+\-\ ]/;
    this.studentRegistrationForm = fb.group({
      addmissionId: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      mobilenumber: new FormControl('', [Validators.required, Validators.pattern(MOBILE_PATTERN)]),
      emailId: new FormControl('', [Validators.email]),
      dateofbirth: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      selectedGenderValue: new FormControl('', [Validators.required]),
      confirmedpassword: new FormControl('', [Validators.required]),
    }
    // {
    //   validator: [ConfirmedValidator('password', 'confirmedpassword'), PasswordStrengthValidator('password')],
    // }
    );
  }
  ngOnInit() {
    // const MOBILE_PATTERN = /[0-9\+\-\ ]/;
    // this.studentRegistrationForm = new FormGroup({
    //   username: new FormControl('', [Validators.required]),
    //   mobilenumber: new FormControl('', [Validators.required, Validators.pattern(MOBILE_PATTERN)]),
    //   emailId: new FormControl('', [Validators.email]),
    //   dateofbirth: new FormControl(''),
    //   password: new FormControl('', [Validators.required]),
    //   confirmedpassword: new FormControl('', [Validators.required]),
    // });
    this.getNavItemList();
    this.getGenderList();
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.studentRegistrationForm.controls[controlName].hasError(errorName);
  }

  studentLoginSubmit() {
    console.log(this.studentRegistrationForm);
    this.studentRegistrationFormArray.push(this.studentRegistrationForm);
    if ((this.studentRegistrationFormArray).controls.length > 0) {
      console.log('form submitted..', this.studentRegistrationForm.get('username').value);
    }
  }

  onStudentLoginFormCancel() {
    this.location.back();
  }

  getNavItemList() {
    this.navItemList = new Array();
    this.navItemList.push({
      labelId: 'studentRegister', labelValue: 'REGISTER', labelType: 'title',
      i18NSubLabelList: new Array()
    });
    this.navItemList.push({
      labelId: 'studentLogin', labelValue: 'LOGIN', labelType: 'title',
      i18NSubLabelList: new Array()
    });
  }

  getGenderList() {
    this.genderList = new Array();
    this.genderList.push({
      genderId: 'malegenderId', genderValue: 'Male'
    });
    this.genderList.push({
      genderId: 'femaleGenderId', genderValue: 'FeMale'
    });
    this.genderList.push({
      genderId: 'otherGenderId', genderValue: 'Others'
    });
  }

  navItemWasClicked(navItem: any) {
    console.log('clicked nav item is...', navItem);
    if (navItem.labelId.includes('Login')) {
      this.customRouterService.navigateTo(NAVIGATION_URL.loginScreen);
    }
    if (navItem.labelId.includes('Register')) {
      this.customRouterService.navigateTo(NAVIGATION_URL.registrationScreen);
    }
  }

  //   checkPasswords() {
  //     const password = this.studentRegistrationForm.get('username').value;
  //     const confirmedpassword = this.studentRegistrationForm.get('confirmedpassword').value;
  //     return password === confirmedpassword ? false : { notSame: true };
  //   }

  //   sameValueAs(group: FormGroup, controlName: string): ValidatorFn {
  //     return (control: FormControl) => {
  //       const password = group.get('username').value;
  //       const confirmedpassword = group.get('confirmedpassword').value;
  //       return password === confirmedpassword ? null : {valueDifferentFrom: controlName};

  //     };
  // }
}


