import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SecondPage } from '../pages/second/second';
import { ThirdPage } from './../pages/third/third';
import { FourthPage } from './../pages/fourth/fourth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationService, AnimatesDirective } from 'css-animator';
import { RestProvider } from '../providers/rest/rest';
//import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    MyApp,
    HomePage,SecondPage,ThirdPage,FourthPage,AnimatesDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,HttpModule,HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,SecondPage,ThirdPage,FourthPage
  ],
  providers: [
    StatusBar,
    SplashScreen,AnimationService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
