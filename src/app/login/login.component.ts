import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  showLoginMessage:any;
  constructor(private FormBuilder:FormBuilder,private router:Router ) { }

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
         this.router.navigate(['/UserHome'])
      }
  }


