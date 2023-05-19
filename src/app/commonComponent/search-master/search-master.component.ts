import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MasterDataService } from '../../service/master-data-service.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import * as moment from 'moment';

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
  reportStateId: any = 0;
  reportDistrictId: any =0;
  reportBlockId: any;
  reportParliamentId: any;
  managementValue: any;
  stateName: any = "";
  districtName: any = "";
  blockName: any = "";
  @Input() abcd: any;
  reportId: any;
  selectedIndex: any
  yearList: any;
  @Output() reportJson = new EventEmitter<any>();

  constructor(private http: HttpClient, private masterDataService: MasterDataService,
    private routerService: Router) { }

  ngOnInit(): void {
    this.reportId = this.routerService.url.split('/')[3];
    let year: any = String(new Date().getFullYear());
    this.masterDataService.fetchYearListReportWise(this.reportId).subscribe((result: any) => {
      this.yearList = result;
      result.forEach((item: any) => {
        if(item.reportYear.split('-')[1] == year.substr(2, 3)){
          this.reportYear = item.yearId;
        }
      })
  //    console.log(this.yearList)
  //    console.log("Year List is " + JSON.stringify(result))
    })
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
    const data = { "mapId": this.reportId, "reportFor": this.locationType, "initYear": this.reportYear, "valueType": this.radioTypeValue, "SocialCategoryType": this.socialCategoryType, "managementType": this.managementTypeValue, "managementValue": this.managementValue, "dependency": dependencyData, "stateName": this.stateName, "districtName": this.districtName, "blockName": this.blockName };
    this.reportJson.emit(data);
  }

  getStateYearWise() {
    const data = { "yearId": this.reportYear };
    this.masterDataService.getStateListYearWise(data).subscribe((res) => {
      this.stateList = res.rowValue;

    })
  }

  getDistrictYearWise(event: any) {
    this.stateName = "";
    let filterData = _.filter(
      this.stateList,
      (item) => {
        return item.state_id == event.target.value;
      }
    );
    this.stateName = filterData[0].state_name;
    const data = { "yearId": this.reportYear, "stateId": this.reportStateId };
    this.masterDataService.getDistrictYearWise(data).subscribe((res) => {
      this.districtList = res.rowValue;
    })
  }

  getBlockYearWise(event: any) {
    this.districtName = "";
    console.log("District Name " + event.target.value);
    let filterData = _.filter(
      this.districtList,
      (item) => {
        return item.district_id == event.target.value;
      }
    );
    this.districtName = filterData[0].district_name;
    const data = { "yearId": this.reportYear, "stateId": this.reportStateId, "districtId": this.reportDistrictId };
    this.masterDataService.getBlockYearWise(data).subscribe((res) => {
      this.blockList = res.rowValue;
    })
  }

  getParliamentaryList(event: any) {
    this.blockName = "";
    let filterData = _.filter(
      this.blockList,
      (item) => {
        return item.block_id == event.target.value;
      }
    );
    this.blockName = filterData[0].block_name;
  }

  managementValueType(event: any) {
    this.managementValue = event.target.value;
  }

  getYearId(event: any) {
    this.reportYear = event.target.value;
  }
}
