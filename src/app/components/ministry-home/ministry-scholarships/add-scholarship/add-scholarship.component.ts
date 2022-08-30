import { Component, OnInit } from '@angular/core';
import { MinistryScholarship } from 'src/app/Models/ministryscholarship';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-scholarship',
  templateUrl: './add-scholarship.component.html',
  styleUrls: ['./add-scholarship.component.css']
})
export class AddScholarshipComponent implements OnInit {

 //Creating array to store information from user in database
users : MinistryScholarship[] = [];
constructor(private authService: AuthService) { }

ngOnInit(): void {}
//After form submission onSubmit will be called which will add the data in sql server
  onSubmit(regform:any){
     this.authService.AddScholarship(regform).subscribe(data=>
    {
      console.log("data:"+regform);
      alert("Scholarship Added");
      window.location.href='/ministryscholarships';
    });
    // this.router.navigate(['/ministryscholarships']);
}

}
