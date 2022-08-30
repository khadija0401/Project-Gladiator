import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-documents-details',
  templateUrl: './documents-details.component.html',
  styleUrls: ['./documents-details.component.css']
})
export class DocumentsDetailsComponent implements OnInit {

  constructor(public authService : AuthService) { }

  displayMsg: string = '';
  isAccountCreated: boolean;

  ngOnInit(): void {
  }

  onDocumentsDetailsSubmit(){
    
          
    console.log(this.documentsDetailsForm.valid); 
    console.log("Submitted!");
    console.log(this.documentsDetailsForm);

    this.authService.DocumentDetails(
      [
        this.documentsDetailsForm.value.applicationid || '',
        this.documentsDetailsForm.value.domcertificate || '',
        this.documentsDetailsForm.value.studentphoto || '',
        this.documentsDetailsForm.value.instituteidcard || '',
        this.documentsDetailsForm.value.previousyearmarksheet || '',
        this.documentsDetailsForm.value.feereceipt || '',
        this.documentsDetailsForm.value.bankpassbook || '',
        this.documentsDetailsForm.value.adharcardup || '',
        this.documentsDetailsForm.value.sscmarksheet || '',
        this.documentsDetailsForm.value.hscmarksheet || '',
        this.documentsDetailsForm.value.incomecertificate || ''
       ]
    ).subscribe((res)=>{
              if(res == 'Success'){
                this.displayMsg = 'Documents Details submitted successfully with your Application ID: '+this.documentsDetailsForm.value.applicationid;
                // alert(this.displayMsg);
                //Call for user if from BackEnd
                this.isAccountCreated = true;
                alert('Redirecting to Student Home Page');

                function scrollToTop() {
                  window.scrollTo(0, 0);
                }
              

                      setTimeout(function(){
                        window.location.href = "http://localhost:4200/home/studenthome";
                     }, 10000);

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

  documentsDetailsForm = new FormGroup({
    applicationid : new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern("[0-9]*")]),    
    domcertificate:new FormControl("", [Validators.required]),
    studentphoto:new FormControl("", [Validators.required]),
    instituteidcard:new FormControl("", [Validators.required]),
    previousyearmarksheet:new FormControl("", [Validators.required]),
    feereceipt:new FormControl("", [Validators.required]),
    bankpassbook:new FormControl("", [Validators.required]),
    adharcardup:new FormControl("", [Validators.required]),
    sscmarksheet:new FormControl("", [Validators.required]),
    hscmarksheet:new FormControl("", [Validators.required]),
    checkbox: new FormControl("", [Validators.required]),
    incomecertificate: new FormControl("", [Validators.required]),
  });

get ApplicationId():FormControl{
  return this.documentsDetailsForm.get("applicationid") as FormControl;
}
  //doc
get Domcertificate():FormControl{
  return this.documentsDetailsForm.get("domcertificate") as FormControl;
}

get Studentphoto():FormControl{
  return this.documentsDetailsForm.get("studentphoto") as FormControl;
}
get Instituteidcard():FormControl{
  return this.documentsDetailsForm.get("instituteidcard") as FormControl;
}
get Incomecertificate():FormControl{
  return this.documentsDetailsForm.get("incomecertificate") as FormControl;
}
get Previousyearmarksheet():FormControl{
  return this.documentsDetailsForm.get("previousyearmarksheet") as FormControl;
}
get Feereceipt():FormControl{
  return this.documentsDetailsForm.get("feereceipt") as FormControl;
}

get Bankpassbook():FormControl{
  return this.documentsDetailsForm.get("bankpassbook") as FormControl;
}
get Adharcardup():FormControl{
  return this.documentsDetailsForm.get("adharcardup") as FormControl;
}
get Sscmarksheet():FormControl{
  return this.documentsDetailsForm.get("sscmarksheet") as FormControl;
}
get Hscmarksheet():FormControl{
  return this.documentsDetailsForm.get("hscmarksheet") as FormControl;
}
get Checkbox():FormControl{
  return this.documentsDetailsForm.get("checkbox") as unknown as FormControl;
}


}
