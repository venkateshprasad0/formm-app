import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  "loginForm": FormGroup;
  isSubmitted = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private service:AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      UserName:['',Validators.required,Validators.maxLength(10),Validators.pattern(`[a-zA-Z]+$`)],
      password:['', Validators.required,Validators.minLength(10)]
    });
  }
  get formControls(){
    return this.loginForm.controls;
  }
  login(){
    this.isSubmitted=true;
    if(this.loginForm.invalid){
      return;
    }
    this.service.login();
    this.router.navigateByUrl("admin");
  }
}
