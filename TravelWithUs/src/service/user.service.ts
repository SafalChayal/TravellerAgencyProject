import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs';
import { user } from 'src/app/models/User.models';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  api:string='https://localhost:7080';
  login(userEmail: string, password: string) :Observable<any>{
    const body = {
      userEmail: userEmail,
      password: password
    };
    return this.http.post<any>(`${this.api}/api/Token`, body);
  }

  
  getRoleFromToken() {
    const token = localStorage.getItem('jwtUserToken');
    if (token) {
      const tokenPayload = JSON.parse(atob(token.split('.')[1]));
      this.loaduser();
      return tokenPayload.Role;
    }
    return '';
  }
  getStatusFromToken() {
    const token = localStorage.getItem('jwtUserToken');
    if (token) {
      const tokenPayload = JSON.parse(atob(token.split('.')[1]));
      this.loaduser();
      return tokenPayload.Status;
    }
    return '';
  }

  


    jwtHelperService = new JwtHelperService();
  loaduser(){
    const t = localStorage.getItem("jwtUserToken");
    const uinfo = t != null ? this.jwtHelperService.decodeToken(t) : null;
    console.log(uinfo);
    
  }
  
  getToken(){
    localStorage.getItem('token');
  }
}
