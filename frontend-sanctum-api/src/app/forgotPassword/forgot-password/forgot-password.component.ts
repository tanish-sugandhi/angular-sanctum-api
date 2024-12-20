import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../api/api.service';
import { ForgotPassword } from '../../models/forgot-password';
import { CheckEmail } from '../../models/check-email';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent implements OnInit {
  data: User = {
    name: '',
    email: '',
    password: ''
  };
  emailCheck: ForgotPassword = {
    email: '',
  }
  constructor(private apiService: ApiService) {
     
  }
    
  ngOnInit(): void {
       
  }

  checkEmail() {
  this.apiService.checkEmail(this.emailCheck).subscribe(
    (response) => {
      console.log(response);
      if (response.data) {
        alert('Email is sent successfully, please check your mailbox');  
      } else {
        alert("Email not found or another issue occurred.");
      }
    },
    (err) => {
      console.log(err);
      alert(err.error.error);
    }
  );
}


}
