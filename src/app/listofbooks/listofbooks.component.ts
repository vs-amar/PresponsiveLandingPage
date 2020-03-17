import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-listofbooks',
  templateUrl: './listofbooks.component.html',
  styleUrls: ['./listofbooks.component.css']
})
export class ListofbooksComponent implements OnInit {

 
  AllRequets:any;
newdate:any;
currentDate:any
UserName:any;
RequestCount:number=0;

  displayedColumns: string[] = ['new','Bool_Name','Auther_Name','Pirce', 'Discount_Pirse','action'];
  

    dataSource: MatTableDataSource<any>;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;
  data: { book_name: string; auther_name: string; price: string; discount_price: string; }[];

  constructor( private datePipe:DatePipe,private router:Router) { }

  ngOnInit() {

    this.UserName=atob( localStorage.getItem('USERDATA'));

    this.newdate=new Date();
    this.currentDate = this.datePipe.transform(this.newdate, 'dd-MM-yyyy ');
     this.router.navigate(['/booklist'])

    this.AllRequets=[
{book_name:'ABC BCD',auther_name:'RAM VARMA',price:'₹800',discount_price:'₹720'},
{book_name:'PQR',auther_name:'XYZ',price:'₹800',discount_price:'₹720'},
{book_name:'KMLOP',auther_name:'SHIVA RAJPUT',price:'₹800',discount_price:'₹720'},
{book_name:'ABCDEFG',auther_name:'SUHAS KUMAR',price:'₹800',discount_price:'₹720'},
{book_name:'RTDFG',auther_name:'AMIT PATIL',price:'₹500',discount_price:'₹720'},
{book_name:'ABC BCD',auther_name:'RAM VARMA',price:'₹800',discount_price:'₹720'},
{book_name:'PQR',auther_name:'XYZ',price:'₹800',discount_price:'₹720'},
{book_name:'KMLOP',auther_name:'SHIVA RAJPUT',price:'₹800',discount_price:'₹720'},
{book_name:'ABCDEFG',auther_name:'SUHAS KUMAR',price:'₹800',discount_price:'₹720'},
{book_name:'RTDFG',auther_name:'AMIT PATIL',price:'₹500',discount_price:'₹720'},
{book_name:'ABC BCD',auther_name:'RAM VARMA',price:'₹800',discount_price:'₹720'},
{book_name:'PQR',auther_name:'XYZ',price:'₹800',discount_price:'₹720'},
{book_name:'KMLOP',auther_name:'SHIVA RAJPUT',price:'₹800',discount_price:'₹720'},
{book_name:'ABCDEFG',auther_name:'SUHAS KUMAR',price:'₹800',discount_price:'₹720'},
{book_name:'RTDFG',auther_name:'AMIT PATIL',price:'₹500',discount_price:'₹720'},
  ];

 this.dataSource= new MatTableDataSource(this.AllRequets);
 this.dataSource.paginator = this.paginator;
 this.dataSource.sort = this.sort;

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  mainHomePage()
  {
    this.router.navigate(['/UserHome'])
  }

  funViewRequestDetails(empname:string,emplastname:string,docname:string,requestmessage:string,emp_com_id:string,request_id:string)
{
  alert('we are working on this..sorry for this service..');
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
