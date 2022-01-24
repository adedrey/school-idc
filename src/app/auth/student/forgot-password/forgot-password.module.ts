import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { StudentForgotPasswordRoutingModule } from "./forgot-password-routing.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StudentForgotPasswordRoutingModule
  ],
  declarations: []
})

export class StudentForgotPasswordModule {}
