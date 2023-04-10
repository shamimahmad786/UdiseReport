import { Component, Input,Output,EventEmitter } from '@angular/core';
import {MasterDataService} from '../../service/master-data-service.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-master',
  templateUrl: './search-master.component.html',
  styleUrls: ['./search-master.component.scss']
})
export class SearchMasterComponent {

   stateList:any=[]; 
   districtList:any=[];
   blockList:any=[];
   @Input() locationType:any;
   isDisableSelectDistDropDown:boolean=true;
   isDisableSelectBlockDropDown:boolean=true; 
   isHideShowStateSelectDropDown:boolean=false; 
   isHideShowDistSelectDropDown:boolean=false; 
   isHideShowblckSelectDropDown:boolean=false;
   isHideShowParlSelectDropDown:boolean=false; 
   managementDisplayType:any;
   reportYear:any=2021;
   radioTypeValue:any;
   socialCategoryType:any=9;
   managementTypeValue:any=9;
   reportStateId:any;
   reportDistrictId:any;
   reportBlockId:any;
   reportParliamentId:any;
   managementValue:any;
   @Input() abcd: any;
   reportId:any;
   @Output() reportJson = new EventEmitter<any>();
   constructor(private http: HttpClient, private masterDataService:MasterDataService ,private routerService:Router) { }
      
ngOnInit(): void
    {

this.reportId = this.routerService.url.split('/')[3];

      // this.managementDisplayType=0;
      // this.reportYear="2021";
      // this.radioTypeValue=1;
      // this.categorytype;
      // this.managementTypeValue=0;
      // this.managementValue=1;

      // alert("filter--->"+JSON.stringify(sessionStorage.getItem("filterConfig")));

      // this.stateList=
      // {
      //   "columnName": ["state_name", "udise_state_code"],
      //   "rowValue": [{
      //     "state_name": "Andaman & Nicobar Islands",
      //     "udise_state_code": "35"
      //   }, {
      //     "state_name": "Andhra Pradesh",
      //     "udise_state_code": "28"
      //   }, {
      //     "state_name": "Arunachal Pradesh",
      //     "udise_state_code": "12"
      //   }, {
      //     "state_name": "Assam",
      //     "udise_state_code": "18"
      //   }, {
      //     "state_name": "Bihar",
      //     "udise_state_code": "110"
      //   }, {
      //     "state_name": "Chandigarh",
      //     "udise_state_code": "04"
      //   }, {
      //     "state_name": "Chhattisgarh",
      //     "udise_state_code": "22"
      //   }, {
      //     "state_name": "Dadra & Nagar Haveli",
      //     "udise_state_code": "26"
      //   }, {
      //     "state_name": "Daman & Diu",
      //     "udise_state_code": "25"
      //   }, {
      //     "state_name": "Delhi",
      //     "udise_state_code": "07"
      //   }, {
      //     "state_name": "Goa",
      //     "udise_state_code": "30"
      //   }, {
      //     "state_name": "Gujarat",
      //     "udise_state_code": "24"
      //   }, {
      //     "state_name": "Haryana",
      //     "udise_state_code": "06"
      //   }, {
      //     "state_name": "Himachal Pradesh",
      //     "udise_state_code": "02"
      //   }, {
      //     "state_name": "Jammu & Kashmir",
      //     "udise_state_code": "01"
      //   }, {
      //     "state_name": "Jharkhand",
      //     "udise_state_code": "20"
      //   }, {
      //     "state_name": "Karnataka",
      //     "udise_state_code": "29"
      //   }, {
      //     "state_name": "Kerala",
      //     "udise_state_code": "32"
      //   }, {
      //     "state_name": "Ladakh",
      //     "udise_state_code": "37"
      //   }, {
      //     "state_name": "Lakshadweep",
      //     "udise_state_code": "31"
      //   }, {
      //     "state_name": "Madhya Pradesh",
      //     "udise_state_code": "23"
      //   }, {
      //     "state_name": "Maharashtra",
      //     "udise_state_code": "27"
      //   }, {
      //     "state_name": "Manipur",
      //     "udise_state_code": "14"
      //   }, {
      //     "state_name": "Meghalaya",
      //     "udise_state_code": "17"
      //   }, {
      //     "state_name": "Mizoram",
      //     "udise_state_code": "15"
      //   }, {
      //     "state_name": "Nagaland",
      //     "udise_state_code": "13"
      //   }, {
      //     "state_name": "Odisha",
      //     "udise_state_code": "21"
      //   }, {
      //     "state_name": "Puducherry",
      //     "udise_state_code": "34"
      //   }, {
      //     "state_name": "Punjab",
      //     "udise_state_code": "03"
      //   }, {
      //     "state_name": "Rajasthan",
      //     "udise_state_code": "08"
      //   }, {
      //     "state_name": "Sikkim",
      //     "udise_state_code": "11"
      //   }, {
      //     "state_name": "Tamil Nadu",
      //     "udise_state_code": "33"
      //   }, {
      //     "state_name": "Telangana",
      //     "udise_state_code": "36"
      //   }, {
      //     "state_name": "Tripura",
      //     "udise_state_code": "16"
      //   }, {
      //     "state_name": "Uttarakhand",
      //     "udise_state_code": "05"
      //   }, {
      //     "state_name": "Uttar Pradesh",
      //     "udise_state_code": "09"
      //   }, {
      //     "state_name": "West Bengal",
      //     "udise_state_code": "19"
      //   }],
      //   "staticFilter": null,
      //   "columnView": null,
      //   "columnDataType": null,
      //   "msData": null,
      //   "status": "0",
      //   "errorMessage": null,
      //   "jsonString": null,
      //   "yearList": [],
      //   "yearListMap1": [],
      //   "yearListMap": []
      // }


    }



  ngOnChanges(){
    this.isHideShowStateSelectDropDown=false;
    this.isHideShowDistSelectDropDown=false;
    this.isHideShowblckSelectDropDown=false;
    this.isHideShowParlSelectDropDown=false;

    if(this.locationType>0){
   this.getStateYearWise();
    }

    switch(this.locationType){
      case "0":
        this.isHideShowStateSelectDropDown=false;
        this.isHideShowDistSelectDropDown=false;
        this.isHideShowblckSelectDropDown=false;
        this.isHideShowParlSelectDropDown=false;
        break;
      case "1":
        this.isHideShowStateSelectDropDown=true;
        this.isHideShowDistSelectDropDown=false;
        this.isHideShowblckSelectDropDown=false;
        break;
        case "2":
        this.isHideShowDistSelectDropDown=true;
        this.isHideShowblckSelectDropDown=false
        break;
        case "3":
          this.isHideShowblckSelectDropDown=true;
          this.isHideShowParlSelectDropDown=false
          break;
       case "4":
        this.isHideShowParlSelectDropDown=true;
        break;
    }

    console.log('data coming', this.abcd)

    if(this.abcd){
      this.filterConfiguration(this.abcd);
    }
  }

  filterConfiguration(filterData:any){

  }

  managementType(event:any){
    this.managementDisplayType=event.target.value;
  }

  getFilteredData(){

    const dependencyData={'stateId':this.reportStateId,'districtId':this.reportDistrictId,'blockId':this.reportBlockId,'parliamentId':this.reportParliamentId,'paramValue':'as'};
    const data={"mapId":this.reportId,"reportFor":this.locationType,"initYear":this.reportYear,"valueType":this.radioTypeValue,"SocialCategoryType":this.socialCategoryType,"managementType":this.managementTypeValue,"managementValue":this.managementValue,"dependency":dependencyData};
    this.reportJson.emit(data);
  }

  getStateYearWise(){
    const data={"yearId":this.reportYear};
    this.masterDataService.getStateYearWise(data).subscribe((res) => {

    this.stateList=res.rowValue;

          })
  }

  getDistrictYearWise(){
    const data={"yearId":this.reportYear,"stateId":this.reportStateId};
    this.masterDataService.getDistrictYearWise(data).subscribe((res) => {
      // alert("get district"+JSON.stringify(res));
      this.districtList=res.rowValue;
          })
  }

  getBlockYearWise(){
    const data={"yearId":this.reportYear,"stateId":this.reportStateId,"districtId":this.reportDistrictId};
    this.masterDataService.getBlockYearWise(data).subscribe((res) => {
      // alert("get block"+JSON.stringify(res));
      this.blockList=res.rowValue;
          })
  }

  managementValueType(event:any){
    this.managementValue=event.target.value;
  }
}
