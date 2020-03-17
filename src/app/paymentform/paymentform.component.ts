import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-paymentform',
  templateUrl: './paymentform.component.html',
  styleUrls: ['./paymentform.component.css']
})
export class PaymentformComponent implements OnInit {

  paymenttype:any;
  showDebicardPaymentForm:boolean=false;
  showOTPInput:boolean=false;
  showOTPInputbtn:boolean=false;
  showOTPInputBYE:boolean=false;
  selected:string;
  selectoption = new FormControl('', Validators.required);
  OTP = new FormControl('', Validators.required);
  MessageForm:FormGroup
  constructor(private formbuilder:FormBuilder ) { }

  ngOnInit() {

    this.paymenttype = [
      {type: 'Debit Card'},
      {type: 'Cash On Delivery'},
    ];

    this.MessageForm=this.formbuilder.group({
      
      debitcard_number:['',Validators.required],
      date:['',Validators.required],
      cvv:['',Validators.required],
      },
      );


  }

  optionselected(type:string)
  {
   if(type=='Debit Card')
   {
this.showDebicardPaymentForm=true;
this.showOTPInputBYE=false;
   }
   else if(type=='Cash On Delivery'){
    this.showDebicardPaymentForm=false;
    this.showOTPInputBYE=true;
    this.showOTPInput=false;
   
     }
   
  }

  PROCCED()
  { 
  
    if(this.MessageForm.valid==true)
    {
      this.showOTPInput=true;
      this.showOTPInputbtn=true;
      this.showOTPInputBYE=false;
    }
    else
    {
      this.showOTPInput=false;
      this.MessageForm.markAllAsTouched;
    }

  }
  PAY()
  {

  }

}
