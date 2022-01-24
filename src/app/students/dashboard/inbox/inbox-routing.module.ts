import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentInboxComponent } from "./inbox.component";


const routes: Routes = [
  { path: "", component: StudentInboxComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StudentInboxRoutingModule { }
