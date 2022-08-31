import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login-state-ministry',
  templateUrl: './login-state-ministry.component.html',
  styleUrls: ['./login-state-ministry.component.css']
})
export class LoginStateMinistryComponent implements OnInit {

  constructor(private loginAuth: AuthService) { }

  ngOnInit(): void {
  }

  stateMinistryLoginForm = new FormGroup({
    username: new FormControl("",[Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(15)])
  });

  isUserValid : boolean = false;

  onLoginSubmit(){
    this.loginAuth.loginStateMinistry(
      [this.stateMinistryLoginForm.value.username || '', 
      this.stateMinistryLoginForm.value.password || ''
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
        window.location.href = "http://localhost:4200/ministryhome";
      }
      
    });
    console.log(this.stateMinistryLoginForm); 
  }

  get Email(): FormControl{
    return this.stateMinistryLoginForm.get('username') as FormControl;
  }

  get PWD(): FormControl{
    return this.stateMinistryLoginForm.get('password') as FormControl;
  }

}
