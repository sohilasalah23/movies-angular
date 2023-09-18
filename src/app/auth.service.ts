import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  userdata:BehaviorSubject<any> = new BehaviorSubject(null)

  constructor(private _httpclient : HttpClient , private _router:Router) { 
    if(localStorage.getItem("usertoken")){
      this.getuserdata()
    }
  }




getuserdata(){
  let encodedtoken = JSON.stringify(localStorage.getItem("usertoken"))
  let encoded =jwtDecode(encodedtoken)
  this.userdata.next(encoded)
}




  signup(data:User): Observable<any> {
    return this._httpclient.post('https://ecommerce.routemisr.com/api/v1/auth/signup', data);
  }
  login(data:User): Observable<any> {
    return this._httpclient.post('https://ecommerce.routemisr.com/api/v1/auth/signin', data);
  }

  logout(){
    localStorage.removeItem("usertoken")
    this.userdata.next(null)
    this._router.navigate(["/login"])
  }
}
