import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MasterDataService {

  constructor(private http: HttpClient) { }

  
  getStateYearWise(data:any)
  {
    return this.http.post<any>(environment.BASE_URL + "/api/master/getStateYearWise", data);
  }

  getDistrictYearWise(data:any){
    return this.http.post<any>(environment.BASE_URL + "/api/master/getDistrictYearWise", data);
  }

  getBlockYearWise(data:any){
    return this.http.post<any>(environment.BASE_URL + "/api/master/getBlockYearWise", data);
  }

  fetchYearListReportWise(reportId:any){
    return this.http.get<any>(environment.BASE_URL + "/api/master/yearListReportWise/"+reportId);
  }



}
