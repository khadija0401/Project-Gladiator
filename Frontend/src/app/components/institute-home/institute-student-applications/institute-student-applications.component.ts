import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentList } from 'src/app/Models/StudentList';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-institute-student-applications',
  templateUrl: './institute-student-applications.component.html',
  styleUrls: ['./institute-student-applications.component.css']
})
export class InstituteStudentApplicationsComponent implements OnInit {

  // student: StudentList = {applicationid : 0, motherName :  '', religion :  '', community :  '', fatherName :  '', famAnnualIncome :  '', registerTimestamp :  '', instituteName :  '', presentCourse :  '', presentYear :  '', modeOfStudy :  '', universityName :  '', classStartDate :  '', previousClass :  '', previousClassYear :  '', previousClassPercentage :  '', isDisabled :  '', typeOfDisability :  '', percentageOfDisability :  '', maritalStatus :  '', parentsProffession :  '', contactState :  '', contactDistrict :  '', contactBlock :  '', houseNumber :  '', streetNumber :  '', pinNumber :  '', chooseScheme :  '', domicileCertificate :  '', studentPhoto :  '', instituteIdCard :  '', previousYearMarksheet :  '', feeReceipt :  '', bankPassbook :  '', aadharCard :  '', sscMarksheet :  '', hscMarksheet :  '', incomeCertificate :  '', uploadTimestamp :  '', sscRollNo :  '', sscBoardName :  '', sscClassPercentage :  '', sscPassYear :  '', hscRollNo :  '', hscBoardName :  '', hscPassYear :  '', hscClassPercentage :  '', admissionFee :  '', tuitionFee :  '', otherFee :  '', state :  '', district :  '', name :  '', dob :  '', gender :  '', email :  '', mobile :  '', instituteCode : 0, aadharNo :  '', bankIfsc :  '', bankAccNo :  '', bankName :  '' };
  
  student: StudentList[] = [];

  id: Number ;
  

  constructor(private _service : AuthService , private activerout:ActivatedRoute) { }
  
  ngOnInit(): void {
    var tid=this.activerout.snapshot.params["id"];
    this.id= Number(tid);
    this._service.GetStudentById(this.id).subscribe(data=>{
      this.student=data;
      console.log(this.student);
    });

  }

  onSubmit(regform :any){
    this._service.UpdateStudentStatus(this.id, regform).subscribe(()=>{
      console.log(regform);
      alert("Updated Successfully!");
      window.location.href='/institute-home';
    });
  }


  // institute:institutedetails={instId:0, institute_Category:'', institute_Name:'', institute_State:'', institute_District:'', institute_Code:'', dise_Code:'', location:'', institute_Type:'', affiliated_Uni_State:'', affiliated_Uni_Name:'', year_Admission_Start:'', institute_Est_Certificate:'', university_Certificate:'', address_1:'', address_2:'', city:'', address_State:'', address_District:'', address_Pincode:'', principle_Name:'', principle_MobileNo:'', status:'', memberSince:''};

  // id: Number | undefined;



  // constructor(private _service : InstituteListService , private activerout:ActivatedRoute) { }

 

  // ngOnInit(): void {

  //   const tid=this.activerout.snapshot.params["id"];

  //   this.id=Number(tid);

  //   this._service.GetInstituteById(this.id).subscribe(data=>{

  //     this.institute=data;

  //     console.log(this.institute);

     

  //   });



// }

}
