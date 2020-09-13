import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { NAVIGATION_URL } from 'src/app/utility/navigation.shared';
import { I18NLabel } from 'src/app/utility/utility.shared';
import { CustomRouterService } from 'src/app/utility/custom-router.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {
  navItemList: I18NLabel[];
  studentLoginForm: FormGroup;
  studentLoginFormArray = new FormArray([]);
  constructor(private location: Location, private customRouterService: CustomRouterService) {
  }
  ngOnInit() {
    this.studentLoginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
    this.getNavItemList();
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.studentLoginForm.controls[controlName].hasError(errorName);
  }

  studentLoginSubmit() {
    this.studentLoginFormArray.push(this.studentLoginForm);
    if ((this.studentLoginFormArray).controls.length > 0) {
      console.log('form submitted..', this.studentLoginForm.get('username').value);
    }
  }

  onStudentLoginFormCancel() {
    this.location.back();
  }

  getNavItemList() {
    this.navItemList = new Array();
    this.navItemList.push({
      labelId: 'studentLogin', labelValue: 'LOGIN', labelType: 'title',
      i18NSubLabelList: new Array()
    });
    this.navItemList.push({
      labelId: 'studentRegister', labelValue: 'REGISTER', labelType: 'title',
      i18NSubLabelList: new Array()
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



}
