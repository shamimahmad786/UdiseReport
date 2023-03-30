import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { ColDef, ColumnApi, GridReadyEvent, SideBarDef } from 'ag-grid-community';
import { IOlympicData } from '../../data-display/interface';
import 'ag-grid-enterprise';
import { TabularDataService } from '../../service/tabular-data-service.component';
import { SearchMasterComponent } from '../../commonComponent/search-master/search-master.component';

@Component({
  selector: 'app-tabular',
  templateUrl: './tabular.component.html',
  styleUrls: ['./tabular.component.scss']

})
export class TabularComponent {
  constructor(private http: HttpClient, private tabularDataService: TabularDataService) { }

  private gridColumnApi!: ColumnApi;
  public columnDefs: any[] = [];
  public rowData!: any[];
  locationType: any
  agGridHeader: any[] = [];
  displaySet: any[] = [];
  templateType: any;
  childArray: any[] = [];
  filterConfig: any;
  loader:boolean =false;


  abc: any;

  ngOnInit() {
    sessionStorage.setItem("filterConfig", "A");
    this.getTabularData("1001");

  }

  public defaultColDef: ColDef = {
    sortable: true,
    resizable: true,
  };
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
    // this.loader =true;
    this.tabularDataService.getTabularData(mapId).subscribe((res) => {
      console.log("res--->" + JSON.stringify(res));
      this.loader = false;
      this.rowData = res.rowValue;
      this.displaySet = res.displaySet;
      this.templateType = res.templateType;
      this.filterConfig = res.filterData;
      this.generateHeader(res.columnName);
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
}
