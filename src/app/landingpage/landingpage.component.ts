import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  imagePath:any;
  activeHome:any;
  activeAbout:any;
  activeContact:any;
  activeLogin:any;
  showMessege:any;
  interval: any;

  MessageForm:FormGroup;

  constructor(private formbuilder:FormBuilder,private dialog:MatDialog) { }

  ngOnInit() {
    this.imagePath="../assets/brown-book-page-1112048.jpg";
    this.activeHome='active';

    this.MessageForm=this.formbuilder.group({
      
      name:['',Validators.required],
      contactno:['',Validators.required],
      email:['',Validators.required],
      message:['',Validators.required],
      },
      );
 
  }

  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  scrollToElementHome(): void {
    var home=document.getElementById('home');

    home.scrollIntoView({behavior: "smooth", block: "start"});
    this.activeHome='active';
    this.activeContact='';
    this.activeAbout='';
  }

 
  scrollToElementContact(): void {
    var contact=document.getElementById('contact');

    contact.scrollIntoView({behavior: "smooth", block: "start"});
    this.activeContact='active';
    this.activeAbout='none';
    this.activeLogin='none';
  }


  scrollToElementAbout(): void {
    var about=document.getElementById('about');

    about.scrollIntoView({behavior: "smooth", block: "start"});
    this.activeAbout='active';
    this.activeContact='';
    this.activeHome='';
  }

  scrollToElementLogin(): void {
   
    // var login=document.getElementById('home');

    // login.scrollIntoView({behavior: "smooth", block: "start"});

    const dialogRef = this.dialog.open(LoginComponent, {
      width: 'auto',
      height:'auto',  
      data: {}
  
   });



  }

  SendMessage()
  {

    if(this.MessageForm.valid)
    {
      this.showMessege=true;
     
      this.interval = setInterval(() => {
        this.showMessege=false;
      },3000)
    }
    else
    {
      this.MessageForm.markAllAsTouched();
    }
    

  }

}
