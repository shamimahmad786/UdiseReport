import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DataDisplayParentComponent} from './data-display-parent/data-display-parent.component';
import {TabularComponent} from './tabular/tabular.component';
import {ChartComponent} from './chart/chart.component';
import { MapComponent } from './map/map.component';

type PathMatch = "full" | "prefix" | undefined;
const routes: Routes = [
  // { path: '', component: DataDisplayParentComponent }

  {  path: '', component: DataDisplayParentComponent, children: [   
    { path: '', redirectTo: 'tabularReport', pathMatch: 'full' },
    { path: 'tabularReport', component: TabularComponent },
    { path: 'chartReport', component: ChartComponent },
    {path :'mapReport',component:MapComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataDisplayRoutingModule { }
