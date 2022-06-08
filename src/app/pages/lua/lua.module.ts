import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LuaRoutingModule } from './lua-routing.module';
import { LuaComponent } from './lua.component';


@NgModule({
  declarations: [
    LuaComponent
  ],
  imports: [
    CommonModule,
    LuaRoutingModule
  ]
})
export class LuaModule { }
