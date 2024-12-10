import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Définir des identifiants valides dans le service
  private validUsername: string = 'yakinebenali5@gmail.com';
  private validPassword: string = 'yakine'; // Remplacez par le mot de passe de test

  constructor() { }

  // Fonction pour vérifier si les identifiants sont corrects
  login(username: string, password: string): boolean {
    if (username === this.validUsername && password === this.validPassword) {
      return true;  // Connexion réussie
    }
    return false;  // Identifiants invalides
  }
}
