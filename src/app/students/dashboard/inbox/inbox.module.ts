import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { StudentInboxRoutingModule } from "./inbox-routing.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StudentInboxRoutingModule
  ],
  declarations: []
})

export class StudentInboxModule { }
