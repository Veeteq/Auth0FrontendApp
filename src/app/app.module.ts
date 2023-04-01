import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExternalComponent } from './components/external/external.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MaterialModule } from './material.module';

import { environment as env } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ExternalComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: env.auth.domain,
      clientId: env.auth.clientId,
      authorizationParams: env.auth.authorizationParams,
      //... env.auth,
      httpInterceptor: {
        allowedList: [`${env.dev.apiUrl}/api/private`]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
