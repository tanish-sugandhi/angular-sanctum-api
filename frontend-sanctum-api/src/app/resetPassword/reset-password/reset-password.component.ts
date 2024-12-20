import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Reset } from '../../models/reset';
import { ApiService } from '../../api/api.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  token: string = '';
  
  reset: Reset = {
    newPassword: '',
    confirmPassword:''
  }
  constructor(private apiService: ApiService,private route: ActivatedRoute)
  {
     this.route.params.subscribe((params) => {
      this.token = params['token']; // Capture the token from the URL
      //console.log('Token:', this.token); // Check if the token is captured correctly
    });
  }
  resetPassword(event:Event)
  {
    event.preventDefault();
    console.log(this.token);
    this.apiService.resetPassword(this.reset, this.token).subscribe((response) => {
      console.log(this.token);
      console.log(response);
      alert('Password Reset Successfully');
    }, (err) => {
      console.log(err);
      alert('Unable to reset Password');
    })
  }
}
