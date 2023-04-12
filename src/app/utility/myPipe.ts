import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'yesNoCase'
  })
  export class YesNoCase implements PipeTransform {
  
    transform(value: any): any {
      if (value == 1 || value == '1') {
        return "Yes";
      }
      else if (value == 2 || value == '2') {
        return "No";
      }
      else if (value == 9) {
        return "NA"
      }
    }
  }

  @Pipe({
    name: 'socialCatgory'
  })
  export class SocialCategory implements PipeTransform {
  
    transform(value: any): any {
      if (value == 0 || value == '0') {
        return "All";
      }
      else if (value == 1 || value == '1') {
        return "General";
      }
      else if (value == 2 || value == '2') {
        return "SC"

      }  else if (value == 3 || value == '3') {
        return "ST"
      }
      else if (value == 4 || value == '4') {
        return "OBC"
      }
    }
  }

  
  @Pipe({
    name: 'broadmanagementName'
  })
  export class BroadManagementName implements PipeTransform {
  
    transform(value: any): any {
      if (value == 0 || value == '0') {
        return "All";
      }
      else if (value == 1 || value == '1') {
        return "Govt";
      }
      else if (value == 2 || value == '2') {
        return "Government Aided"

      }  else if (value == 3 || value == '3') {
        return "Private Unaided (Recognized)"
      }
      else if (value == 4 || value == '4') {
        return "Other"
      }
    }
  }

  @Pipe({
    name: 'centerManagementName'
  })
  export class CenterManagementName implements PipeTransform {
  
    transform(value: any): any {
      if (value == 0 || value == '0') {
        return "All";
      }
      else if (value == 1 || value == '1') {
        return "Department of Education";
      }
      else if (value == 2 || value == '2') {
        return "Tribal Welfare Department"

      }  else if (value == 3 || value == '3') {
        return "Local body"
      }
      else if (value == 4 || value == '4') {
        return "Other Govt. managed schools"
      }
      else if (value == 5 || value == '5') {
        return "Central Government"
      }
      else if (value == 6 || value == '6') {
        return "Social welfare Department"
      }
      else if (value == 7 || value == '7') {
        return "Ministry of Labor"
      }
      else if (value == 8 || value == '8') {
        return "Kendriya Vidyalaya / Central School"
      }
      else if (value == 9 || value == '9') {
        return "Jawahar Navodaya Vidyalaya"
      }
      else if (value == 10 || value == '10') {
        return "Sainik School"
      }
      else if (value == 11 || value == '11') {
        return "Railway School"
      }
      else if (value == 12 || value == '12') {
        return "Central Tibetan School"
      }
      else if (value == 13 || value == '13') {
        return "Other Central Govt. Schools"
      }
      else if (value == 14 || value == '14') {
        return "Government Aided"
      }
      else if (value == 15 || value == '15') {
        return "Private Unaided (Recognized)"
      }
      else if (value == 16 || value == '16') {
        return "Unrecognized"
      }
      else if (value == 17 || value == '17') {
        return "Madarsa recognized (by Wakf board/Madarsa Board)"
      }
      else if (value == 18 || value == '18') {
        return "Madarsa unrecognized"
      }
    }
  }