
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
//   data = [
//   {parent:'',name:"Enrolement",id:'0.0'},
//   {parent:'0.0',name:"Primary",id:'1.1'},
//   {parent:'1.1',name:"Govt",id:'1.2'},
//   {parent:'1.2',name:"Boys",id:'2.1'},
//   {parent:'1.2',name:"Girls",id:'2.1'}
// ]
//data = [{"parent":1,"name":"Primary","id":0},{"parent":1,"name":"Primary","id":1},{"parent":1,"name":"Primary","id":2}]
  // data=[
  //   {"parent":'',"name":"Enrolement","id":'0'},
  //   {"parent":'0',"name":"Primary","id":'1'},
  //   {"parent":'1',"name":"Govt","id":'2'},
  //   {"parent":'2',"name":"Boys","id":'3.1',value:120},
  //   {"parent":'2',"name":"Girls","id":'4.1',value:120}]

    data=[
      {"parent":'',"name":"All","column_name":'',"id":'0',},
      {"parent":'0',"name":"Primary","column_name":'',"id":'1001'},
      {"parent":'1001',"name":"Govt","column_name":'x',"id":'101',value:70 ,color:'red',width:200},
      {"parent":'1001',"name":"GovtAided","column_name":'y',"id":'102',value:50} ,
      {"parent":'1001',"name":"tes","column_name":'z',"id":'101',value:90}]

  // data = [
  //   {"parent":'',"name":"Enrolment","id":'0'},
  //   {"parent":'0',"name":"Primary","id":'1'},
  //   {"parent":'1',"name":"Govt","id":'2'},
  //   {"parent":'1',"name":"Govt","id":'3'},
  //   {"parent":'1',"name":"Govt","id":'4'},
  //   {"parent":'1',"name":"Govt","id":'5'},
  //   {"parent":'2',"name":"Boys","id":'2',"value":1202},
  //   {"parent":'2',"name":"Girls","id":'3',"value":1202}]

  ngOnInit() {
    this.reportId = this.routerService.url.split('/')[3];
    this.getTabularData(this.reportId);
  }
  constructor(private tabularDataService: TabularDataService,
    private routerService: Router) {
  }

  getTabularData(mapId: any) {

    this.tabularDataService.getReportData(mapId).subscribe((res) => {
      console.log("Header is " + JSON.stringify(res.tableHader1) + "============ Length is " );
      this.result = res.tableHader;
    })
  }

  ngAfterViewInit(): void{

  }
  highcharts1: typeof Highcharts = Highcharts;

  chartOptions1: Highcharts.Options = <any>{
    chart: {
      height: '100%'
    },
    title: {
      text: 'World population 2017'
    },
    //colors:['transparent'].concat(Highcharts.getOptions().colors),

    series: [{
      type: 'sunburst',
      data: this.data
    }],
  };
}
