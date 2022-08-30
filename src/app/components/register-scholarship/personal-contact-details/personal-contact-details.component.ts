import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-personal-contact-details',
  templateUrl: './personal-contact-details.component.html',
  styleUrls: ['./personal-contact-details.component.css']
})
export class PersonalContactDetailsComponent implements OnInit {

  constructor(public authService : AuthService) { }

  displayMsg: string = '';
  isAccountCreated: boolean;
  Disabled = ['yes','no','N/A'];
  Marriage=['divorced','single','married'];
  State = ["Andhra Pradesh","Arunachal Pradesh ","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Lakshadweep","National Capital Territory of Delhi","Puducherry"];
  ChooseSchemes = ['National','State'];

  ngOnInit(): void {
  }

  onPersonalContactDetailsSubmit(){
    
          
    console.log(this.personalContactDetailsForm.valid); 
    console.log("Submitted!");
    console.log(this.personalContactDetailsForm);

    this.authService.PersonalContactDetails(
      [
        this.personalContactDetailsForm.value.applicationid || '',
        this.personalContactDetailsForm.value.isDisabled || '',
        this.personalContactDetailsForm.value.typeOfDis || '',
        this.personalContactDetailsForm.value.perdisable || '',
        this.personalContactDetailsForm.value.maritalStatus || '',
        this.personalContactDetailsForm.value.parentsprof || '',
        this.personalContactDetailsForm.value.conSatet || '',
        this.personalContactDetailsForm.value.conDistrict || '',
        this.personalContactDetailsForm.value.conBlock || '',
        this.personalContactDetailsForm.value.houseno || '',
        this.personalContactDetailsForm.value.streetno || '',
        this.personalContactDetailsForm.value.pinno || '',
        this.personalContactDetailsForm.value.choosescheme || ''
       ]
    ).subscribe((res)=>{
              if(res == 'Success'){
                this.displayMsg = 'Personal Contact Details submitted successfully with note your Application ID: '+this.personalContactDetailsForm.value.applicationid;
                // alert(this.displayMsg);
                //Call for user if from BackEnd
                this.isAccountCreated = true;
                alert('Redirecting to Documents Upload Form');
                      setTimeout(function(){
                        window.location.href = "http://localhost:4200/registerScholarship/documents-details";
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

  personalContactDetailsForm = new FormGroup(
    {
      applicationid : new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern("[0-9]*")]),
      isDisabled:new FormControl(""),
      typeOfDis:new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern("[a-zA-Z0-9/]*")]),
      perdisable:new FormControl("", [Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern("[0-9%]*")]),
      maritalStatus:new FormControl(""),
      parentsprof :new FormControl("",[Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z0-9].*")]),
      conSatet:new FormControl(""),
      conDistrict: new FormControl("",[Validators.required, Validators.minLength(2),Validators.maxLength(20), Validators.pattern("[a-zA-Z].*")]),
      conBlock: new FormControl("",[Validators.required, Validators.minLength(2),Validators.maxLength(20), Validators.pattern("[a-zA-Z].*")]),
      houseno :new FormControl("", [Validators.required, Validators.minLength(1), Validators.maxLength(10), Validators.pattern("[0-9.,/]*")]),
      streetno:new FormControl("", [Validators.required, Validators.minLength(1), Validators.maxLength(10), Validators.pattern("[0-9.,/]*")]),
      pinno:new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern("[0-9]*")]),
      choosescheme:new FormControl(""),
    }
  );
  get ApplicationId():FormControl{
    return this.personalContactDetailsForm.get("applicationid") as FormControl;
  }
  get IsDisabled():FormControl{
    return this.personalContactDetailsForm.get("isDisabled") as FormControl;
  }
  get TypeOfDis():FormControl{
    return this.personalContactDetailsForm.get("typeOfDis") as FormControl;
  }
  get Perdisable():FormControl{
    return this.personalContactDetailsForm.get("perdisable") as FormControl;
  }
  get Parentsprof():FormControl{
    return this.personalContactDetailsForm.get("parentsprof") as FormControl;
  }
  get ConDistrict():FormControl{
    return this.personalContactDetailsForm.get("conDistrict") as FormControl;
  }

  get ConBlock():FormControl{
    return this.personalContactDetailsForm.get("conBlock") as FormControl;
  }
  get Houseno():FormControl{
    return this.personalContactDetailsForm.get("houseno") as FormControl;
  }
  get Streetno():FormControl{
    return this.personalContactDetailsForm.get("streetno") as FormControl;
  }
  get Pinno():FormControl{
    return this.personalContactDetailsForm.get("pinno") as FormControl;
  }
  get ChooseScheme():FormControl{
    return this.personalContactDetailsForm.get("choosescheme") as FormControl;
  }

  selectedisDisabled='';
  onSelectedIsDisabled(value:string){
    this.selectedisDisabled;
  }
  selectedMaritalStatus='';
  onSelectedMaritalStatus(value:string){
    this.selectedMaritalStatus;
  }

  selectedconSatet='';
  onSelectedconSatet(value:string){
    this.  selectedconSatet;
  }
  selectedchoosescheme='';
  onSelectedchoosescheme(value:string){
    this.  selectedchoosescheme;
  }
}
