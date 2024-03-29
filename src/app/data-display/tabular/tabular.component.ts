import { HttpClient } from '@angular/common/http';
import { Component, Output, EventEmitter, Input, ElementRef, ViewChild } from '@angular/core';
import { ColDef, ColumnApi, GridReadyEvent, SideBarDef } from 'ag-grid-community';
import { IOlympicData } from '../../data-display/interface';
import 'ag-grid-enterprise';
import { TabularDataService } from '../../service/tabular-data-service.component';
import { SearchMasterComponent } from '../../commonComponent/search-master/search-master.component';
import { ActivatedRoute, Route, Router } from '@angular/router';
import jsPDF from 'jspdf';
import 'jspdf-autotable'
// declare var jsPDF: any;


@Component({
  selector: 'app-tabular',
  templateUrl: './tabular.component.html',
  styleUrls: ['./tabular.component.scss']

})
export class TabularComponent {
  constructor(private http: HttpClient, private tabularDataService: TabularDataService, private routerService: Router) { }
  @ViewChild('pdfTable', { static: false }) pdfTable!: ElementRef

  private gridColumnApi!: ColumnApi;
  public columnDefs: any;
  public rowData!: any[];
  locationType: any = 0;
  agGridHeader: any[] = [];
  displaySet: any[] = [];
  templateType: any;
  childArray: any[] = [];
  filterConfig: any;
  loader: boolean = false;
  reportId: any;
  dependentData: any;
  abc: any;
  socialCatId: any;
  managementId: any;
  managementTypeId: any;
  stateName: any;
  districtName: any;
  blockName: any;


  ngOnInit() {
    sessionStorage.setItem("filterConfig", "A");
    this.reportId = this.routerService.url.split('/')[3];
    const dependencyData = { 'stateId': 0, 'districtId': 0, 'blockId': 0, 'parliamentId': 0, 'paramValue': 'as' };
    const data = { "mapId": this.reportId, "reportFor": this.locationType, "initYear": "2122", "valueType": 1, "SocialCategoryType": 9, "managementType": 9, "managementValue": 0, "dependency": dependencyData, "stateName": this.stateName };
    this.getTabularData(data);

  }

  public defaultColDef: ColDef = {
    sortable: true,
    resizable: true,
    filter: false
  };
  icons = {
    menu: ' ',
    filter: ' ' //optional, we have already disabled it above.
  }
  public autoGroupColumnDef: ColDef = {
    filter: 'agGroupColumnFilter',
  };



  onGridReady(params: GridReadyEvent<any>) {
    // this.gridColumnApi = params.columnApi;

    // this.http
    //   .get<IOlympicData[]>(
    //     'https://www.ag-grid.com/example-assets/olympic-winners.json'
    //   )
    //   .subscribe((data) => (this.rowData = data));


    // params.api.setColumnDefs(this.columnDefs);
    // params.api.setRowData(this.rowData);
    // params.api.setSideBar([])
    // params.api.
  }

  getLocationType(event: any) {
    this.locationType = event.target.value;
  }

  getTabularData(mapId: any) {
    this.loader = false;
    this.dependentData = JSON.stringify(mapId);

    this.locationType = JSON.parse(this.dependentData).reportFor;
    this.socialCatId = JSON.parse(this.dependentData).SocialCategoryType;
    this.managementTypeId = JSON.parse(this.dependentData).managementType;
    this.managementId = JSON.parse(this.dependentData).managementValue;
    //  this.stateName = JSON.parse(this.dependentData).stateName;
    //  this.districtName = JSON.parse(this.dependentData).districtName;
    //  this.blockName = JSON.parse(this.dependentData).blockName;
    this.stateName = JSON.parse(this.dependentData).stateName == "" ? "All India" : JSON.parse(this.dependentData).stateName;
    this.districtName = JSON.parse(this.dependentData).districtName == "" ? "All District" : JSON.parse(this.dependentData).districtName;
    this.blockName = JSON.parse(this.dependentData).blockName == "" ? "All Block" : JSON.parse(this.dependentData).blockName


    this.tabularDataService.getTabularData(mapId).subscribe((res) => {

      console.log("res--->" + JSON.stringify(res.rowValue));

      this.loader = false;
      this.rowData = res.rowValue;
      this.displaySet = res.displaySet;
      this.templateType = res.templateType;
      this.filterConfig = res.filterData;
      this.columnDefs = res.tableHader;
      console.log(res.tableHader);
      console.log("this.columnDefs--->" + this.columnDefs);
      //  this.generateHeader(res.table);
    })
  }

  generateHeader(data: any) {

    for (let i = 0; i < data.length; i++) {
      var matchCondition = false;
      var colName = data[i];
      if (this.agGridHeader.length == 0 && JSON.parse(JSON.stringify(this.displaySet[i])).parentType == "Y") {
        this.childArray[0] = ({ "field": data[i], "headerName": JSON.parse(JSON.stringify(this.displaySet[i])).columnName, enableValue: true, "width": JSON.parse(JSON.stringify(this.displaySet[i])).width });
        this.agGridHeader[i] = { "headerName": JSON.parse(JSON.stringify(this.displaySet[i])).parentName, "children": this.childArray };

      } else
        if (JSON.parse(JSON.stringify(this.displaySet[i])).parentType == "Y") {

          for (let j = 0; j < this.agGridHeader.length; j++) {
            if (this.agGridHeader[j].headerName == JSON.parse(JSON.stringify(this.displaySet[i])).parentName) {
              this.childArray = this.agGridHeader[j].children;
              var childLength = (this.agGridHeader[j].children).length;
              this.childArray[childLength] = ({ "field": data[i], "headerName": JSON.parse(JSON.stringify(this.displaySet[i])).columnName, enableValue: true, "width": JSON.parse(JSON.stringify(this.displaySet[i])).width });
              this.agGridHeader[j].children = this.childArray;
              matchCondition = true;

            }
          }
          if (!matchCondition) {
            this.childArray = [];
            this.childArray[0] = ({ "field": data[i], "headerName": JSON.parse(JSON.stringify(this.displaySet[i])).columnName, enableValue: true, "width": JSON.parse(JSON.stringify(this.displaySet[i])).width });
            var agGridLength = this.agGridHeader.length;
            this.agGridHeader[agGridLength] = { "headerName": JSON.parse(JSON.stringify(this.displaySet[i])).parentName, "children": this.childArray };
          }

        } else {
          var gridHeaderLength = this.agGridHeader.length;
          // alert("in else-->"+gridHeaderLength)

          this.agGridHeader[gridHeaderLength] = ({ "field": data[i], "headerName": JSON.parse(JSON.stringify(this.displaySet[i])).columnName, enableValue: true, "width": JSON.parse(JSON.stringify(this.displaySet[i])).width });
        }


      // alert("Generated Header loop--->"+JSON.stringify(this.agGridHeader)+"----------"+this.agGridHeader.length);

    }


    // alert("Generated Header--->"+JSON.stringify(this.agGridHeader));
    console.log("Generated Header--->" + JSON.stringify(this.agGridHeader));


    this.columnDefs = this.agGridHeader;
    // alert(JSON.stringify(this.rowData));

  }


  filterCollapse() {
    // alert("called filter collapse");
    this.abc = "{'shamim':'Y'}" + Math.random();
    sessionStorage.setItem("filterConfig", this.filterConfig);
  }


  downloadExlReport() {

  }

  downloadPdfReport() {
    let top_headers: any[] = [];
    let second_header: any[] = [];
    let third_header: any[] = [];
    let body_data: any[] = [];
    console.log(this.columnDefs);
      this.columnDefs.forEach((item: any) => {
        top_headers.push({
          content: item?.headerName,
          colSpan: 8,
          styles: {halign: 'center', fillColor: [22, 160, 133]}
        })
        item?.children.forEach((child: any) => {
          second_header.push({
            content: child?.headerName,
            colSpan: 2,
            styles: {halign: 'center'}
          });
          if(child?.children){
            child?.children.forEach((child2: any) => {
              third_header.push({
                content: child2?.headerName,
                colSpan: 1
              })
            })
          }
        })
      })

      console.log(third_header)
      console.log(second_header)


    // this.rowData.forEach((item: any) => {
    //   let data = item;
    //   body_data.push(data?.cpp_b)
    //   body_data.push(data?.cpp_g)
    //   body_data.push(data?.c1_b)
    //   body_data.push(data?.c1_g)
    //   body_data.push(data?.c2_b)
    //   body_data.push(data?.c2_g)
    //   body_data.push(data?.c3_b)
    //   body_data.push(data?.c3_g)
    //   body_data.push(data?.c4_b)
    //   body_data.push(data?.c4_g)
    //   body_data.push(data?.c5_b)
    //   body_data.push(data?.c5_g)
    //   body_data.push(data?.c6_b)
    //   body_data.push(data?.c6_g)
    //   body_data.push(data?.c7_b)
    //   body_data.push(data?.c7_g)
    //   body_data.push(data?.c8_b)
    //   body_data.push(data?.c8_g)
    //   body_data.push(data?.c9_b)
    //   body_data.push(data?.c9_g)
    //   body_data.push(data?.c10_b)
    //   body_data.push(data?.c10_g)
    //   body_data.push(data?.c11_b)
    //   body_data.push(data?.c11_g)
    //   body_data.push(data?.c12_b)
    //   body_data.push(data?.c12_g)
    // })


    var pdf:any = new jsPDF('l', 'mm', [500, 230])

      pdf.autoTable({
        head: [top_headers, second_header ,third_header],
        body: [this.rowData]
      });
      pdf.output('dataurlnewwindow');
      // pdf.save("table.pdf");
  }
}
