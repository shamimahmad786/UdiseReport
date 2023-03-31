import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.scss']
})
export class ListDataComponent {

  constructor(private routerService:Router){

  }

  goToReportData(reportId:any){
    
    alert("URL " + `displayData/${reportId}`)
    this.routerService.navigate([`../displayData`])

  }

}
