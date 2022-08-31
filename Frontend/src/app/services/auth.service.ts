import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { InstituteList } from '../Models/InstituteList';
import { InstituteModelInterface } from '../Models/InstituteModel';
import { MinistryScholarship } from '../Models/ministryscholarship';
import { StudentLogin } from '../Models/StudentLogin';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data(data: any) {
    throw new Error('Method not implemented.');
  }
  
  constructor(private http: HttpClient) { } // Constructor call http client will inject automatically DEPENDENCY INJECTION

  currentUser : BehaviorSubject<any> = new BehaviorSubject(null);

  // url="https://localhost:44358/api/";

  baseServerUrl = "https://localhost:44337/api/"

  urlMinistryScholarship = "https://localhost:44337/api/MinistryScholarship";

  
  jwtHelperService = new JwtHelperService();

  regUser(user:Array<string>){
    return this.http.post(this.baseServerUrl + "StudentRegistration/CreateUser", {
      ApplicationId : user[0],
      State: user[1],
      District: user[2],
      Name: user[3],
      Dob: user[4],
      Gender: user[5],
      Mobile: user[6],
      Email: user[7],
      InstituteCode: user[8],
      AadharNo: user[9],
      BankIfsc: user[10],
      BankAccNo: user[11],
      BankName: user[12],
      PasswordSet: user[13]
    },
    {
      responseType: 'text', 
    });
  }

  registerBasicDetails(user:Array<string>){
    return this.http.post(this.baseServerUrl + "Scholarship/BasicDetails",{
      ApplicationId: user[0],
      Religion: user[1],
      Community: user[2],
      FatherName: user[3],
      MotherName: user[4],
      FamAnnualIncome: user[5]
    },
    {
      responseType: 'text',
    });
  }

  registerAcademicDetails(user:Array<string>){
    return this.http.post(this.baseServerUrl + "Scholarship/AcademicDetails",{
      ApplicationId: user[0],
      InstituteName: user[1],
      PresentCourse: user[2],
      PresentYear: user[3],
      ModeOfStudy: user[4],
      UniversityName: user[5],
      ClassStartDate: user[6],
      PreviousClass: user[7],
      PreviousClassYear: user[8],
      PreviousClassPercentage: user[9]
    },
    {
      responseType: 'text',
    });
  }

  MarksFeesDetails(user:Array<string>){
    return this.http.post(this.baseServerUrl + "Scholarship/MarksFeesDetails",{
      ApplicationId: user[0],
      SscRollNo: user[1],
      SscBoardName: user[2],
      SscPassYear: user[3],
      SscClassPercentage: user[4],
      HscRollNo: user[5],
      HscBoardName: user[6],
      HscPassYear: user[7],
      HscClassPercentage: user[8],
      AdmissionFee: user[9],
      TuitionFee: user[10],
      OtherFee: user[11]
    },
    {
      responseType: 'text',
    });
  }
  PersonalContactDetails(user:Array<string>){
    return this.http.post(this.baseServerUrl + "Scholarship/PersonalContactDetails",{
      ApplicationId: user[0],
      IsDisabled: user[1],
      TypeOfDisability: user[2],
      PercentageOfDisability: user[3],
      MaritalStatus: user[4],
      ParentsProffession: user[5],
      ContactState: user[6],
      ContactDistrict: user[7],
      ContactBlock: user[8],
      HouseNumber: user[9],
      StreetNumber: user[10],
      PinNumber: user[11],
      ChooseScheme: user[12]
    },
    {
      responseType: 'text',
    });
  }
  DocumentDetails(user:Array<string>){
    return this.http.post(this.baseServerUrl + "Scholarship/DocumentsDetails",{
      ApplicationId: user[0],
      DomicileCertificate: user[1],
      StudentPhoto: user[2],
      InstituteIdCard: user[3],
      PreviousYearMarksheet: user[4],
      FeeReceipt: user[5],
      BankPassbook: user[6],
      AadharCard: user[7],
      SscMarksheet: user[8],
      HscMarksheet: user[9],
      IncomeCertificate: user[10]
    },
    {
      responseType: 'text',
    });
  }

  // registerUser(user : Array<string>){
  //   return this.http.post(this.url + "User/CreateUser",{
  //     FirstName: user[0],
  //     LastName: user[1],
  //     Email: user[2],
  //     Mobile: user[3],
  //     Gender: user[4],
  //     Pwd: user[5]
  //   }, 
  //   {
  //     responseType: 'text', 
  //   });
  // }

  loginStudent(loginInfo : Array<string>){
    return this.http.post(this.baseServerUrl + 'StudentLogin/Login', {
     Email: loginInfo[0],
     PasswordSet: loginInfo[1] 
    },
    {
      responseType: 'text', 
    }
    );
}


  loginStateMinistry(loginInfo : Array<string>){
    return this.http.post(this.baseServerUrl + 'StateMinistryLogin/stateMinistryLogin', {
     Username: loginInfo[0],
     Password: loginInfo[1] 
    },
    {
      responseType: 'text', 
    }
    );
}
  loginState(loginInfo : Array<string>){
    return this.http.post(this.baseServerUrl + 'StateLogin/Login', {
    Username: loginInfo[0],
    Password: loginInfo[1] 
    },
    {
      responseType: 'text', 
    }
    );
  }

loginInstitute(loginInfo : Array<string>){
  return this.http.post(this.baseServerUrl + 'InstituteLogin/Login', {
    Institute_Code: loginInfo[0],
    Set_Password: loginInfo[1] 
  },
  {
    responseType: 'text', 
  }
  );
}

  setToken(token: string){
    localStorage.setItem("access_token", token);
    this.loadCurrentUser();
  }
  //Install package for decode key npm i @auth0/angular-jwt

  loadCurrentUser(){
    const token = localStorage.getItem("access_token");
    const userInfo = token != null ? this.jwtHelperService.decodeToken(token) : null;
    
    // console.log(userInfo);

    const data = userInfo ? {
      id: userInfo.id,
      firstname: userInfo.firstname,
      lastname: userInfo.lastname,
      email: userInfo.email,
      mobile: userInfo.mobile,
      gender: userInfo.gender
    } : null
    this.currentUser.next(data);
  }

  isLoggedin(): boolean{
    return localStorage.getItem("access_token") ? true : false;
  }

  removeToken(){
    localStorage.removeItem("access_token");
  }

  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
  // constructor(private http:HttpClient) { }

  GetAllScholarship():Observable<any>{
    return this.http.get<any>(this.urlMinistryScholarship);
  }
  AddScholarship(user: MinistryScholarship):Observable<any>{
    return this.http.post<any>(this.urlMinistryScholarship, user);
  }
  GetScholarship(id:Number):Observable<any>{
    return this.http.get<any>(`${this.urlMinistryScholarship}/${id}`);
  }
  UpdateScholarship(user: MinistryScholarship):Observable<MinistryScholarship>{
    return this.http.put<MinistryScholarship>(this.urlMinistryScholarship +'/UpdateReg/'+ user.scholarshipid,user,this.httpOptions).pipe(catchError(this.handleError));
  }
  handleError(error:HttpErrorResponse){

    let errorMessage="";
    errorMessage=error.status +'\n'+error.statusText+'\n'+error.error;
    alert(errorMessage);
    return throwError(errorMessage);

  }
  DeleteScholarship(id:Number):Observable<any>{
    return this.http.delete<any>(`${this.urlMinistryScholarship}/${id}`);
  }

  registerUser(user:InstituteModelInterface):Observable<any>{


    return this.http.post<any>(this.baseServerUrl+"InstituteRegistration/Create",user,this.httpOptions).pipe(catchError(this.handleError));
  }

  //Institute List Service Methods

  instituteListUrl = 'https://localhost:44337/api/InstitutesList';

  GetInstitutesList():Observable<any>{
    return this.http.get<any>(this.instituteListUrl);
  }

  GetInstituteById(id:Number):Observable<any>{
    return this.http.get<any>(`${this.instituteListUrl}/${id}`);
  }

  GetInstituteStatus(status:string):Observable<any>{
    return this.http.get<any>(`${this.instituteListUrl}+'/Status/'+${status}`);
  }
  UpdateInstituteStatus(id:Number, user:InstituteList):Observable<InstituteList>{
    return this.http.put<InstituteList>(this.instituteListUrl +'/Status/'+ id,user,this.httpOptions).pipe(catchError(this.handleError));
  }
  // Student Fetching from Backend through SP
  
  studentListUrl = 'https://localhost:44337/api/Students';
  hardCodeURL = 'https://localhost:44337/api/Students/9865';

  GetAllStudents():Observable<any>{
    return this.http.get<any>(this.studentListUrl);
  }
  GetStudentById(id:Number):Observable<any>{
    // return this.http.get<any>(`${this.studentListUrl}+'/GetById/'+${id}`);
    // return this.http.get<any>(this.hardCodeURL);
    return this.http.get<any>(`${this.studentListUrl}/${id}`);
  }

  UpdateStudentStatus(id:Number, user:InstituteList):Observable<InstituteList>{
    return this.http.put<InstituteList>(this.studentListUrl +'/ApplicationStatus/'+ id,user,this.httpOptions).pipe(catchError(this.handleError));
  }
}
