import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-auth',
  templateUrl: './client-auth.component.html',
  styleUrls: ['./client-auth.component.scss']
})
export class ClientAuthComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = ''; 

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    console.log('Nom d\'utilisateur:', this.username);
    console.log('Mot de passe:', this.password);
  
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/product-catalog']);
    } else {
      this.errorMessage = 'Identifiants invalides';
    }
  }
  
}
