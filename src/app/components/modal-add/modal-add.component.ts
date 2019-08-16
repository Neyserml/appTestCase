import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormGroup, FormControl } from "@angular/forms";
import { KeysService } from "../../core/services/keys/keys.service";
import Swal from "sweetalert2";
@Component({
  selector: "app-modal-add",
  templateUrl: "./modal-add.component.html",
  styleUrls: ["./modal-add.component.css"]
})
export class ModalAddComponent implements OnInit {
  public documentForm: FormGroup;
  constructor(
    private keysService: KeysService,
    @Inject(MAT_DIALOG_DATA) private data: { idkey: string },
    public dialogRef: MatDialogRef<ModalAddComponent>
  ) {}

  ngOnInit() {
    this.documentForm = new FormGroup({
      value: new FormControl(""),
      description: new FormControl("")
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public save() {
    let idkey = this.data.idkey;
    let value = this.documentForm.controls["value"].value;
    let descripcion = this.documentForm.controls["description"].value;
    if (value == "" || descripcion == "") {
      Swal.fire("Information", "You must complete the fields", "error");
      return false;
    }
    return this.keysService
      .savePossibleValuesKey(idkey, value, descripcion)
      .then(res => {
        this.dialogRef.close();
        this.documentForm.controls["value"].setValue("");
        this.documentForm.controls["description"].setValue("");
        Swal.fire("Information", "The data was save correctly", "success");
      });
  }
}
