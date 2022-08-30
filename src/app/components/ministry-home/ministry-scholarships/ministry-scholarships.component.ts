import { Component, OnInit } from '@angular/core';
import { MinistryScholarship } from 'src/app/Models/ministryscholarship';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ministry-scholarships',
  templateUrl: './ministry-scholarships.component.html',
  styleUrls: ['./ministry-scholarships.component.css']
})
export class MinistryScholarshipsComponent implements OnInit {

  scholarshipslist: MinistryScholarship[] = [] ;
  constructor(private _service : AuthService) { }

  ngOnInit(): void {
    this._service.GetAllScholarship().subscribe(data=>
    {
      this.scholarshipslist=data;
      console.log(this.scholarshipslist);
    });
  }

  deletescholarship(id:Number){
    this._service.DeleteScholarship(id).subscribe();
    alert("Deleted Successfully");
    window.location.reload();
   }
}
