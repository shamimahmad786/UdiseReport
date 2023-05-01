import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataDisplayParentComponent } from './data-display-parent/data-display-parent.component';
import {DataDisplayRoutingModule} from './data-display-routing.module';
import { TabularComponent } from './tabular/tabular.component';
import { ChartComponent } from './chart/chart.component'
import { AgGridModule } from 'ag-grid-angular';
import { HighchartsChartModule } from 'highcharts-angular';
import { SearchMasterComponent } from '../commonComponent/search-master/search-master.component';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';
import { MainloaderComponent } from '../commonComponent/mainloader/mainloader.component';
import { BroadManagementName, CenterManagementName, ReportName, SocialCategory, YesNoCase } from '../utility/myPipe';
import { ChartFilterComponent } from '../commonComponent/chart-filter/chart-filter.component';


// import { MatRadioChange } from '@angular/material/radio';



@NgModule({
  declarations: [
    DataDisplayParentComponent,
    TabularComponent,
    ChartComponent,
    SearchMasterComponent,
    MapComponent,
    MainloaderComponent,
    YesNoCase,
    SocialCategory,
    ReportName,
    BroadManagementName,
    CenterManagementName,
    ChartFilterComponent,

    
    
    // TabularDataService
  ],
  imports: [
    CommonModule,
    DataDisplayRoutingModule,
    AgGridModule,
    HighchartsChartModule,
    FormsModule
  ]
})
export class DataDisplayModule { }
