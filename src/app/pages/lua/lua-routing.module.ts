import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LuaComponent } from './lua.component';

const routes: Routes = [{ path: '', component: LuaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LuaRoutingModule { }
