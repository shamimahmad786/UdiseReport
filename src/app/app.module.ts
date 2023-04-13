import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular/';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabularComponent } from './data-display/tabular/tabular.component';
import { ListDataComponent } from './list-data/list-data.component';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartFilterComponent } from './commonComponent/chart-filter/chart-filter.component';



// import { HeaderComponentComponent } from './header-component/header-component.component';
// import { FooterComponentComponent } from './footer-component/footer-component.component';
// import { ReportListComponentComponent } from './report-list-component/report-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ListDataComponent
    // HeaderComponentComponent,
    // FooterComponentComponent
    // ReportListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule
    // AgGridModule.withComponents([TabularComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
