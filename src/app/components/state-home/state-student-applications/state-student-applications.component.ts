import { Component, OnInit } from '@angular/core';
import { StudentList } from 'src/app/Models/StudentList';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-state-student-applications',
  templateUrl: './state-student-applications.component.html',
  styleUrls: ['./state-student-applications.component.css']
})
export class StateStudentApplicationsComponent implements OnInit {

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
