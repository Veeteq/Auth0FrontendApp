import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Auth0 Angular';

  constructor(public authService: AuthService, 
              @Inject(DOCUMENT) public document: Document,
              private dropdown: ElementRef) {
    console.log('AppComponent constructor');    
  }

  ngAfterViewInit(): void {
    (this.dropdown.nativeElement).dropdown();
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
