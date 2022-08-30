import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-academic-details',
  templateUrl: './academic-details.component.html',
  styleUrls: ['./academic-details.component.css']
})
export class AcademicDetailsComponent implements OnInit {

  constructor(public authService : AuthService) { }

  displayMsg: string = '';
  isAccountCreated: boolean;
  Modeofstudy = ['Self-Paced','distance lesrnign','normal learning'];

  ngOnInit(): void {
  }

  // onAcademicDetailsSubmit(){
  //   console.log("Submitted Academic Details!");
  //   console.log(this.academicDetailsForm.value);
  // }

  onAcademicDetailsSubmit(){
    alert('Submitted!');
    console.log(this.academicDetailsForm.valid); 
    // console.log("Submitted!");
    console.log(this.academicDetailsForm);

    this.authService.registerAcademicDetails(
      [
        this.academicDetailsForm.value.applicationid || '',
        this.academicDetailsForm.value.instName || '',
        this.academicDetailsForm.value.presentcourse || '',
        this.academicDetailsForm.value.presentyear || '',
        this.academicDetailsForm.value.modeofstudy || '',
        this.academicDetailsForm.value.uniName || '',
        this.academicDetailsForm.value.classstartdate || '',
        this.academicDetailsForm.value.prevclass || '',
        this.academicDetailsForm.value.prevclassyear || '',
        this.academicDetailsForm.value.prevclassper || ''
       ]
    ).subscribe((res)=>{
              if(res == 'Success'){
                console.log("Data sent to BackEnd Successfully!");
                this.displayMsg = 'Academic Details submitted successfully with note your Application ID: '+this.academicDetailsForm.value.applicationid;
                // alert(this.displayMsg);
                //Call for user if from BackEnd
                this.isAccountCreated = true;
                alert('Redirecting to Academic Marks and Fess Details Form');
                      setTimeout(function(){
                        window.location.href = "http://localhost:4200/registerScholarship/marks-fees-details";
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

  academicDetailsForm = new FormGroup(
    {
      applicationid : new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern("[0-9]*")]),
      instName :  new FormControl("",[Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z0-9].*")]),
      presentcourse :  new FormControl("",[Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z0-9].*")]),
      presentyear : new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern("[0-9]*")]),
      modeofstudy:new FormControl("",[Validators.required]),
      uniName :  new FormControl("",[Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
      classstartdate: new FormControl("", [Validators.required]),
      prevclass:new FormControl("",[Validators.required, Validators.minLength(2),Validators.maxLength(20), Validators.pattern("[a-zA-Z0-9].*")]),
      prevclassyear: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern("[0-9]*")]),
      prevclassper:new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(3), Validators.pattern("[0-9%]*")])
    }
  );

  get ApplicationId():FormControl{
    return this.academicDetailsForm.get("applicationid") as FormControl;
  }
  get InstName():FormControl{
    return this.academicDetailsForm.get("instName") as FormControl;
  }
 get Presentcourse():FormControl{
    return this.academicDetailsForm.get("presentcourse") as FormControl;
  }
  get Presentyear():FormControl{
    return this.academicDetailsForm.get("presentyear") as FormControl;
  }
  get ModeOfStudy():FormControl{
    return this.academicDetailsForm.get("modeofstudy") as FormControl;
  }
  get UniName():FormControl{
    return this.academicDetailsForm.get("uniName") as FormControl;
  }
  get Classstartdate():FormControl{
    return this.academicDetailsForm.get("classstartdate") as FormControl;
  }
  get Prevclass():FormControl{
    return this.academicDetailsForm.get("prevclass") as FormControl;
  }
  get Prevclassyear():FormControl{
    return this.academicDetailsForm.get("prevclassyear") as FormControl;
  }
  get Prevclassper():FormControl{
    return this.academicDetailsForm.get("prevclassper") as FormControl;
  }
  selectedModeofstudy='';
  onSelectedModeofStudy(value:string){
    this.selectedModeofstudy;
  }
  scrollToTop() {
    window.scrollTo(0, 0);
}
}
