import { Component, OnInit } from '@angular/core';
import { MinistryScholarship } from 'src/app/Models/ministryscholarship';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  item: MinistryScholarship={scholarshipid:0,scholarshipcode:'', scholarshipname:'', ministrycode:'', scholarshipdescription:'', incomelimit:0, eligibility:''};
  id: Number | undefined;

  scholarshipslist: MinistryScholarship[] = [] ;
  constructor(private authService : AuthService, private sharedService : SharedService) { }

  ngOnInit(): void {
    this.authService.GetAllScholarship().subscribe(data=>
    {
      this.scholarshipslist=data;
      console.log(this.scholarshipslist);
    });
  }
  emailid : string;
  ngAfterContentChecked() {
    this.emailid = this.sharedService.emailid;
  }

}
