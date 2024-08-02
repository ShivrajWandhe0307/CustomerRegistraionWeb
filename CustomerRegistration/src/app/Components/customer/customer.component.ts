import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent 
{
  CustomerArray: any[] = [];
  isResultLoaded=false;
  isUpdateFormActive=false;

  customerName: String="";
  customerAddress: String="";
  mobile: Number=0;

  currentCustomerId="";

  constructor(private http:HttpClient)
  {
    this.getAllCustomer();
  }


  getAllCustomer()

  {
    this.http.get("http://localhost:8085/api/v1/customer/getAllCustomer").subscribe((resultData:any)=>
    {
      this.isResultLoaded=true;
      console.log(resultData);
      this.CustomerArray=resultData;
    });

  }


  register()
  {
    let bodyData={
      "customerName" : this.customerName,
      "customerAddress":this.customerAddress,
      "mobile":this.mobile
    };

    this.http.post("http://localhost:8085/api/v1/customer/save",bodyData,{responseType :  'text'}).subscribe((resultData:any)=>
    {
    console.log(resultData);
    alert("Customer Registered Successfully");
    this.getAllCustomer();
    this.customerName='';
    this.customerAddress='';
    this.mobile=0;}
    );
  }


  setUpdate(data:any)
  {
    this.customerName=data.customerName;
    this.customerAddress=data.customerAddress;
    this.mobile=data.mobile;
    this.currentCustomerId=data.customerId;

  }


  UpdateRecords()
  {
    let bodyData=
    {
      "customerId":this.currentCustomerId,
      "customerName":this.customerName,
      "customerAddress":this.customerAddress,
      "mobile":this.mobile
    };
    this.http.put("http://localhost:8085/api/v1/customer/update",bodyData,{responseType:'text'}).subscribe((resultData:any)=>
    {
      console.log(resultData);
      alert("Customer Register Updated...");
      this.getAllCustomer();
      this.customerName='';
      this.customerAddress='';
      this.mobile=0;
    });
  }


  save()
  {
    if(this.currentCustomerId=='')
    {
      this.register();

    }
    else{
      this.UpdateRecords();
    }
  }

  
  setDelete(data:any)
  {
    this.http.delete("http://localhost:8085/api/v1/customer/deletecustomer"+"/"+data.customerId,{responseType:'text'}).subscribe((resultData:any)=>
    {
      console.log(resultData);
      alert("Customer Deleted...");
      this.getAllCustomer();
      this.customerName='';
      this.customerAddress='';
      this.mobile=0;
    });
  }
}
