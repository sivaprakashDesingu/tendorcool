import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { PassHomeValue } from '../service/service';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  
 public det;
 public orids;
 public ordua;
 public ordpr;
 public ttcst;
 public list = [];
 public uname = localStorage.getItem("uname");
//  public qua = [];
//  public  = [];
 

  constructor(private location: Location,private pass: PassHomeValue,private cook: CookieService) { }
 goBack(){
    this.location.back();
  }
  getCookie(key: string) {
    return this.cook.get(key);
    //console.log( this._cookieService.get(key));
  }
  ngOnInit() {
    this.orids = JSON.parse(localStorage.getItem("ordid"));
    this.ordua = JSON.parse(localStorage.getItem("ordqwan"));
    this.ordpr = JSON.parse(localStorage.getItem("ordpr"));
    this.ttcst = JSON.parse(localStorage.getItem("orcst"));


    for(var i=0;i<Object.keys(this.ordua).length;i++){
      for(var j=0;j<Object.keys(this.orids).length;j++){
        this.list.push(
          {'id': this.orids[j],'qua': this.ordua[this.orids[j]],'prs': this.ordpr[this.orids[j]]}
        );
       
      }
            break;
    }

  }

}
