import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListDataComponent } from './list-data/list-data.component';
// import { HeaderComponentComponent } from './header-component/header-component.component';
// import { FooterComponentComponent } from './footer-component/footer-component.component';
// import { ReportListComponentComponent } from './report-list-component/report-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ListDataComponent,
    // HeaderComponentComponent,
    // FooterComponentComponent
    // ReportListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
