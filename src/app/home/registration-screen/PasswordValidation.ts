import { FormGroup } from '@angular/forms';

export function ConfirmedValidator(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {

    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator: true });
    } else {
      matchingControl.setErrors({ confirmedValidator: false });
    }
  };
}

export function PasswordStrengthValidator(controlName: string) {
  // const upperCaseCharacters = /[A-Z]+/g;
  // const lowerCaseCharacters = /[a-z]+/g;
  // const numberCharacters = /[0-9]+/g;
  
  const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  return (formGroup: FormGroup) => {
    
    const control = formGroup.controls[controlName];
    if (control.errors && !control.errors.passwordSpecailCharacterCaseValidator) {
      return;
    }
    if (specialCharacters.test(control.value) === false
    ) {
      control.setErrors({ passwordSpecailCharacterCaseValidator: true });
    } else {
      control.setErrors({ passwordSpecailCharacterCaseValidator: null });
    }
  };
}
