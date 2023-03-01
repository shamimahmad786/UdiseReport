import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReportListComponentComponent} from './report-list-component.component';
import {ListDataComponent} from '../list-data/list-data.component'

const routes: Routes = [
//   { path: '', component: ReportListComponentComponent },

{  path: '', component: ReportListComponentComponent, children: [
   
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: ListDataComponent },
    {
        path: 'displayData', pathMatch: 'prefix',
        loadChildren: () => import('../data-display/data-display.module').then(m => m.DataDisplayModule)
      }
]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportListRoutingModule { }
