import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { KeysService } from "../../core/services/keys/keys.service";
import Swal from "sweetalert2";
import { MatDialog } from "@angular/material";
import { ModalAddComponent } from "../../components/modal-add/modal-add.component";
import { ModalEditComponent } from "src/app/components/modal-edit/modal-edit.component";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public datatype;
  public dataKeys;
  public datainfo;
  public dataReceivedInfo: any;
  public dataReceivedKey: any;
  public dataReceivedPossible: any;
  public datita;
  public btnUpdate: Boolean = true;
  public btnAddValues: Boolean = false;
  public btnSave: Boolean = false;
  public viewCheck: Boolean = false;
  public viewKeyName: Boolean = false;
  public viewTitle: Boolean = true;
  public viewSensibility: Boolean = true;
  public title: string;
  public message_personal: string = "";
  public documentForm: FormGroup;
  public idkeyBlogal;
  constructor(private keysService: KeysService, public dialog: MatDialog) {
    this.idkeyBlogal = 0;
  }
  ngOnInit() {
    this.documentForm = new FormGroup({
      id_key: new FormControl(""),
      key_name: new FormControl(""),
      descripcion: new FormControl(""),
      type: new FormControl(""),
      is_personal: new FormControl(false)
    });
    this.geKeys();
    this.getdataKeys();
  }
  public update() {
    if (this.documentForm.controls["key_name"].value == "") {
      Swal.fire("Information", "You must select the key to edit", "error");
      return false;
    }
    this.btnSave = true;
    this.btnUpdate = false;
    this.viewCheck = true;
    this.viewKeyName = true;
    this.viewTitle = false;
    this.viewSensibility = false;
  }
  public getInfoKey(idkey) {
    this.btnAddValues = true;
    this.dataReceivedInfo = this.keysService.searchInfoKey(idkey);
    this.dataReceivedKey = this.keysService.searchKey(idkey);
    this.dataReceivedPossible = this.keysService.getPossiblevalues(idkey);
    this.dataReceivedKey.forEach((element: any) => {
      this.title = element.description_key;
      this.documentForm.controls["key_name"].setValue(element.description_key);
      this.documentForm.controls["id_key"].setValue(element.id_key);
      this.idkeyBlogal = element.id_key;
    });
    this.dataReceivedInfo.forEach((element: any) => {
      this.documentForm.controls["type"].setValue(element.id_datatype);
      this.documentForm.controls["descripcion"].setValue(
        element.description_info
      );
      this.documentForm.controls["is_personal"].setValue(element.is_personal);
      if (element.is_personal == true) {
        this.message_personal =
          "This is personal data, and cannot be distributed in raw form";
      } else {
        this.message_personal = "";
      }
    });
  }
  public save() {
    let id_key = this.documentForm.controls["id_key"].value;
    let key_name = this.documentForm.controls["key_name"].value;
    let descripcion = this.documentForm.controls["descripcion"].value;
    let type = this.documentForm.controls["type"].value;
    let is_personal = this.documentForm.controls["is_personal"].value;
    return this.keysService
      .editKey(id_key, key_name, descripcion, type, is_personal)
      .then(res => {
        this.viewSensibility = true;
        this.viewCheck = false;
        this.btnSave = false;
        this.btnUpdate = true;
        this.documentForm.controls["key_name"].setValue("");
        this.documentForm.controls["descripcion"].setValue("");
        this.documentForm.controls["type"].setValue("");
        this.dataReceivedPossible = [];
        Swal.fire("Information", "The data was updated correctly", "success");
        this.geKeys();
      });
  }
  public geKeys() {
    return this.keysService.getKeys().then(todos => {
      this.dataKeys = todos;
    });
  }
  public getdataKeys() {
    return this.keysService.getdatatype().then(res => {
      this.datatype = res;
    });
  }

  public viewModalAdd() {
    const dialogRef = this.dialog.open(ModalAddComponent, {
      width: "400px",
      data: {
        idkey: this.idkeyBlogal
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.dataReceivedPossible = this.keysService.getPossiblevalues(
        this.idkeyBlogal
      );
    });
  }
  public viewEdit(idpossible, value, description) {
    const dialogRef = this.dialog.open(ModalEditComponent, {
      width: "400px",
      data: {
        idpossible: idpossible,
        idkey: this.idkeyBlogal,
        value: value,
        description: description
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.dataReceivedPossible = this.keysService.getPossiblevalues(
        this.idkeyBlogal
      );
    });
  }
}
