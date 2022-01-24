import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffDashboardComponent } from './staff/dashboard/dashboard.component';
import { StudentDashboardComponent } from './students/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffDashboardComponent,
    StudentDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
