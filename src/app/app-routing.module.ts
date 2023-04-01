import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { ExternalComponent } from './components/external/external.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '',         redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',     component: HomeComponent,     pathMatch: 'full' },
  { path: 'profile',  component: ProfileComponent,  canActivate: [AuthGuard] },
  { path: 'external', component: ExternalComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
