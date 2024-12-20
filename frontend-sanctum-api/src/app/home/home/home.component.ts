import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService,private router:Router)
  {

  }
    
  ngOnInit(): void {
      
  }
  logoutProcess()
  {
    this.apiService.logout().subscribe((response) => {
      localStorage.removeItem('API Token');
      this.router.navigate(['/']);
    }, (err)=>{
      console.log(err);
    }
    )
  }
}
