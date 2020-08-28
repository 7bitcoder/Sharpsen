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
// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

// for Router import:
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

// for Core import:
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { ScrollBarComponent } from './scroll-bar/scroll-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SocialSideBarComponent,
    PresentationComponent,
    ParallaxDirective,
    PresentationElementComponent,
    EndingPageComponent,
    ScrollBarComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // for HttpClient use:
    LoadingBarHttpClientModule,

    // for Router use:
    LoadingBarRouterModule,

    // for Core use:
    LoadingBarModule
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
