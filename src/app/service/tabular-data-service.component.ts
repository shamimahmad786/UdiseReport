import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TabularDataService {

  constructor(private http: HttpClient) { }

  
  getTabularData(data:any)
  {
   // console.log("sfjkdjfnlkjd " + JSON.stringify(data));
   // let data1={"mapId":"1001","reportFor":"1","initYear":2021,"cateoryType":9,"managementType":9,"dependency":{"stateId":"110","paramValue":"as"}};
    return this.http.post<any>(environment.BASE_URL + "/api/getTabularData", data);

  }

  getReportData(data:any){
    let data1={"mapId":"1002","reportFor":"1","initYear":2021,"cateoryType":9,"managementType":9,"dependency":{"stateId":"110","paramValue":"as"}};
    return this.http.post<any>(environment.BASE_URL + "/api/getSunBurstData", data1);
  }



 
  


}
