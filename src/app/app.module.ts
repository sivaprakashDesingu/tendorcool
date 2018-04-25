import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { NotFoundComponent} from './notfound/notfound.component';
import { StatusComponent } from './status/status.component';
import { UpdatebookingComponent } from './updatebooking/updatebooking.component';
import { ApplylistComponent } from './applylist/applylist.component';




/* service */
import  { PassHomeValue } from './service/service';


/* Router */
import { RouterModule } from "@angular/router";
import { AppComponents, AppRoutes } from "./app.routes"; 

/* Material design Starts*/
/* common */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
/* input */
import {MatInputModule} from '@angular/material/input';
/* Button */
import {MatButtonModule} from '@angular/material/button';
/* Select drop down */
import { MatSelectModule } from '@angular/material';
/* Card  material design */
import {MatCardModule} from '@angular/material/card';
/* Date picker */
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
/* Snick bar */
import {MatSnackBarModule} from '@angular/material/snack-bar';
/* tab */
import {MatTabsModule} from '@angular/material/tabs';
/* Menu icon */
import {MatMenuModule} from '@angular/material/menu';
/* Auto complete */
import {MatAutocompleteModule} from '@angular/material/autocomplete';
/* Light box */
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
/* checkbox */
import {MatCheckboxModule} from '@angular/material/checkbox';


/* Material design Ends*/
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import {MatSliderModule} from '@angular/material/slider';

import { HttpModule }      from '@angular/http';
import { TermsComponent } from './terms/terms.component';
import { PolicyComponent } from './policy/policy.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    StatusComponent,
    NotFoundComponent,
    UpdatebookingComponent,
    ApplylistComponent,
    TermsComponent,
    PolicyComponent,
    
    
  ],
  entryComponents: [],
  imports: [
     BrowserModule,BrowserAnimationsModule,NoopAnimationsModule,MatInputModule,MatButtonModule,
     RouterModule.forRoot(AppRoutes),HttpModule,MatSelectModule,MatCardModule,MatDatepickerModule,MatNativeDateModule,MatSnackBarModule,
     MatTabsModule,MatMenuModule,FormsModule,MatAutocompleteModule,ReactiveFormsModule,MatDialogModule,MatIconModule,MatSliderModule,MatCheckboxModule
  ],
  providers: [PassHomeValue,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
