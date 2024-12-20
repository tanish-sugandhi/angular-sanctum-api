import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../api/api.service';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errors: any = {};
  data: User = {
    name: '',
    email: '',
    password: ''
  }; 
 

  constructor(private apiService: ApiService,private router:Router) {}

  ngOnInit(): void {}

  registerProcess() {

    this.apiService.register(this.data).subscribe(
      (response) => {
        console.log('User successfully registered');
        alert('User registered successfully');
        this.router.navigate(['/'])

      },
      (err) => {
        this.errors = err.error.errors;
        console.log(err.error.errors);
      }
    );
  }
}
