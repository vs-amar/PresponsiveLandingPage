import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  showLoginMessage:any;
  users:any;
  interval:any;
  constructor(private FormBuilder:FormBuilder,private router:Router,private dialog:MatDialog ) { }

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

        this.users=[
          {User_Name:'AMAR JADHAV',User_Password:'amar@123'},
          {User_Name:'PRATIK NIMBALKAR',User_Password:'pratik@123'},
          {User_Name:'VINAYAK PEDKAR',User_Password:'vinayak@123'}
        ];

          for (var index = 0; index < this.users.length; index++) {

          var UserName = this.users[index];
          var Password = this.users[index];

      //  console.log(UserName.User_Name+""+Password.User_Password);

        if(UserName.User_Name ==this.LoginForm.controls.UserName.value && Password.User_Password==this.LoginForm.controls.password.value )
        {
          console.log(UserName.User_Name+""+Password.User_Password);
          localStorage.setItem('USERDATA',btoa(UserName.User_Name))
          this.router.navigate(['/UserHome'])
          this.dialog.closeAll();
        }
        else{
          this.showLoginMessage=true;
     
          this.interval = setInterval(() => {
            this.showLoginMessage=false;
         
          },3000)
         
        }

       } 
     }
  }


