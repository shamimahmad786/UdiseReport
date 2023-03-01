import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReportListComponentComponent} from './report-list-component/report-list-component.component';

const routes: Routes = [
  // { path: '', component: ReportListComponentComponent },
  // {path:'datadisplay',loadChildren:'./data-display/'}
  { path: '', redirectTo: 'reportList', pathMatch: 'full' },
  {
    path: 'reportList',
    loadChildren: () => import('./report-list-component/report-list.module').then(m => m.ReportListModule)
  }
  // {
  //   path: 'dataDisplay',
  //   loadChildren: () => import('./data-display/data-display.module').then(m => m.DataDisplayModule)
  // }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
