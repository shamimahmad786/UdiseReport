import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReportListComponentComponent} from './report-list-component.component';
import {ReportListRoutingModule} from './report-list-routing.module';
import { HeaderComponentComponent } from '../header-component/header-component.component';
import { FooterComponentComponent } from '../footer-component/footer-component.component';

@NgModule({
  declarations: [
    ReportListComponentComponent,
    HeaderComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    CommonModule,
    ReportListRoutingModule
  ]
})
export class ReportListModule { }
