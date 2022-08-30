import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InstituteModelInterface } from 'src/app/Models/InstituteModel';


@Component({
  selector: 'app-institute-register',
  templateUrl: './institute-register.component.html',
  styleUrls: ['./institute-register.component.css']
})
export class InstituteRegisterComponent implements OnInit {

  repeatPass:string='none';
  displayMsg:string='';
  isAccountCreated:boolean=false;

constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }



  instituteCategory = ['Research institutes','Institute directors','Educational institutions','Legal research institutes'];
  State = ["Andhra Pradesh","Arunachal Pradesh ","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Lakshadweep","National Capital Territory of Delhi","Puducherry"];
  InstituteType=['Institute of Engineering / Technology','Institute of Medical Education','Institute of Management','Distance Learning Institute','Fashion Designing Institute','Linguistic Institute','Film and Television Institute'];
  UniNames = ['Acharya Nagarjuna University','Andhra Kesari University','Andhra University','Mumbai University','Jadavpur University'];

selectedInstitutecategory='';
onSelectedInstitutecategory(value:string){
  this.selectedInstitutecategory;
}


  selectedState='';
  onSelectedState(value:string){
  this.selectedState;
}
selectedAffUni='';
onSelectedAffUni(value:string){
  this.selectedAffUni;
}
selectedaffUniState='';
onSelectedAffUniState(value:string){
  this.selectedaffUniState;
}
selectedAddState='';
onSelectedAddState(value:string){
  this.selectedAddState;
}

  registerForm = new FormGroup({
   insCat: new FormControl("",[Validators.required]),
   instName :  new FormControl("",[Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z0-9].*")]),
   state: new FormControl("",[Validators.required]),
   district:new FormControl("",[Validators.required, Validators.minLength(2),Validators.maxLength(20), Validators.pattern("[a-zA-Z0-9].*")]),
   institutecode : new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern("[0-9]*")]),
   disecode : new FormControl("", [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern("[0-9]*")]),
   location:new FormControl("", [Validators.required]),
   affUni:new FormControl("",[Validators.required]),
   affUnistate:new FormControl("",[Validators.required]),
   affUniName :  new FormControl("",[Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
   yearAdStart : new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern("[0-9]*")]),
   passwordset : new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
   confirmpasswordset : new FormControl(""),
   instEstCerti: new FormControl("", [Validators.required]),
   uniAffCerti: new FormControl("", [Validators.required]),
   addLine1: new FormControl(""),
   addLine2: new FormControl(""),
   addCity:new FormControl("",[Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
   addstate:new FormControl("",[Validators.required]),
    addDist:new FormControl("",[Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    addPin: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern("[0-9]*")]),
    principlename:new FormControl("",[Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    principleMobileNo: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9]*")]),
    checkbox: new FormControl("")
  });




  // onSubmit(empform:any)
  // {

  //    this.authService.registerUser(empform).subscribe(data=>

  //     { 
  //       console.log("data :"+empform);  
  //     });

  // }

registerSubmitted(){
  if(this.Passwordset.value==this.Confirmpasswordset.value){
 //   console.log(this.registerForm.value);

    this.repeatPass='none';
    
let user:InstituteModelInterface = {
  Institute_Category:this.registerForm.value.insCat!,
  Institute_Name:this.registerForm.value.instName!,
  Institute_State:this.registerForm.value.state!,
  Institute_District:this.registerForm.value.district!,
  Institute_Code:this.registerForm.value.institutecode!,
  Dise_Code:this.registerForm.value.disecode!,
  Location:this.registerForm.value.location!,
  Institute_Type:this.registerForm.value.affUni!,
  Affiliated_Uni_State:this.registerForm.value.affUnistate!,
  Affiliated_Uni_Name:this.registerForm.value.affUniName!,
  Year_Admission_Start: this.registerForm.value.yearAdStart!,
  Set_Password:this.registerForm.value.passwordset!,
  Address_1: this.registerForm.value.addLine1!,
  Address_2:this.registerForm.value.addLine2!,
  City:this.registerForm.value.addCity!,
  Address_State: this.registerForm.value.addstate!,
  Address_District: this.registerForm.value.addDist!,
  Address_Pincode: this.registerForm.value.addPin!,
  Principle_Name: this.registerForm.value.principlename!,
  Principle_MobileNo: this.registerForm.value.principleMobileNo!,
  Institute_Est_Certificate:this.registerForm.value.instEstCerti!,
  University_Certificate:this.registerForm.value.uniAffCerti!
}

      // this.registerForm.value.insCat!,
      // this.registerForm.value.instName!,
      // this.registerForm.value.state!,
      // this.registerForm.value.district!,
      // this.registerForm.value.institutecode!,
      // this.registerForm.value.disecode!,
      // this.registerForm.value.location!,
      // this.registerForm.value.affUni!,
      // this.registerForm.value.affUnistate!,
      // this.registerForm.value.affUniName!,
      // this.registerForm.value.yearAdStart!,
      // this.registerForm.value.passwordset!,
      // this.registerForm.value.addLine1!,
      // this.registerForm.value.addLine2!,
      // this.registerForm.value.addCity!,
      // this.registerForm.value.addstate!,
      // this.registerForm.value.addDist!,
      // this.registerForm.value.addPin!,
      // this.registerForm.value.principlename!,
      // this.registerForm.value.principleMobileNo!,
      // this.registerForm.value.instEstCerti!,
      // this.registerForm.value.uniAffCerti!
      


console.log(user);
    


    // this.authService.registerUser(user).subscribe(res=>{
    //   if(res == 'success'){
    //     this.displayMsg='Account created successfully!!!';
    //     this.isAccountCreated=true;
    //   }
    //   else if(res == 'AlreadyExist'){
    //     this.displayMsg='Account already exist. try with another institute code';
    //     this.isAccountCreated=false;
    //   }
    //   else{
    //     this.isAccountCreated=false;
    //   }

    //   // console.log(res);
    // });
  

  this.authService.registerUser(user).subscribe(data=>
    
    { 
      alert('Institute Registration Successful!');
      console.log("data :"+user);  
      
      setTimeout(function(){
        window.location.href = 'http://localhost:4200/home';
     }, 5000);
    });
  }
  else{
      this.repeatPass='inline'
    }
}


get InstName():FormControl{
  return this.registerForm.get("instName") as FormControl;
}
get District():FormControl{
  return this.registerForm.get("district") as FormControl;
}
get Institutecode():FormControl{
  return this.registerForm.get("institutecode") as FormControl;
}
get Disecode():FormControl{
  return this.registerForm.get("disecode") as FormControl;
}
get AffUniName():FormControl{
  return this.registerForm.get("affUniName") as FormControl;
}
get YearAdStart():FormControl{
  return this.registerForm.get("yearAdStart") as FormControl;
}
get Passwordset():FormControl{
  return this.registerForm.get("passwordset") as FormControl;
}
get Confirmpasswordset():FormControl{
  return this.registerForm.get("confirmpasswordset") as FormControl;
}


get InstEstCerti():FormControl{
  return this.registerForm.get("instEstCerti") as FormControl;
}
get UniAffCerti():FormControl{
  return this.registerForm.get("uniAffCerti") as FormControl;
}




get AddLine1():FormControl{
  return this.registerForm.get("addLine1") as FormControl;
}
get AddLine2():FormControl{
  return this.registerForm.get("addLine2") as FormControl;
}

get AddCity():FormControl{
  return this.registerForm.get("addCity") as FormControl;
}
get AddDistrict():FormControl{
  return this.registerForm.get("addCity") as FormControl;
}
get AddPin():FormControl{
  return this.registerForm.get("addPin") as FormControl;
}
get Principlename():FormControl{
  return this.registerForm.get("principlename") as FormControl;
}
get PrincipleMobileNo():FormControl{
  return this.registerForm.get("principleMobileNo") as FormControl;
}
get Location():FormControl{
  return this.registerForm.get("location") as FormControl;

}
get Checkbox():FormControl{
  return this.registerForm.get("checkbox") as unknown as FormControl;
}

}
