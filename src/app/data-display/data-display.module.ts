import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataDisplayParentComponent } from './data-display-parent/data-display-parent.component';
import {DataDisplayRoutingModule} from './data-display-routing.module';
import { TabularComponent } from './tabular/tabular.component';
import { ChartComponent } from './chart/chart.component'
import { AgGridModule } from 'ag-grid-angular';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    DataDisplayParentComponent,
    TabularComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    DataDisplayRoutingModule,
    AgGridModule,
    HighchartsChartModule
  ]
})
export class DataDisplayModule { }
