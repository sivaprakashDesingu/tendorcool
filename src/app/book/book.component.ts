import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { CookieService } from 'angular2-cookie/core';
import { PassHomeValue } from '../service/service';
import { Http, Response } from '@angular/http';
import { DatePipe } from '@angular/common';
import { NativeDateAdapter } from "@angular/material";
import { Router } from "@angular/router";
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  public prlist;
  /* Dinmaic ng-model */
  qtd:any = {};
  sinttl:any = {};
  crttotal = 0;
  tolcrt;
  public inngarry = new Array();
  /* Dinmaic ng-model */
  isClassVisible: boolean;
  public upnwbtn;
  public qntcnt1 =1;
  public myBag = new Array()  ;
  public bagLng;
  


  
  constructor(private snackBar: MatSnackBar,private router: Router, private location: Location, private _cookieService: CookieService, private pass: PassHomeValue, private http: Http) { }
  goBack() {
    this.location.back();
  }
  
  goBookingAdd(prid){

       //this.router.navigate(['/aplylst']);
  }

addQuantity(a){
  var inpval;
  for(var i=0;i<this.prlist.length;i++){
    if(a==this.prlist[i].Pro_id){
       inpval = this.prlist[i].Pro_Price;
    }
  }
     this.qtd[a] = this.qtd[a] + 1;
    this.sinttl[a] = inpval * this.qtd[a];
   this.initiateTotal();
}
subQuantity(a){
  var inpval;
  for(var i=0;i<this.prlist.length;i++){
    if(a==this.prlist[i].Pro_id){
       inpval = this.prlist[i].Pro_Price;
    }
  }
  if(this.qtd[a]>=2 ){ 
    this.qtd[a] = this.qtd[a] - 1;
     this.sinttl[a] = inpval * this.qtd[a];
    this.initiateTotal();
  }
}

closeFltPad(){
  this.isClassVisible = false;
}
openFltPad(){
  window.scrollTo(0, 0);
  this.isClassVisible = true;
  this.initiateTotal();
}

loadMyBag(prid,ord){
  if(ord=="one"){
    this.openFltPad();
    for(var i=this.myBag.length;i>=this.myBag.length;i--){
        this.myBag.pop();
    }
  }
  
  if(this.myBag.includes(prid)==false){
      this.myBag.push(prid);
      this.initiateTotal();
  }
  this.bagLng = this.myBag.length;
  this.addBagAlert(prid,'add');
}

initiateTotal(){
  var c= new Array();
  console.log("Length is"+this.myBag.length);
  for(var i=0;i<this.myBag.length;i++){
    //console.log(this.sinttl[this.myBag[i]]);
    c.push(this.sinttl[this.myBag[i]]); 
  }
    var s = 0;
  for(var i=0;i<c.length;i++){
    s = parseInt(c[i]) + s;
  }
  this.crttotal = s;
 // console.log("Over all Cost"+this.crttotal);
}


removeFromBag(id){
   this.qtd[id] = 1;
   for(var i=0;i<this.prlist.length;i++){
    if(id==this.prlist[i].Pro_id){
       this.sinttl[id] = this.prlist[i].Pro_Price;
    }
  }
  this.myBag.splice(this.myBag.indexOf(id), 1);
  this.initiateTotal();
  this.bagLng = this.myBag.length;
  this.addBagAlert(id,'remv');
}

confimCar(cl,q,r,ts){
  localStorage.setItem("ordid",JSON.stringify(cl));
  localStorage.setItem("ordqwan",JSON.stringify(q));
  localStorage.setItem("ordpr",JSON.stringify(r));
  localStorage.setItem("orcst",ts);

  this.router.navigate(['/aplylst']);

}

addBagAlert(a,ac){
  if(ac=="add"){
    this.snackBar.open("The Product("+a+") has been added) ", "done", {
          duration:1000,
    });
  }else{
    this.snackBar.open("The Product("+a+") has been Removed) ", "done", {
          duration:1000,
    });
  }
   
}
  ngOnInit() {
    /* fetch delivery locaiotn */
    this.http.get('http://www.sarvaamexporters.com/shiva/Tendor/productlist.php', {
    //this.http.get('http://localhost/Ten-Backend/productlist.php', {
        params: {
          emp_id: localStorage.getItem("recordno"),
        }
      })
        .map(res => res.json())
        .subscribe(data => {
          this.prlist = data;
          for (var i=0;i<this.prlist.length;i++){
              this.inngarry.push(this.prlist[i].Pro_id);
              this.qtd[this.prlist[i].Pro_id] =1;
              this.sinttl[this.prlist[i].Pro_id] = this.prlist[i].Pro_Price;
          } 
        },
        err => console.log(err),
        () => console.log());

       
        
  }
  /* validation */
  noteFormControl = new FormControl(null, [
    Validators.required,
    Validators.minLength(3)
  ]);


}
