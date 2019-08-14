import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { KeysService } from "../../core/services/keys/keys.service";
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  public dataKeys;
  public infoKeys;
  @Output() datainfo = new EventEmitter();
  constructor(private keysService: KeysService) {}

  ngOnInit() {
    this.geKeys();
  }
  public geKeys() {
    return this.keysService.getKeys().then(todos => {
      this.dataKeys = todos;
    });
  }
  public getInfoKey(idkey) {
    const key = this.keysService.searchInfoKey(idkey);
    this.datainfo.emit(key);
  }
}
