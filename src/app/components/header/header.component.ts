import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  token: boolean = false; // Reactive connection state

  constructor(private router: Router, private tokenService: TokenService, private auth: RecipeService) {
    // Subscribe to the BehaviorSubject to listen for connection changes
    this.tokenService.connected$.subscribe((status) => {
      this.token = status;
    });

  }

  get isAuthRoute(): boolean {
    const authRoutes = ['/login', '/register', '/forgot-password'];
    return authRoutes.includes(this.router.url);
  }


  ngOnInit(): void {
    // Subscribe to the BehaviorSubject
    this.tokenService.connected$.subscribe((status) => {
      if(!this.token){
        this.tokenService.connected$
      }else{
        this.token = status;
      }

      console.log('Token status updated:', this.token); // Debug log
    });
  }
  logout(){
    this.auth.logout();
  }
}
