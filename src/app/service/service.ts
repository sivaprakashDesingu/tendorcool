import { Injectable,Component } from '@angular/core';
import {HomeComponent} from '../home/home.component';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { Router } from "@angular/router";


@Component({
  providers: [HomeComponent] 
})


@Injectable()
export class PassHomeValue{
    public proids;
   
    public proqu:any = {};;
    public propr:any = {};;
    userLocation(loc){
        return loc;
    }


    getOrderDet(id,qu,pr){
        this.proids = id;
        this.proqu = qu;
        this.propr = pr;
    }
}

