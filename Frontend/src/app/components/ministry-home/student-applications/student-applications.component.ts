import { Component, OnInit } from '@angular/core';
import { StudentList } from 'src/app/Models/StudentList';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-student-applications',
  templateUrl: './student-applications.component.html',
  styleUrls: ['./student-applications.component.css']
})
export class StudentApplicationsComponent implements OnInit {

  studentList: StudentList[] = [] ;
  constructor(private _service : AuthService) { }

  ngOnInit(): void {
    this._service.GetAllStudents().subscribe(data=>
    {
      this.studentList=data;
      console.log(this.studentList);
    });
  }
}
