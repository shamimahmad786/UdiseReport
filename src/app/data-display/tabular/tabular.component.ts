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
  locationType:any

  ngOnInit() {
    alert("called");
  }


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

  getLocationType(event:any){
    this.locationType = event.target.value;
  }

}
