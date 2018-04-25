import { Component, OnInit, Inject } from '@angular/core';
import { Location } from "@angular/common";
import { CookieService } from 'angular2-cookie/core';
import { Http, Response } from '@angular/http';

import { PassHomeValue } from '../service/service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-applylist',
  templateUrl: './applylist.component.html',
  styleUrls: ['./applylist.component.css']
})
export class ApplylistComponent implements OnInit {
  public prlist;
  /* Form Variable */
  // public fn = 'sps';
  // public ei = 'sp@gmail.com';
  // public bm = '7708868770';
  // public add1 = '12';
  // public add2 = 'jeeva';
  // public add3;
  // public add4 = 6007301;
public fn;
  public ei ;
  public bm ;
  public add1;
  public add2 ;
  public add3;
  public add4 ;

  /* Form Variable */
 /* Order confirmed Details */
  public orids;
  public ordua;
  public ordpr;
  public ttcst;
/* Order confirmed Details */
  orqtd:any = {};
  ordplst:any = {};

  constructor(private location: Location, private router: Router, private _cookieService: CookieService, private http: Http, private pass: PassHomeValue) { }

  goBack() {
    this.location.back();
  }
  getCookie(key: string) {
    return this._cookieService.get(key);
    //console.log( this._cookieService.get(key));
  }
 
  isOrdered(){
    //console.log(this.orids);
   // console.log(this.ordua); 
    /*placing OrderX*/
    this.http.get('http://www.sarvaamexporters.com/shiva/Tendor/isOrderd.php', {
    //this.http.get('http://localhost/Ten-Backend/isOrderd.php', {
      params: {
        cusname: this.fn,
        cusid:this.ei,
        cusmo:this.bm,
        flono:this.add1,
        st:this.add2,
        area:this.add3,
        pin:this.add4,
        orproid:JSON.stringify(this.orids),
        orproqua:JSON.stringify(this.ordua),
        orprolpr:JSON.stringify(this.ordpr),
        orprototal :this.ttcst,
      }
    })
      .map(res => res.json())
      .subscribe(data => {
       localStorage.setItem("uname",this.fn);
        this.router.navigate(['/status']);
      },
      err => console.log(err),
      () => console.log("Completed"));
  }


  ngOnInit() {
  
    this.orids = JSON.parse(localStorage.getItem("ordid"));
    this.ordua = JSON.parse(localStorage.getItem("ordqwan"));
    this.ordpr = JSON.parse(localStorage.getItem("ordpr"));
    this.ttcst = JSON.parse(localStorage.getItem("orcst"));
    this.add3 = localStorage.getItem("userloc");

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
      },
      err => console.log(err),
      () => console.log('Completed'));

  }

}







