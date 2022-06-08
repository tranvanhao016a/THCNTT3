import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoaRoutingModule } from './hoa-routing.module';
import { HoaComponent } from './hoa.component';


@NgModule({
  declarations: [
    HoaComponent
  ],
  imports: [
    CommonModule,
    HoaRoutingModule
  ]
})
export class HoaModule { }
