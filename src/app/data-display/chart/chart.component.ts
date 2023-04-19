import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { ColDef, ColumnApi, GridReadyEvent, SideBarDef } from 'ag-grid-community';
import { IOlympicData } from '../../data-display/interface';
import 'ag-grid-enterprise';
import { TabularDataService } from '../../service/tabular-data-service.component';
import { SearchMasterComponent } from '../../commonComponent/search-master/search-master.component';
import { ActivatedRoute, Route, Router } from '@angular/router';
import * as Highcharts from "highcharts/highmaps";
import HC_sunburst from 'highcharts/modules/sunburst';
import * as HighchartsExporting from "highcharts/modules/exporting";
import * as HighchartsExportData from "highcharts/modules/export-data";
import { MasterDataService } from 'src/app/service/master-data-service.component';
import _ from 'lodash';
HC_sunburst(Highcharts);
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  splitNameData: any;
  constructor(private tabularDataService: TabularDataService,
    private routerService: Router ,private masterDataService :MasterDataService) {
  }
  locationType: any =0;
  filterConfig: any;
  loader:boolean =false;
  abc: any;
  reportId: any;
  public rowData!: any[];
  datadisplay: any[] = [];
  result: any [] =[];
  data :any [] =[];
  updateddata:any [] =[];
  scondgraphFinalData:any [] =[];
  highcharts1: typeof Highcharts = Highcharts;
  chartOptions1!: Highcharts.Options;
  chartOptions2!: Highcharts.Options;
  graphAllDatasum: any;
  pervalue: any;
  stateList :any []=[];
  reportYear:any;
  yearList:any [] =[];
  reportStateId:any;
  reportDistrictId:any;
  reportBlockId:any;
  stateName:any;
  districtName:any
  blockName:any;
  districtList:any [] =[];
  blockList:any [] = [];

  isHideShowStateSelectDropDown: boolean = false;
  isHideShowDistSelectDropDown: boolean = false;
  isHideShowblckSelectDropDown: boolean = false;
  
  


  public defaultColDef: ColDef = {
    sortable: true,
    resizable: true,
    filter:false
  };
  public autoGroupColumnDef: ColDef = {
    filter: 'agGroupColumnFilter',
  };
  ngOnInit() {
    this.reportId = this.routerService.url.split('/')[3];
    this.masterDataService.fetchYearListReportWise(this.reportId).subscribe((result:any)=>{
      debugger
      this.yearList = result;
      console.log("Year List is " + JSON.stringify(result))
    })
    this.getTabularData(this.reportId);
  }

  icons = {
    menu: ' ',
    filter: ' ' //optional, we have already disabled it above.
}
 

  getLocationType(event: any) {
    this.locationType = event.target.value;
    switch (this.locationType) {
      case "0":
        this.isHideShowStateSelectDropDown = false;
        this.isHideShowDistSelectDropDown = false;
        this.isHideShowblckSelectDropDown = false;
        break;
      case "1":
        this.isHideShowStateSelectDropDown = true;
        this.isHideShowDistSelectDropDown = false;
        this.isHideShowblckSelectDropDown = false;
        break;
      case "2":
        this.isHideShowDistSelectDropDown = true;
        this.isHideShowblckSelectDropDown = false
        break;
      case "3":
        this.isHideShowblckSelectDropDown = true;
        break;

    }
  }


  filterCollapse() {
    // alert("called filter collapse");
    this.abc = "{'shamim':'Y'}" + Math.random();
    sessionStorage.setItem("filterConfig", this.filterConfig);
  }
  getTabularData(mapId: any) {
    debugger
    this.loader=true;
    this.tabularDataService.getReportData(mapId).subscribe((res) => {
      this.loader=false;
    
      console.log(res)
      debugger
      
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
 

     this.showFirstGraph();
    })
  }
    ////////  show  first  graph showing all  data related to  student vs all //////////////////
showFirstGraph()
{
  this.chartOptions1 = {
   
    chart: {
      height: '100%',
    },
    title: {
      text: 'School Category And School Management Wise Enrolment'
    },
    
    credits: {
      enabled: false
    },
     colors: ['#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE',
     '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92'],
    series: [{
      type: 'sunburst',
      colorByPoint: true,
      data: this.updateddata,
      
    }],
  };
}
ngAfterViewInit(): void{
}
  ///////// graph show on click  of first  graph///////////////////////////
  showSecandGraph(event:any)
  {
    console.log(event)
    console.log(this.updateddata)
    this.graphAllDatasum = 0;
    for(let i =0 ; i<this.updateddata.length;i++){
     
      if(this.updateddata[i].column_name!='' && this.updateddata[i].parent!="All" )
      {
       // console.log(this.updateddata[i].value)
        if(this.updateddata[i].value!=undefined)
        {
          this.graphAllDatasum += this.updateddata[i].value;  
        }  
      }
     }
     this.splitNameData='';
     if((event.point.name=="Girls") || (event.point.name=="Boys") )
     {
       //var splitData =event.point.column_name.split("_")
      this.splitNameData=event.point.column_name.replaceAll("_", " ")
      // console.log(splitNameData)
     }
     else{
      console.log(event.point.options.parent)
      for(let i =0 ; i< this.updateddata.length;i++){
        if(this.data[i].id ==event.point.options.parent){
          this.splitNameData=this.data[i].name+" "+event.point.name;
        }
         
       }
     }
    this.pervalue= ((100 * event.point.value) / this.graphAllDatasum).toFixed(2);
    this.scondgraphFinalData=[];
    var finalObj1 = Object.assign({'All':this.graphAllDatasum})
    this.scondgraphFinalData.push(finalObj1)
    this.chartOptions2 = {
      chart : {
      //  plotBorderWidth: null,
       // plotShadow: true
     },
     title : {
        text: '<b>'+event.point.name +': '+ this.pervalue+'%'  
     },
     tooltip : {
       pointFormat:' </b>: {point.y}',
     },
     credits: {
      enabled: false
    },
    
     plotOptions : {
        pie: {
           allowPointSelect: true,
           cursor: 'pointer',
           dataLabels: {
              enabled: true,
              format: '<b>{point.name} </b>: {point.y}<br>',
              style: {
                 color:'#4572A7' 
              }
           },
           showInLegend: true
        }
     },
     series : [{
        type: 'pie',
        name: 'Browser share '+this.pervalue,
       
        data:[
          ["All", this.graphAllDatasum-event.point.value],
          [this.splitNameData, event.point.value],
       ]
     }]
    };
  } 


  getYearId(event:any){
    this.reportYear = event.target.value;
    if(this.locationType == 1){
      this.getStateYearWise(this.reportYear);
    }
  }
  getStateYearWise(year:any) {
    const data = { "yearId": year };
    this.masterDataService.getStateYearWise(data).subscribe((res) => {
debugger
      this.stateList = res.rowValue;

    })
  }

  getDistrictYearWise(event:any) {
    debugger
    this.stateName="";
        let filterData = _.filter(
          this.stateList,
          (item) => {
            return item.state_id == event.target.value;
          }
        );
        this.stateName =filterData[0].state_name;
        const data = { "yearId": this.reportYear, "stateId": this.reportStateId };
        this.masterDataService.getDistrictYearWise(data).subscribe((res) => {
          this.districtList = res.rowValue;
        })
      }

      getBlockYearWise(event:any) {
        debugger
        this.districtName="";
        console.log("District Name " + event.target.value);
        let filterData = _.filter(
          this.districtList,
          (item) => {
            return item.district_id == event.target.value;
          }
        );
        this.districtName = filterData[0].district_name;
        const data = { "yearId": this.reportYear, "stateId": this.reportStateId, "districtId": this.reportDistrictId };
        this.masterDataService.getBlockYearWise(data).subscribe((res) => {
          this.blockList = res.rowValue;
        })
      }

      getBlockName(event:any){
        this.blockName="";
        let filterData = _.filter(
          this.blockList,
          (item) => {
            return item.block_id == event.target.value;
          }
        );
        this.blockName = filterData[0].block_name;
      }
}
