import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-auth',
  templateUrl: './client-auth.component.html',
  styleUrls: ['./client-auth.component.scss']
})
export class ClientAuthComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = ''; // Variable pour afficher le message d'erreur

  constructor(private authService: AuthService, private router: Router) {}

  // Méthode pour gérer la soumission du formulaire de connexion
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
