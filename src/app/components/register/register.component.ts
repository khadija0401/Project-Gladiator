import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  selected ="-"

  repeatPass: string = 'none';
  firstname : string | null | undefined
  displayMsg: string = '';
  isAccountCreated: boolean;
  constructor (private authService: AuthService, private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    firstname :  new FormControl("",[Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    lastname : new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    email : new FormControl("", [Validators.required, Validators.email, Validators.pattern("[a-zA-Z].*")]),
    mobile : new FormControl("", [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
    gender : new FormControl("", [Validators.required]),
    pwd : new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    rpwd : new FormControl("")
  });

  registerSubmitted(){
    if(this.PWD.value == this.RPWD.value){
      console.log(this.registerForm.valid); 
      console.log("Submitted!");
      this.repeatPass='none';

      this.authService.
      registerUser([
        this.registerForm.value.firstname || '',
        this.registerForm.value.lastname || '',
        this.registerForm.value.email || '',
        this.registerForm.value.mobile || '',
        this.registerForm.value.gender || '',
        this.registerForm.value.pwd || ''
       ]).
       subscribe((res: any)=>{
        if(res == 'Success'){
          this.displayMsg = 'Account Created Successfully!';
          this.isAccountCreated = true;
        }
        else if(res == 'Already Exist'){
          this.displayMsg = 'Account Already Exist. Try another Email.';
          this.isAccountCreated = false;
        }
        else{
          this.displayMsg = 'Something went Wrong.';
          this.isAccountCreated = false;
        }
      }); //to send request
    }else{
      this.repeatPass = 'inline'
    }
    console.log(this.registerForm);
  }
  get FirstName(): FormControl {
    return this.registerForm.get("firstname") as FormControl;
  }
  get LastName(): FormControl {
    return this.registerForm.get("lastname") as FormControl;
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
  get PWD() : FormControl {
    return this.registerForm.get("pwd") as FormControl;
  }
  get RPWD() : FormControl {
    return this.registerForm.get("rpwd") as FormControl;
  }
  addValue(str:any){
    this.sharedService.updateFname(str);
  }
}
