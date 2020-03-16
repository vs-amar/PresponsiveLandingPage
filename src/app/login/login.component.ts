import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;

  constructor(private FormBuilder:FormBuilder ) { }

  ngOnInit() {
    this.LoginForm=this.FormBuilder.group({

      UserName:['',Validators.required],
      password:['',Validators.required],
      },
      );
      }    
      
      
      Clear()
      {
  
          this.LoginForm.reset();
      }

      Login()
      {

      }
  }


