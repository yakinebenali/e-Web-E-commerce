import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login(): void {

    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/admin/dashboard']);
    } else {
      alert('Identifiants incorrects');
    }
  }
}
