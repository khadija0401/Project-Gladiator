import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstituteList } from 'src/app/Models/InstituteList';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-view-institute-applications',
  templateUrl: './view-institute-applications.component.html',
  styleUrls: ['./view-institute-applications.component.css']
})
export class ViewInstituteApplicationsComponent implements OnInit {

  institute:InstituteList={institute_Category:'', institute_Name:'', institute_State:'', institute_District:'', institute_Code:0, dise_Code:'', location:'', institute_Type:'', affiliated_Uni_State:'', affiliated_Uni_Name:'', year_Admission_Start:'', institute_Est_Certificate:'', university_Certificate:'', address_1:'', address_2:'', city:'', address_State:'', address_District:'', address_Pincode:'', principle_Name:'', principle_MobileNo:'', status:''};
  id: Number;

  constructor(private _service : AuthService , private activerout:ActivatedRoute) { }
  
  ngOnInit(): void {
    var tid=this.activerout.snapshot.params["id"];
    this.id= Number(tid);
    this._service.GetInstituteById(this.id).subscribe(data=>{
      this.institute=data;
      console.log(this.institute);
      
    });

  }

  onSubmit(regform :any){
    this._service.UpdateInstituteStatus(this.id, regform).subscribe(()=>{
      console.log(regform);
      alert("Accepted");
      window.location.href='/stateinstituteapplications';
    });
  }

}
