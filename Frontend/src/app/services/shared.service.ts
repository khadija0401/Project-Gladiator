import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  emailid: string;
  emailidBS = new BehaviorSubject<string>('');

  constructor() {
    this.emailid;

    this.emailidBS.next(this.emailid);
   }

   updateEmailid(val:string){
    this.emailid = val;
    this.emailidBS.next(this.emailid);
   }
}
