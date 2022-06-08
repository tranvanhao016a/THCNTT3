import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'lua', loadChildren: () => import('./pages/lua/lua.module').then(m => m.LuaModule) }, 
{ path: 'chuoi', loadChildren: () => import('./pages/chuoi/chuoi.module').then(m => m.ChuoiModule) },
 { path: 'hoa', loadChildren: () => import('./pages/hoa/hoa.module').then(m => m.HoaModule) }, 
 { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
