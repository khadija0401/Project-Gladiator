import { Component, OnInit } from '@angular/core';
import { InstituteList } from 'src/app/Models/InstituteList';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-institute-applications',
  templateUrl: './institute-applications.component.html',
  styleUrls: ['./institute-applications.component.css']
})
export class InstituteApplicationsComponent implements OnInit {

  // item: institutedetails={instId:0, institute_Category:'', institute_Name:'', institute_State:'', institute_District:'', institute_Code:'', dise_Code:'', location:'', institute_Type:'', affiliated_Uni_State:'', affiliated_Uni_Name:'', year_Admission_Start:'', institute_Est_Certificate:'', university_Certificate:'', address_1:'', address_2:'', city:'', address_State:'', address_District:'', address_Pincode:'', principle_Name:'', principle_MobileNo:'', status:'', memberSince:''};
  id: Number | undefined;

  instituteslist: InstituteList[] = [] ;
  constructor(private _service : AuthService) { }

  ngOnInit(): void {
    this._service.GetInstitutesList().subscribe(data=>
    {
      this.instituteslist=data;
      console.log(this.instituteslist);
    });
  }

}
