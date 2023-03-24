import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Auth0 Angular';

  constructor(public authService: AuthService, @Inject(DOCUMENT) public document: Document) {
    console.log('AppComponent constructor');    
  }

  loginWithRedirect() {
    this.authService.loginWithRedirect();
  }

  logout() {    
    this.authService.logout({ logoutParams: { 
      returnTo: this.document.location.origin 
    } })
  }
}
