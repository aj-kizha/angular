import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PpfComponent} from './ppf/ppf.component';
import {StockComponent} from './stock/stock.component';
import {MfComponent} from './mf/mf.component';

const routes: Routes = [{path:'ppf',component:PpfComponent},
{path:'stock',component:StockComponent},{path:'mf',component:MfComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
