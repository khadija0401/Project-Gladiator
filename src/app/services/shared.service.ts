import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  fname: string;
  fnameBS = new BehaviorSubject<string>('');

  constructor() {
    this.fname;

    this.fnameBS.next(this.fname);
   }

   updateFname(val:string){
    this.fname = val;
    this.fnameBS.next(this.fname);
   }
}
