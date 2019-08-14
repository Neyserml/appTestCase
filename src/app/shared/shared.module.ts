import { NgModule } from "@angular/core";
import { NopagefoundComponent } from "./nopagefound/nopagefound.component";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from "@angular/common";
@NgModule({
  declarations: [NopagefoundComponent, HeaderComponent],
  exports: [NopagefoundComponent, HeaderComponent],
  imports: [CommonModule]
})
export class SharedModule {}
