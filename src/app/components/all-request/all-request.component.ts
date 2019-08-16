import { Component, OnInit } from "@angular/core";
import { KeysService } from "../../core/services/keys/keys.service";
@Component({
  selector: "app-all-request",
  templateUrl: "./all-request.component.html",
  styleUrls: ["./all-request.component.css"]
})
export class AllRequestComponent implements OnInit {
  public dataReceivedRequest: any;
  constructor(private keysService: KeysService) {}

  ngOnInit() {
    this.getAllRequest();
  }
  public getAllRequest() {
    this.dataReceivedRequest = this.keysService.getAllRequest();
  }
}
