import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
@NgModule({
    declarations: [
    SidebarComponent
],
    exports: [
        SidebarComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule

    ]
})
export class ComponentsModule { }
