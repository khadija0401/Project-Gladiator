import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/Models/user';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Stateofdomicile = ["Andhra Pradesh","Arunachal Pradesh ","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Lakshadweep","National Capital Territory of Delhi","Puducherry"];
  //districts=[];
  Gender1 = ["Male","Female","Transgender"];

  selectedState='';
  onSelectedState(value:string){
    this.selectedState
  }

  selectedGender='';
  onSelectedGender(value:string){
    this.selectedGender
  }

  // get f() { return this.registerForm.controls; }

  repeatPass: string = 'none';
  firstname : string | null | undefined
  displayMsg: string = '';
  isAccountCreated: boolean;
  constructor (private authService: AuthService, private sharedService: SharedService, public formBuilder: FormBuilder) { }

  registerForm = new FormGroup({
    applicationid : new FormControl("", [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(4), Validators.maxLength(4)]),
    state : new FormControl("",[Validators.required]),
    district :  new FormControl("",[Validators.required]),
    name : new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    dob : new FormControl("", [Validators.required]),
    email : new FormControl("", [Validators.required, Validators.email, Validators.pattern("[a-zA-Z].*")]),
    mobile : new FormControl("", [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
    gender : new FormControl("", [Validators.required]),
    institutecode : new FormControl("", [Validators.required, Validators.pattern("[0-9]*")]),
    aadharno :  new FormControl("", [Validators.required, Validators.pattern("[0-9]*"), Validators.maxLength(12), Validators.minLength(12)]),
    bankifsc: new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z0-9].*")]),
    bankaccno : new FormControl("", [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(11), Validators.maxLength(11)]),
    bankname : new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z].*")]),
    passwordset : new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    confirmpasswordset : new FormControl("", [Validators.required])
    // flexCheckChecked : new FormControl("", [Validators.required])
  });

  ngOnInit(): void {
  //   this.registerForm = this.formBuilder.group({
  //     acceptTerms: [false, Validators.requiredTrue]
  // });
  }

  registerSubmit(){
    
    if(this.PasswordSet.value == this.ConfirmPasswordSet.value){
          // alert("Form is Submitted!");
          console.log(this.registerForm.valid); 
          console.log("Submitted!");
          console.log(this.registerForm);
          this.repeatPass='none';

          this.authService.regUser(
            [
              this.registerForm.value.applicationid || '',
              this.registerForm.value.state || '',
              this.registerForm.value.district || '',
              this.registerForm.value.name || '',
              this.registerForm.value.dob || '',
              this.registerForm.value.gender || '',
              this.registerForm.value.mobile || '',
              this.registerForm.value.email || '',
              this.registerForm.value.institutecode || '',
              this.registerForm.value.aadharno || '',
              this.registerForm.value.bankifsc || '',
              this.registerForm.value.bankaccno || '',
              this.registerForm.value.bankname || '',
              this.registerForm.value.passwordset || ''
             ]
          ).subscribe((res)=>{
            // console.log((res: any)=>{
                    if(res == 'Success'){
                      this.displayMsg = 'Account Created Successfully! Please note your Application ID: '+this.registerForm.value.applicationid;
                      // alert(this.displayMsg);
                      //Call for user if from BackEnd
                      this.isAccountCreated = true;
                      alert('Redirecting to Home Page');
                      setTimeout(function(){
                        window.location.href = "http://localhost:4200/home";
                     }, 10000);
                    }
                    else if(res == 'Already Exist'){
                      this.displayMsg = 'Account Already Exist. Try another Email.';
                      // alert(this.displayMsg);
                      this.isAccountCreated = false;
                    }
                    else{
                      this.displayMsg = 'Something went Wrong.';
                      this.isAccountCreated = false;
                    }
                  });
    }
    else{
      this.repeatPass='inline';
    }
  }


  get UserId(): FormControl {
    return this.registerForm.get("applicationid") as FormControl;
  }
  get State(): FormControl {
    return this.registerForm.get("state") as FormControl;
  }
  get District(): FormControl {
    return this.registerForm.get("district") as FormControl;
  }
  get Name() : FormControl {
    return this.registerForm.get("name") as FormControl;
  }
  get Dob() : FormControl {
    return this.registerForm.get("dob") as FormControl;
  }
  get Email() : FormControl {
    return this.registerForm.get("email") as FormControl;
  }
  get Mobile() : FormControl {
    return this.registerForm.get("mobile") as FormControl;
  }
  get Gender() : FormControl {
    return this.registerForm.get("gender") as FormControl;
  }
  get InstituteCode(): FormControl {
    return this.registerForm.get("institutecode") as FormControl;
  }
  get AadharNo(): FormControl {
    return this.registerForm.get("aadharno") as FormControl;
  }
  get BankIfsc() : FormControl {
    return this.registerForm.get("bankifsc") as FormControl;
  }
  get BankAccNo() : FormControl {
    return this.registerForm.get("bankaccno") as FormControl;
  }
  get BankName() : FormControl {
    return this.registerForm.get("bankname") as FormControl;
  }
  get PasswordSet() : FormControl {
    return this.registerForm.get("passwordset") as FormControl;
  }
  get ConfirmPasswordSet() : FormControl {
    return this.registerForm.get("confirmpasswordset") as FormControl;
  }
  // get FlexCheckChecked() : FormControl {
  //   return this.registerForm.get("flexCheckChecked") as FormControl;
  // }
  // addValue(str:any){
  //   this.sharedService.updateFname(str);
  // }
}
