import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { StudentLoginRoutingModule } from "./login-routing.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StudentLoginRoutingModule
  ],
  declarations: []
})

export class StudentLoginModule {}
