import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChuoiRoutingModule } from './chuoi-routing.module';
import { ChuoiComponent } from './chuoi.component';


@NgModule({
  declarations: [
    ChuoiComponent
  ],
  imports: [
    CommonModule,
    ChuoiRoutingModule
  ]
})
export class ChuoiModule { }
