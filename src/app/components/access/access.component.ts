import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {

  constructor(private authService: AuthService,
              private router : Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authService.removeToken();
    this.router.navigateByUrl('/login');
  }

  loggedUser(){
    var ID  = this.authService.currentUser.getValue().id||"";
    var fName = this.authService.currentUser.getValue().firstname||"";
    var lName = this.authService.currentUser.getValue().lastname||"";
    var userInfo = "Info is: "+ID + " " + fName + " " + lName||"";
    alert(userInfo);
    console.log(this.authService.currentUser);
  }

}
