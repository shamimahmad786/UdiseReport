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
    return this.http.post<any>(environment.BASE_URL + "/api/getTabularData", data);
  }



 
  


}
