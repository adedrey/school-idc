import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AdminLoginRoutingModule } from "./login-routing.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminLoginRoutingModule
  ],
  declarations: []
})

export class AdminLoginModule {}
