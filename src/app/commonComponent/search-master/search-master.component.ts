import { Component, Input } from '@angular/core';
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: 'app-search-master',
  templateUrl: './search-master.component.html',
  styleUrls: ['./search-master.component.scss']
})
export class SearchMasterComponent {

   stateList:any=[]; 
   @Input() locationType:any;
   isDisableSelectDistDropDown:boolean=true;
   isDisableSelectBlockDropDown:boolean=true; 
   isHideShowStateSelectDropDown:boolean=false; 
   isHideShowDistSelectDropDown:boolean=false; 
   isHideShowblckSelectDropDown:boolean=false;
   isHideShowParlSelectDropDown:boolean=false; 

      
ngOnInit(): void
    {
      this.stateList=
      {
        "columnName": ["state_name", "udise_state_code"],
        "rowValue": [{
          "state_name": "Andaman & Nicobar Islands",
          "udise_state_code": "35"
        }, {
          "state_name": "Andhra Pradesh",
          "udise_state_code": "28"
        }, {
          "state_name": "Arunachal Pradesh",
          "udise_state_code": "12"
        }, {
          "state_name": "Assam",
          "udise_state_code": "18"
        }, {
          "state_name": "Bihar",
          "udise_state_code": "10"
        }, {
          "state_name": "Chandigarh",
          "udise_state_code": "04"
        }, {
          "state_name": "Chhattisgarh",
          "udise_state_code": "22"
        }, {
          "state_name": "Dadra & Nagar Haveli",
          "udise_state_code": "26"
        }, {
          "state_name": "Daman & Diu",
          "udise_state_code": "25"
        }, {
          "state_name": "Delhi",
          "udise_state_code": "07"
        }, {
          "state_name": "Goa",
          "udise_state_code": "30"
        }, {
          "state_name": "Gujarat",
          "udise_state_code": "24"
        }, {
          "state_name": "Haryana",
          "udise_state_code": "06"
        }, {
          "state_name": "Himachal Pradesh",
          "udise_state_code": "02"
        }, {
          "state_name": "Jammu & Kashmir",
          "udise_state_code": "01"
        }, {
          "state_name": "Jharkhand",
          "udise_state_code": "20"
        }, {
          "state_name": "Karnataka",
          "udise_state_code": "29"
        }, {
          "state_name": "Kerala",
          "udise_state_code": "32"
        }, {
          "state_name": "Ladakh",
          "udise_state_code": "37"
        }, {
          "state_name": "Lakshadweep",
          "udise_state_code": "31"
        }, {
          "state_name": "Madhya Pradesh",
          "udise_state_code": "23"
        }, {
          "state_name": "Maharashtra",
          "udise_state_code": "27"
        }, {
          "state_name": "Manipur",
          "udise_state_code": "14"
        }, {
          "state_name": "Meghalaya",
          "udise_state_code": "17"
        }, {
          "state_name": "Mizoram",
          "udise_state_code": "15"
        }, {
          "state_name": "Nagaland",
          "udise_state_code": "13"
        }, {
          "state_name": "Odisha",
          "udise_state_code": "21"
        }, {
          "state_name": "Puducherry",
          "udise_state_code": "34"
        }, {
          "state_name": "Punjab",
          "udise_state_code": "03"
        }, {
          "state_name": "Rajasthan",
          "udise_state_code": "08"
        }, {
          "state_name": "Sikkim",
          "udise_state_code": "11"
        }, {
          "state_name": "Tamil Nadu",
          "udise_state_code": "33"
        }, {
          "state_name": "Telangana",
          "udise_state_code": "36"
        }, {
          "state_name": "Tripura",
          "udise_state_code": "16"
        }, {
          "state_name": "Uttarakhand",
          "udise_state_code": "05"
        }, {
          "state_name": "Uttar Pradesh",
          "udise_state_code": "09"
        }, {
          "state_name": "West Bengal",
          "udise_state_code": "19"
        }],
        "staticFilter": null,
        "columnView": null,
        "columnDataType": null,
        "msData": null,
        "status": "0",
        "errorMessage": null,
        "jsonString": null,
        "yearList": [],
        "yearListMap1": [],
        "yearListMap": []
      }


    }



  ngOnChanges(){
    debugger
    switch(this.locationType){
      case "1":
        this.isHideShowStateSelectDropDown=true;
        this.isHideShowDistSelectDropDown=false;
        this.isHideShowblckSelectDropDown=false;
        break;
        case "2":
        this.isHideShowDistSelectDropDown=true;
        this.isHideShowblckSelectDropDown=false;
        break;
        case "3":
          this.isHideShowblckSelectDropDown=true;
          this.isHideShowParlSelectDropDown=false
          break;
          case "4":
            this.isHideShowParlSelectDropDown=true;
            break;
    }

  }

}
