import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentList } from 'src/app/Models/StudentList';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-institute-home',
  templateUrl: './institute-home.component.html',
  styleUrls: ['./institute-home.component.css']
})
export class InstituteHomeComponent implements OnInit {

  // studentList: StudentList = {
  //        applicationid : 0,
  //        motherName :  '',
  //        religion :  '',
  //        community :  '',
  //        fatherName :  '',
  //        famAnnualIncome :  '',
  //        registerTimestamp :  '',
  //        instituteName :  '',
  //        presentCourse :  '',
  //        presentYear :  '',
  //        modeOfStudy :  '',
  //        universityName :  '',
  //        classStartDate :  '',
  //        previousClass :  '',
  //        previousClassYear :  '',
  //        previousClassPercentage :  '',
  //        isDisabled :  '',
  //        typeOfDisability :  '',
  //        percentageOfDisability :  '',
  //        maritalStatus :  '',
  //        parentsProffession :  '',
  //        contactState :  '',
  //        contactDistrict :  '',
  //        contactBlock :  '',
  //        houseNumber :  '',
  //        streetNumber :  '',
  //        pinNumber :  '',
  //        chooseScheme :  '',
  //        domicileCertificate :  '',
  //        studentPhoto :  '',
  //        instituteIdCard :  '',
  //        previousYearMarksheet :  '',
  //        feeReceipt :  '',
  //        bankPassbook :  '',
  //        aadharCard :  '',
  //        sscMarksheet :  '',
  //        hscMarksheet :  '',
  //        incomeCertificate :  '',
  //        uploadTimestamp :  '',
  //        sscRollNo :  '',
  //        sscBoardName :  '',
  //        sscClassPercentage :  '',
  //        sscPassYear :  '',
  //        hscRollNo :  '',
  //        hscBoardName :  '',
  //        hscPassYear :  '',
  //        hscClassPercentage :  '',
  //        admissionFee :  '',
  //        tuitionFee :  '',
  //        otherFee :  '',
    
  //        state :  '',
  //            district :  '',
  //            name :  '',
  //            dob :  '',
  //            gender :  '',
  //            email :  '',
  //            mobile :  '',
  //            instituteCode : 0,
  //            aadharNo :  '',
  //            bankIfsc :  '',
  //            bankAccNo :  '',
  //            bankName :  ''
  //   }
    id: Number;
  
  studentList: StudentList[] = [] ;
  constructor(private _service : AuthService) { }

  ngOnInit(): void {
    this._service.GetAllStudents().subscribe(data=>
    {
      this.studentList=data;
      console.log(this.studentList);
    });
  }


}
