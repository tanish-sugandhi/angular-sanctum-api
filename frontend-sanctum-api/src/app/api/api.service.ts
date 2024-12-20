import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from 'express';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { ForgotPasswordComponent } from '../forgotPassword/forgot-password/forgot-password.component';
import { ForgotPassword } from '../models/forgot-password';
import { CheckEmail } from '../models/check-email';
import { Reset } from '../models/reset';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = "http://localhost:8000/api"; 
  constructor(private http: HttpClient) { }
  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data); 
  }
  logout()
  {
    const token = localStorage.getItem('API Token');
     console.log(token)
    return this.http.post(`${this.baseUrl}/logout`, {},
      {
      headers: {
        Authorization:`Bearer ${this.getToken()}`,
      }
      }
    );
  }
  getToken()
  {
     return localStorage.getItem('API Token');
  }
  register(data:User)
  {
    return this.http.post(`${this.baseUrl}/signup`, data);
  } 
  
  checkEmail(email: ForgotPassword):Observable<CheckEmail> {
    return this.http.post<CheckEmail>(`${this.baseUrl}/sendEmail`, email);
  }
  resetPassword(resetPassword:Reset,token: string)
  {
    return this.http.put(`${this.baseUrl}/passwordReset/${token}`,resetPassword);
  }
}
