import { Component } from '@angular/core';

@Component({
  template: `
    <div class="jumbotron text-center">
      <h1>404 Not Found</h1>
      <p>You may be lost. Follow the breadcrumbs back <a routerLink="/">home</a>.</p>
    </div>

    <div class="form-group">
    <label for="inputEmail" class="col-lg-2 control-label">Email</label>
    <div class="col-lg-10">
        <input type="text" class="form-control" id="name" placeholder="Name" minlength="4" maxlength="24"  [(ngModel)]="name" name="email" #myName="ngModel" required>
            <div *ngIf="myName.errors && (myName.dirty || myName.touched)" class="alert alert-danger">
                <div [hidden]="!myName.errors.required">
                    Name is required
                </div>
                <div [hidden]="!myName.errors.minlength">
                    Name must be at least 4 characters long.
                </div>
                <div [hidden]="!myName.errors.maxlength">
                    Name cannot be more than 24 characters long.
                </div>
            </div>
    </div>
</div>
  `
})
export class NotFoundComponent { }