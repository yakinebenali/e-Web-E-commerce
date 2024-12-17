import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  private validUsers = [
    { username: 'yakinebenali5@gmail.com', password: 'yakine' },
    { username: 'maissabedoui@gmail.com', password: 'maissa' },
  
  ];

  constructor() {}


  login(username: string, password: string): boolean {
    const user = this.validUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      this.isAuthenticated = true; 
      return true;
    }

    this.isAuthenticated = false; 
    return false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
  }
}
