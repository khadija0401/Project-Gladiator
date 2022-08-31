import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-marks-fees-details',
  templateUrl: './marks-fees-details.component.html',
  styleUrls: ['./marks-fees-details.component.css']
})
export class MarksFeesDetailsComponent implements OnInit {

  constructor(public authService : AuthService) { }

  displayMsg: string = '';
  isAccountCreated: boolean;

  ngOnInit(): void {
  }

  onMarksFeesDetailsSubmit(){
    
          
    console.log(this.marksFeesDetailsForm.valid); 
    console.log("Submitted!");
    console.log(this.marksFeesDetailsForm);

    this.authService.MarksFeesDetails(
      [
        this.marksFeesDetailsForm.value.applicationid || '',
        this.marksFeesDetailsForm.value.sscrollno || '',
        this.marksFeesDetailsForm.value.sscboardName || '',
        this.marksFeesDetailsForm.value.sscpassyear || '',
        this.marksFeesDetailsForm.value.sscclassper || '',
        this.marksFeesDetailsForm.value.hscrollno || '',
        this.marksFeesDetailsForm.value.hscboardName || '',
        this.marksFeesDetailsForm.value.hscpassyear || '',
        this.marksFeesDetailsForm.value.hscclassper || '',
        this.marksFeesDetailsForm.value.admfee || '',
        this.marksFeesDetailsForm.value.tuifee || '',
        this.marksFeesDetailsForm.value.othfee || ''
       ]
    ).subscribe((res)=>{
              if(res == 'Success'){
                this.displayMsg = 'Marks Fees Details submitted successfully with note your Application ID: '+this.marksFeesDetailsForm.value.applicationid;
                // alert(this.displayMsg);
                //Call for user if from BackEnd
                this.isAccountCreated = true;
                alert('Redirecting to Personal Contact Details Form');
                      setTimeout(function(){
                        window.location.href = "http://localhost:4200/registerScholarship/personal-contact-details";
                      }, 5000);
              }
              // else if(res == 'Already Exist'){
              //   this.displayMsg = 'Account Already Exist. Try another Email.';
              //   // alert(this.displayMsg);
              //   this.isAccountCreated = false;
              // }
              // else{
              //   this.displayMsg = 'Something went Wrong.';
              //   this.isAccountCreated = false;
              // }
            });
}

  marksFeesDetailsForm = new FormGroup(
    {
      applicationid : new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern("[0-9]*")]),
      sscrollno:    new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern("[0-9]*")]),
      sscboardName : new FormControl("",[Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z0-9].*")]),
      sscpassyear:    new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern("[0-9]*")]),
      sscclassper :new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern("[0-9]*")]),
      hscrollno:    new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern("[0-9]*")]),
      hscboardName : new FormControl("",[Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z0-9].*")]),
      hscpassyear:    new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern("[0-9]*")]),
      hscclassper :new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern("[0-9%]*")]),
      admfee:new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(7), Validators.pattern("[0-9,.]*")]),
      tuifee:new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(7), Validators.pattern("[0-9,.]*")]),
      othfee:new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(7), Validators.pattern("[0-9,.]*")]),
      
    }
  );
  get ApplicationId():FormControl{
    return this.marksFeesDetailsForm.get("applicationid") as FormControl;
  }
  get Sscrollno():FormControl{
    return this.marksFeesDetailsForm.get("sscrollno") as FormControl;
  }
  get SscboardName():FormControl{
    return this.marksFeesDetailsForm.get("sscboardName") as FormControl;
  }
  get Sscpassyear():FormControl{
    return this.marksFeesDetailsForm.get("sscpassyear") as FormControl;
  }
  get Sscclassper():FormControl{
    return this.marksFeesDetailsForm.get("sscclassper") as FormControl;
  }
  get Hscrollno():FormControl{
    return this.marksFeesDetailsForm.get("hscrollno") as FormControl;
  }
  get HscboardName():FormControl{
    return this.marksFeesDetailsForm.get("hscboardName") as FormControl;
  }
  get Hscpassyear():FormControl{
    return this.marksFeesDetailsForm.get("hscpassyear") as FormControl;
  }
  get Hscclassper():FormControl{
    return this.marksFeesDetailsForm.get("hscclassper") as FormControl;
  }
  get Admfee():FormControl{
    return this.marksFeesDetailsForm.get("admfee") as FormControl;
  }
  get Tuifee():FormControl{
    return this.marksFeesDetailsForm.get("tuifee") as FormControl;
  }
  get Othfee():FormControl{
    return this.marksFeesDetailsForm.get("othfee") as FormControl;
  }

}
