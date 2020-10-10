import { Component, Directive, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  user: User

  constructor() {
    let user = new User();
    this.user = user;
  }

  ngOnInit() {
  }

  set(any: any) {
    let user = new User();
    user.userName = "jam";
    user.number = 19;

    this.user = user;
  }

  get(any: any) {
    alert(this.user.userName + ', ' + this.user.number);
  }
}

export class User {
  userName: string;
  number: number;
}

@Directive({
  selector: '[floatValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: FloatValidatorDirective,
    multi: true
  }]
})
export class FloatValidatorDirective implements Validator {
  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } {
    var myreg = /^\d+(\.\d{1})?$/;
    var valid = myreg.test(control.value);
    return valid ? null : { floatValidate: false };
  }
}