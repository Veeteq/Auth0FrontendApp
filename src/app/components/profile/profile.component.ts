import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileJson: string = "";

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user$.subscribe(
      (profile) => this.profileJson = JSON.stringify(profile, null, 2)
    )
  }

}
