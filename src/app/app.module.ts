import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SocialSideBarComponent } from './social-side-bar/social-side-bar.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ParallaxDirective } from './parallax.directive';
import { PresentationElementComponent } from './presentation-element/presentation-element.component';
import { HttpClientModule } from '@angular/common/http'
import { ProjectsService } from './projects.service';
import { EndingPageComponent } from './ending-page/ending-page.component'
import { environment } from './../environments/environment'
// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SocialSideBarComponent,
    PresentationComponent,
    ParallaxDirective,
    PresentationElementComponent,
    EndingPageComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
