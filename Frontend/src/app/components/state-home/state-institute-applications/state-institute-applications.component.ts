import { Component, OnInit } from '@angular/core';
import { InstituteList } from 'src/app/Models/InstituteList';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-state-institute-applications',
  templateUrl: './state-institute-applications.component.html',
  styleUrls: ['./state-institute-applications.component.css']
})
export class StateInstituteApplicationsComponent implements OnInit {

  // instituteslist: InstituteList={Institute_Category:'', Institute_Name:'', Institute_State:'', Institute_District:'', Institute_Code:'', Dise_Code:'', Location:'', Institute_Type:'', Affiliated_Uni_State:'', Affiliated_Uni_Name:'', Year_Admission_Start:'', Institute_Est_Certificate:'', University_Certificate:'', Address_1:'', Address_2:'', City:'', Address_State:'', Address_District:'', Address_Pincode:'', Principle_Name:'', Principle_MobileNo:'', Status:''};

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
