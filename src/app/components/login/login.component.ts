import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fname : string;

  constructor(private loginAuth: AuthService, private sharedService : SharedService) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl("",[Validators.required, Validators.email]),
    pwd: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(15)])
  });

  isUserValid : boolean = false;

  loginSubmitted(){
    this.loginAuth.loginUser(
      [this.loginForm.value.email || '', 
      this.loginForm.value.pwd || ''
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
        this.loginAuth.setToken(res);
        window.location.href = "http://localhost:4200/home/studenthome";
      }
      
    });
    console.log(this.loginForm); 
  }

  get Email(): FormControl{
    return this.loginForm.get('email') as FormControl;
  }

  get PWD(): FormControl{
    return this.loginForm.get('pwd') as FormControl;
  }

  ngAfterContentChecked() {
    this.fname = this.sharedService.fname;
  }
}
