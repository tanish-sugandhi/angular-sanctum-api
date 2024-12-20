import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../api/api.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Fixed typo from styleUrl to styleUrls
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  errorMessage: string | null = null; // Error message for display

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  loginProcess() {
    this.errorMessage = null; // Clear previous error message
    if (this.formGroup.valid) {
      this.apiService.login(this.formGroup.value).subscribe(
        (result) => {
          const token = result.token;
          localStorage.setItem('API Token',token)
          console.log('Login successful:', result);
          this.router.navigate(['home']);
        },
        (error) => {
          console.error('Login failed:', error);
          this.errorMessage = error?.error?.message || 'An unexpected error occurred. Please try again.';
        }
      );
    } else {
      this.errorMessage = 'Please fill out the form correctly before submitting.';
    }
  }
}