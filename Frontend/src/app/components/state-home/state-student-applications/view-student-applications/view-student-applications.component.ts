import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentList } from 'src/app/Models/StudentList';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-view-student-applications',
  templateUrl: './view-student-applications.component.html',
  styleUrls: ['./view-student-applications.component.css']
})
export class ViewStudentApplicationsComponent implements OnInit {


  student: StudentList[] = [];

  id: Number ;
  

  constructor(private _service : AuthService , private activerout:ActivatedRoute) { }
  
  ngOnInit(): void {
    var tid=this.activerout.snapshot.params["id"];
    this.id= Number(tid);
    this._service.GetStudentById(this.id).subscribe(data=>{
      this.student=data;
      console.log(this.student);
    });

  }

  onSubmit(regform :any){
    this._service.UpdateStudentStatus(this.id, regform).subscribe(()=>{
      console.log(regform);
      alert("Updated Successfully!");
      window.location.href='/statestudentapplications';
    });
  }


}
