import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-institute-login',
  templateUrl: './institute-login.component.html',
  styleUrls: ['./institute-login.component.css']
})
export class InstituteLoginComponent implements OnInit {

  constructor(private loginAuth: AuthService) { }

  ngOnInit(): void {
  }

  InstituteLoginForm = new FormGroup({
    username: new FormControl("",[Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(15)])
  });

  isUserValid : boolean = false;

  onInstituteLoginSubmit(){
    this.loginAuth.loginInstitute(
      [this.InstituteLoginForm.value.username || '', 
      this.InstituteLoginForm.value.password || ''
    ]).subscribe(res =>{
      if(res == 'Failure'){
        this.isUserValid = false;
        alert('Login Unsuccessful!');
        window.location.href = "http://localhost:4200/home";
      }
      else{
        this.isUserValid=true;
        alert('Login Successful!');
        console.log(res)
        // this.loginAuth.setToken(res);
        window.location.href = "http://localhost:4200/institute-home";
      }
      
    });
    console.log(this.InstituteLoginForm); 
  }

  get Email(): FormControl{
    return this.InstituteLoginForm.get('username') as FormControl;
  }

  get PWD(): FormControl{
    return this.InstituteLoginForm.get('password') as FormControl;
  }
}
