import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentLoginComponent } from "./login.component";

const routes: Routes = [
  {
    path: "",
    component: StudentLoginComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class StudentLoginRoutingModule { }
