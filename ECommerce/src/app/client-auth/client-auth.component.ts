// src/app/client-auth/client-auth.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-client-auth',
  templateUrl: './client-auth.component.html',
  styleUrls: ['./client-auth.component.scss']
})
export class ClientAuthComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onLogin() {
    // Vérifiez les informations d'identification ici (authentification)
    if (this.authService.login(this.username, this.password)) {
      // Rediriger vers le product-catalog après une connexion réussie
      this.router.navigate(['/product-catalog']);
    } else {
      alert('Identifiants invalides');
    }
  }
}
