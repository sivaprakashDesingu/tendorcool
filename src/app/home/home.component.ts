import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PassHomeValue } from '../service/service';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';;
/*import { Injectable } from '@angular/core';*/
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { MatSnackBar } from '@angular/material';

import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tcchecked= false;
  isClassVisible: boolean;
  private uLoc;
  private aloc;
  constructor(private router: Router, private pass: PassHomeValue, private http: Http, private snackBar: MatSnackBar,
    private _cookieService: CookieService) { }

  getLoction(loc){
    localStorage.setItem("userloc",loc);
     this.router.navigate(['/book']);
   // this._cookieService.put('empid', loc);
  }
 
closeTPMDL(){
 this.isClassVisible = true;
}
 
  ngOnInit() {
    localStorage.clear();
    /* fetch delivery locaiotn */
    this.http.get('http://www.sarvaamexporters.com/shiva/Tendor/homeloc.php', {
   // this.http.get('http://localhost/Ten-Backend/homeloc.php', {
        params: {
          emp_id: localStorage.getItem("recordno"),
        }
      })
        .map(res => res.json())
        .subscribe(data => {
          this.aloc = data;
        },
        err => console.log(err),
        () => console.log());
    
  }

}
