import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent implements OnInit {

  constructor(public authService : AuthService) { }

  displayMsg: string = '';
  isAccountCreated: boolean;

  ngOnInit(): void {
  }

  onBasicDetailsSubmit(){
    
          
          console.log(this.basicDetailsForm.valid); 
          console.log("Submitted!");
          console.log(this.basicDetailsForm);

          this.authService.registerBasicDetails(
            [
              this.basicDetailsForm.value.applicationid || '',
              this.basicDetailsForm.value.rel || '',
              this.basicDetailsForm.value.community || '',
              this.basicDetailsForm.value.fathername || '',
              this.basicDetailsForm.value.mothername || '',
              this.basicDetailsForm.value.famAnnualIncome || ''
             ]
          ).subscribe((res)=>{
                    if(res == 'Success'){
                      this.displayMsg = 'Basic Details submitted successfully with your Application ID: '+this.basicDetailsForm.value.applicationid;
                      // alert(this.displayMsg);
                      //Call for user if from BackEnd
                      this.isAccountCreated = true;
                      this.basicDetailsForm.reset;
                      alert('Redirecting to Academic Details Form');
                      setTimeout(function(){
                        window.location.href = 'http://localhost:4200/registerScholarship/academic-details';
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

  Religion = ["Hindu","Muslim","Sikh","Christain","Parsi","Zeus"];

  basicDetailsForm = new FormGroup(
  {
    applicationid : new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern("[0-9]*")]),
    rel: new FormControl("",[Validators.required]),
    community:new FormControl("",[Validators.required, Validators.minLength(2),Validators.maxLength(20), Validators.pattern("[a-zA-Z].*")]),
    fathername:new FormControl("",[Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    mothername:new FormControl("",[Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    famAnnualIncome:new FormControl("", [Validators.required, Validators.minLength(1),Validators.pattern("[0-9,/-].*")]),
    
  }
  ); 

  get ApplicationId():FormControl{
    return this.basicDetailsForm.get("applicationid") as FormControl;
  }
  get Rel():FormControl{
    return this.basicDetailsForm.get("rel") as FormControl;
  }
  get Community():FormControl{
    return this.basicDetailsForm.get("community") as FormControl;
  }
  get Fathername():FormControl{
    return this.basicDetailsForm.get("fathername") as FormControl;
  }
  get Mothername():FormControl{
    return this.basicDetailsForm.get("mothername") as FormControl;
  }
  get FamAnnualIncome():FormControl{
    return this.basicDetailsForm.get("famAnnualIncome") as FormControl;
  }

   scrollToTop() {
    window.scrollTo(0, 0);
}

  selectedReligion='';
  onSelected(value:string){
    this.selectedReligion;
  }

}
