import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MasterDataService } from '../../service/master-data-service.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-master',
  templateUrl: './search-master.component.html',
  styleUrls: ['./search-master.component.scss']
})
export class SearchMasterComponent {

  stateList: any = [];
  districtList: any = [];
  blockList: any = [];
  @Input() locationType: any;
  isDisableSelectDistDropDown: boolean = true;
  isDisableSelectBlockDropDown: boolean = true;
  isHideShowStateSelectDropDown: boolean = false;
  isHideShowDistSelectDropDown: boolean = false;
  isHideShowblckSelectDropDown: boolean = false;
  isHideShowParlSelectDropDown: boolean = false;
  managementDisplayType: any;
  reportYear: any = 2021;
  radioTypeValue: any;
  socialCategoryType: any = 9;
  managementTypeValue: any = 9;
  reportStateId: any;
  reportDistrictId: any;
  reportBlockId: any;
  reportParliamentId: any;
  managementValue: any;
  @Input() abcd: any;
  reportId: any;
  @Output() reportJson = new EventEmitter<any>();
  constructor(private http: HttpClient, private masterDataService: MasterDataService, private routerService: Router) { }

  ngOnInit(): void {
    this.reportId = this.routerService.url.split('/')[3];
  }



  ngOnChanges() {
    this.isHideShowStateSelectDropDown = false;
    this.isHideShowDistSelectDropDown = false;
    this.isHideShowblckSelectDropDown = false;
    this.isHideShowParlSelectDropDown = false;

    if (this.locationType > 0) {
      this.getStateYearWise();
    }

    switch (this.locationType) {
      case "0":
        this.isHideShowStateSelectDropDown = false;
        this.isHideShowDistSelectDropDown = false;
        this.isHideShowblckSelectDropDown = false;
        this.isHideShowParlSelectDropDown = false;
        break;
      case "1":
        this.isHideShowStateSelectDropDown = true;
        this.isHideShowDistSelectDropDown = false;
        this.isHideShowblckSelectDropDown = false;
        break;
      case "2":
        this.isHideShowDistSelectDropDown = true;
        this.isHideShowblckSelectDropDown = false
        break;
      case "3":
        this.isHideShowblckSelectDropDown = true;
        this.isHideShowParlSelectDropDown = false
        break;
      case "4":
        this.isHideShowParlSelectDropDown = true;
        break;
    }

    console.log('data coming', this.abcd)

    if (this.abcd) {
      this.filterConfiguration(this.abcd);
    }
  }

  filterConfiguration(filterData: any) {

  }

  managementType(event: any) {
    this.managementDisplayType = event.target.value;
  }

  getFilteredData() {

    const dependencyData = { 'stateId': this.reportStateId, 'districtId': this.reportDistrictId, 'blockId': this.reportBlockId, 'parliamentId': this.reportParliamentId, 'paramValue': 'as' };
    const data = { "mapId": this.reportId, "reportFor": this.locationType, "initYear": this.reportYear, "valueType": this.radioTypeValue, "SocialCategoryType": this.socialCategoryType, "managementType": this.managementTypeValue, "managementValue": this.managementValue, "dependency": dependencyData };
    this.reportJson.emit(data);
  }

  getStateYearWise() {
    const data = { "yearId": this.reportYear };
    this.masterDataService.getStateYearWise(data).subscribe((res) => {

      this.stateList = res.rowValue;

    })
  }

  getDistrictYearWise() {
    const data = { "yearId": this.reportYear, "stateId": this.reportStateId };
    this.masterDataService.getDistrictYearWise(data).subscribe((res) => {
      this.districtList = res.rowValue;
    })
  }

  getBlockYearWise() {
    debugger
    const data = { "yearId": this.reportYear, "stateId": this.reportStateId, "districtId": this.reportDistrictId };
    this.masterDataService.getBlockYearWise(data).subscribe((res) => {
      this.blockList = res.rowValue;
    })
  }

  managementValueType(event: any) {
    this.managementValue = event.target.value;
  }
}
