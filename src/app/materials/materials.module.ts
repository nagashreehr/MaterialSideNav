import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatInputModule
    
  ],
  exports:[
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatInputModule

  ],
})
export class MaterialsModule { }
