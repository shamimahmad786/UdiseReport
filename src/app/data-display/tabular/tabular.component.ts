import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColDef, ColumnApi, GridReadyEvent, SideBarDef } from 'ag-grid-community';
import { IOlympicData } from '../../data-display/interface';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-tabular',
  templateUrl: './tabular.component.html',
  styleUrls: ['./tabular.component.scss']
})
export class TabularComponent {
  constructor(private http: HttpClient) { }

  private gridColumnApi!: ColumnApi;

  // public columnDefs: ColDef[] = [
  //   { field: 'athlete', filter: 'agTextColumnFilter', minWidth: 200 },
  //   { field: 'age',enableRowGroup: true },
  //   { field: 'country', minWidth: 180 },
  //   { field: 'year' },
  //   { field: 'date', minWidth: 150 },
  //   { field: 'gold' },
  //   { field: 'silver' },
  //   { field: 'bronze' },
  //   { field: 'total' },
  // ];
  // public defaultColDef: ColDef = {
  //   flex: 1,
  //   minWidth: 100,
  //   // allow every column to be aggregated
  //   enableValue: true,
  //   // allow every column to be grouped
  //   enableRowGroup: true,
  //   // allow every column to be pivoted
  //   enablePivot: true,
  //   sortable: true,
  //   filter: true,
  // };
  // public autoGroupColumnDef: ColDef = {
  //   minWidth: 200,
  // };
  // public rowData!: IOlympicData[];

  // sideBar = {
  //   toolPanels: [
  //     {
  //       id: 'columns',
  //       labelDefault: 'Columns',
  //       labelKey: 'columns',
  //       iconKey: 'columns',
  //       toolPanel: 'agColumnsToolPanel',
  //     },
  //     {
  //       id: 'filters',
  //       labelDefault: 'Filters',
  //       labelKey: 'filters',
  //       iconKey: 'filter',
  //       toolPanel: 'agFiltersToolPanel',
  //     }
  //   ],
  //   defaultToolPanel: 'columns'
  // }

  public columnDefs: ColDef[] = [
    { field: 'country',filter:'agSetColumnFilter'},
    { field: 'year'},
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold', aggFunc: 'sum' },
    { field: 'silver', aggFunc: 'sum' },
    { field: 'bronze', aggFunc: 'sum' },
  ];
 
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 150,
    sortable: true,
    filter: true,
    resizable: true,
  };
  public autoGroupColumnDef: ColDef = {
   // minWidth: 250,
    filter: 'agGroupColumnFilter',
  };
  public sideBar: SideBarDef | string | string[] | boolean | null = 'columns';
  public rowData!: any[];




  onGridReady(params: GridReadyEvent<any>) {
    this.gridColumnApi = params.columnApi;

    this.http
      .get<IOlympicData[]>(
        'https://www.ag-grid.com/example-assets/olympic-winners.json'
      )
      .subscribe((data) => (this.rowData = data));
    

   // params.api.setColumnDefs(this.columnDefs);
   // params.api.setRowData(this.rowData);
   // params.api.setSideBar([])
    // params.api.
  }

}
