import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
// Rutas
import { APP_ROUTES } from "./app-routing.module";

// Modulos
import { PagesModule } from "./pages/pages.module";
///---
import { FormsModule } from "@angular/forms";

// Componentes
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
