import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", loadChildren: () => import('./home/home.module').then( m => m.HomeModule) },

  // STUDENT

  { path: "student/login", loadChildren: () => import('./auth/student/login/login.module').then( m => m.StudentLoginModule) },
  { path: "student/dashboard", loadChildren: () => import("./students/dashboard/dashboard.module").then( m => m.StudentDashboardModule) },

  // STAFF

  { path: "staff/login", loadChildren: () => import('./auth/staff/login/login.module').then( m => m.StaffLoginModule) },
  { path: "staff/dashboard", loadChildren: () => import("./staff/dashboard/dashboard.module").then( m => m.StaffDashboardModule) },

  // ADMIN

  { path: "admin-001/account/login", loadChildren: () => import("./auth/admin/login/login.module").then( m => m.AdminLoginModule) }
  // {path:"**", component: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
