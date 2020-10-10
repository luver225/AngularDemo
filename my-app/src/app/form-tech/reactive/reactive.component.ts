import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.maxLength(10)]],
      number: ['', [Validators.required, Validators.max(100),this.floatValidator]],
    });
  }

  ngOnInit() {
  }

  set(any: any) {
    this.loginForm.controls.userName.setValue("test");
    this.loginForm.controls.number.setValue(10);

  }

  get(any: any) {
    let userName = this.loginForm.controls.userName.value;
    let password = this.loginForm.controls.number.value;
    alert(userName + ', ' + password);
  }


  //常用的正则表达式： https://c.runoob.com/front-end/854
  //自定义验证器，0.1精度 
  floatValidator(control: FormControl): any {
    var myreg = /^\d+(\.\d{1})?$/;
    var valid = myreg.test(control.value);
    return valid ? null : { floatValidate: false };
  }
}
