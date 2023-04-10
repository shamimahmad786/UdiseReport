
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as Highcharts from "highcharts/highmaps";
import HC_sunburst from 'highcharts/modules/sunburst';
import { TabularDataService } from 'src/app/service/tabular-data-service.component';
HC_sunburst(Highcharts);
import 'anychart';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent {
  reportId: any;
  public rowData!: any[];
  datadisplay: any[] = [];
  result: any [] =[];
  loader:boolean=false;
  data :any [] =[];
  updateddata:any [] =[];

highcharts1: typeof Highcharts = Highcharts;

  chartOptions1!: Highcharts.Options;


  ngOnInit() {
    this.reportId = this.routerService.url.split('/')[3];
    this.getTabularData(this.reportId);
  }
  constructor(private tabularDataService: TabularDataService,
    private routerService: Router) {
  }

  getTabularData(mapId: any) {
    this.loader=true;
    this.tabularDataService.getReportData(mapId).subscribe((res) => {
      this.loader=false;
      debugger
      // this.data = [
      //   {"id":"All","parent":"","name":"All","column_name":""},
      //   {"id":"1001","parent":"All","name":"Primary","column_name":""},
      //  {"id":"101","parent":"1001","name":"Govt","column_name":""},
      //    {"id":"10001","name":"Boys","parent":"101","column_name":"primary_boys_govt","value":"68347596"},
      //    {"id":"10002","name":"Girls","parent":"101","column_name":"primary_girls_govt","value":"68967096"},
      //    {"id":"102","parent":"1001","name":"Govt Aided","column_name":""},
      //    {"id":"10003","name":"Boys","parent":"102","column_name":"primary_boys_govt_aided","value":"53884"},
      //    {"id":"10004","name":"Girls","parent":"102","column_name":"primary_girls_govt_aided","value":"5332894"},
      //   ]
    this.data =res.data;
     for(let i =0 ; i<this.data.length;i++){
      if(this.data[i].value !="0"){
        this.updateddata.push(this.data[i]);
      }
      if(this.data[i].value =="0" ||this.data[i].value ==0 ){
       let obj={
          "id":this.data[i].id,
          "parent":this.data[i].parent,
          "name":this.data[i].name,
          "column_name":this.data[i].column_name
        }
        this.updateddata.push(obj)
      }
     }

    this.chartOptions1 = {
      chart: {
        height: '100%'
      },
      title: {
        text: 'World population 2017'
      },
      //colors:['transparent'].concat(Highcharts.getOptions().colors),
    
      series: [{
        type: 'sunburst',
        data: this.updateddata
      }],
    };
      console.log("Test " + JSON.stringify(this.updateddata));
    })
  }

  ngAfterViewInit(): void{

  }
  

  
}
