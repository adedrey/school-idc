import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentForgotPasswordComponent } from "./forgot-password.component";

const routes: Routes = [
  {
    path: "",
    component: StudentForgotPasswordComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class StudentForgotPasswordRoutingModule { }
