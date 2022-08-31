import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MinistryScholarship } from 'src/app/Models/ministryscholarship';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-scholarship-details',
  templateUrl: './scholarship-details.component.html',
  styleUrls: ['./scholarship-details.component.css']
})
export class ScholarshipDetailsComponent implements OnInit {
// id:Number;
scholarship:MinistryScholarship={scholarshipid:0,scholarshipcode:'', scholarshipname:'', ministrycode:'', scholarshipdescription:'', incomelimit:0, eligibility:''};
id: Number | undefined;

constructor(private authservice : AuthService , private activerout:ActivatedRoute) { }

ngOnInit(): void {
  const tid=this.activerout.snapshot.params["id"];
  this.id=Number(tid);
  this.authservice.GetScholarship(this.id).subscribe(data=>{
    this.scholarship=data;
    console.log(this.scholarship);
    
  });

}
}
