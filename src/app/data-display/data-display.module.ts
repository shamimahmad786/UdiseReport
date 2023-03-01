import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataDisplayParentComponent } from './data-display-parent/data-display-parent.component';
import {DataDisplayRoutingModule} from './data-display-routing.module';
import { TabularComponent } from './tabular/tabular.component';
import { ChartComponent } from './chart/chart.component'


@NgModule({
  declarations: [
    DataDisplayParentComponent,
    TabularComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    DataDisplayRoutingModule
  ]
})
export class DataDisplayModule { }
