import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataDisplayParentComponent } from './data-display-parent/data-display-parent.component';
import {DataDisplayRoutingModule} from './data-display-routing.module';
import { TabularComponent } from './tabular/tabular.component';
import { ChartComponent } from './chart/chart.component'
import { AgGridModule } from 'ag-grid-angular';
import { HighchartsChartModule } from 'highcharts-angular';
import { SearchMasterComponent } from '../commonComponent/search-master/search-master.component';
import { SelectButtonModule } from "primeng/selectbutton";
import { FormsModule } from '@angular/forms';
import { ButtonModule } from "primeng/button";




@NgModule({
  declarations: [
    DataDisplayParentComponent,
    TabularComponent,
    ChartComponent,
    SearchMasterComponent
  ],
  imports: [
    CommonModule,
    DataDisplayRoutingModule,
    AgGridModule,
    SelectButtonModule,
    HighchartsChartModule,
    FormsModule,
    ButtonModule,
    
  ]
})
export class DataDisplayModule { }
