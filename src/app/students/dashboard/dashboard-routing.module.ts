import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentDashboardComponent } from "./dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: StudentDashboardComponent,
    children: [
      {
        path: "home",
        loadChildren: () => import('./home/home.module').then( m => m.StudentHomeModule )
      },
      {
        path: "inbox",
        loadChildren: () => import('./inbox/inbox.module').then( m => m.StudentInboxModule )
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class StudentDashboardRoutingModule { }
