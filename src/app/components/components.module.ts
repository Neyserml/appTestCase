import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AllRequestComponent } from "./all-request/all-request.component";

@NgModule({
  declarations: [AllRequestComponent],
  exports: [AllRequestComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule]
})
export class ComponentsModule {}
