import { LandingpageComponent } from './../landingpage/landingpage.component';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  booklist:any;
  imagePath: any;
  UserName:any;
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
  constructor(private router:Router,private landingpage:LandingpageComponent ) { }
@Input()

  ngOnInit() {


        this.centered=false
        this.centered = false;
        this.disabled = false;
        this.unbounded = false;
       
    this.UserName=atob(localStorage.getItem('USERDATA'));

    this.imagePath=this.landingpage.getimage;

    this.booklist=[
      {book_name:'ABC BCD',auther_name:'RAM VARMA',price:'₹800',discount_price:'₹720',discount:'20%'},
      {book_name:'PQR',auther_name:'XYZ',price:'₹800',discount_price:'₹720',disount:'25%'},
      {book_name:'KMLOP',auther_name:'SHIVA RAJPUT',price:'₹800',discount_price:'₹720',discount:'40%'},
      {book_name:'ABCDEFG',auther_name:'SUHAS KUMAR',price:'₹800',discount_price:'₹720',discount:'10%'},
      {book_name:'RTDFG',auther_name:'AMIT PATIL',price:'₹500',discount_price:'₹720',discount:'30%'},
      {book_name:'ABC BCD',auther_name:'RAM VARMA',price:'₹800',discount_price:'₹720',discount:'20%'},
      {book_name:'PQR',auther_name:'XYZ',price:'₹800',discount_price:'₹720',discount:'10%'},
      {book_name:'KMLOP',auther_name:'SHIVA RAJPUT',price:'₹800',discount_price:'₹720',discount:'25%'},
      {book_name:'ABCDEFG',auther_name:'SUHAS KUMAR',price:'₹800',discount_price:'₹720',discount:'50%'},
      {book_name:'RTDFG',auther_name:'AMIT PATIL',price:'₹500',discount_price:'₹720',discount:'10%'},
      {book_name:'ABC BCD',auther_name:'RAM VARMA',price:'₹800',discount_price:'₹720',discount:'30%'},
      {book_name:'PQR',auther_name:'XYZ',price:'₹800',discount_price:'₹720',discount:'20%'},
      {book_name:'KMLOP',auther_name:'SHIVA RAJPUT',price:'₹800',discount_price:'₹720',discount:'20%'},
      {book_name:'ABCDEFG',auther_name:'SUHAS KUMAR',price:'₹800',discount_price:'₹720',discount:'20%'},
      {book_name:'RTDFG',auther_name:'AMIT PATIL',price:'₹500',discount_price:'₹720',discount:'20%'},
        ];

    this.router.navigate(['/UserHome'])
  }
  showlistofbook()
  {
this.router.navigate(['/booklist'])
  }
  mainHomePage()
  {
    this.router.navigate(['/UserHome'])
  }

  logout()
  {
    this.router.navigate(['/landingpage']);
    localStorage.clear();
  }
  funadminInfo()
  {

  }

}
