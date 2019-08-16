import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AllRequestComponent } from "./all-request/all-request.component";
import { ModalAddComponent } from "./modal-add/modal-add.component";
import { MatDialogModule } from "@angular/material/dialog";
import { ModalEditComponent } from "./modal-edit/modal-edit.component";

@NgModule({
  declarations: [AllRequestComponent, ModalAddComponent, ModalEditComponent],
  exports: [AllRequestComponent],
  entryComponents: [ModalAddComponent, ModalEditComponent],
  imports: [MatDialogModule, CommonModule, ReactiveFormsModule, FormsModule]
})
export class ComponentsModule {}
