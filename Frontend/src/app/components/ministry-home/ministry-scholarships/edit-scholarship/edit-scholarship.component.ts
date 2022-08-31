import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MinistryScholarship } from 'src/app/Models/ministryscholarship';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit-scholarship',
  templateUrl: './edit-scholarship.component.html',
  styleUrls: ['./edit-scholarship.component.css']
})
export class EditScholarshipComponent implements OnInit {

  user: MinistryScholarship={scholarshipid:0, scholarshipname: '', scholarshipcode:'',ministrycode:'',incomelimit:0,scholarshipdescription:'',eligibility:''};
  id: Number | undefined;
  
  constructor(private _service : AuthService , private activerout:ActivatedRoute) { }
  
  ngOnInit(): void {
    const tid=this.activerout.snapshot.params["id"];
    this.id=Number(tid);
    console.log("id ="+this.id)
    this._service.GetScholarship(this.id).subscribe(data=>{
      this.user=data;
      console.log(data);
    });

  }
  onSubmit(regform :any){
    this._service.UpdateScholarship(regform).subscribe(()=>{
      console.log(regform);
      alert("Updated Successfully");
      window.location.href='/ministryscholarships';
    });
  }


}
