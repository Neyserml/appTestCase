import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PAGES_ROUTES } from "./pages.routes";
import { SharedModule } from "../shared/shared.module";

import { PagesComponent } from "./pages.component";
import { HomeComponent } from "./home/home.component";
import { ComponentsModule } from "../components/components.module";
import { RequestComponent } from "./request/request.component";
import { MatTabsModule } from "@angular/material";
@NgModule({
  declarations: [PagesComponent, HomeComponent, RequestComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    ReactiveFormsModule,
    SharedModule,
    ComponentsModule,
    PAGES_ROUTES
  ]
})
export class PagesModule {}
