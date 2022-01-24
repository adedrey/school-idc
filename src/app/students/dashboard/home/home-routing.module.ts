import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentHomeComponent } from "./home.component";


const routes: Routes = [
  { path: "", component: StudentHomeComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule]
})

export class StudentHomeRoutingModule { }
