import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoaComponent } from './hoa.component';

const routes: Routes = [{ path: '', component: HoaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoaRoutingModule { }
