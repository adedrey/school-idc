import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { StudentDashboardRoutingModule } from "./dashboard-routing.module";
import { StudentHomeComponent } from "./home/home.component";
import { StudentInboxComponent } from "./inbox/inbox.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StudentDashboardRoutingModule
  ],
  declarations: [
    StudentHomeComponent,
    StudentInboxComponent
  ]
})

export class StudentDashboardModule {}
