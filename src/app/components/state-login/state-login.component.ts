import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-state-login',
  templateUrl: './state-login.component.html',
  styleUrls: ['./state-login.component.css']
})
export class StateLoginComponent implements OnInit {

  constructor(private loginAuth: AuthService) { }

  ngOnInit(): void {
  }

  stateLoginForm = new FormGroup({
    username: new FormControl("",[Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(15)])
  });

  isUserValid : boolean = false;

  onStateLoginSubmit(){
    this.loginAuth.loginState(
      [this.stateLoginForm.value.username || '', 
      this.stateLoginForm.value.password || ''
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
        window.location.href = "http://localhost:4200/statehome";
      }
      
    });
    console.log(this.stateLoginForm); 
  }

  get Email(): FormControl{
    return this.stateLoginForm.get('username') as FormControl;
  }

  get PWD(): FormControl{
    return this.stateLoginForm.get('password') as FormControl;
  }

}
