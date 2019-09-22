import {HttpClientModule} from '@angular/common/http';
import { JsonMenuPage } from './../pages/json-menu/json-menu';
import { FlashlightPage } from './../pages/flashlight/flashlight';
import { Flashlight } from '@ionic-native/flashlight';
import { ScannerPage } from './../pages/scanner/scanner';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { SMS } from '@ionic-native/sms/ngx';
import { MoviePage } from '../pages/movie/movie';
import { MovieProvider } from '../providers/movie/movie';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,LoginPage,ScannerPage,FlashlightPage,JsonMenuPage,MoviePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,LoginPage,ScannerPage,FlashlightPage,JsonMenuPage,MoviePage
  ],
  providers: [
    StatusBar, 
    SplashScreen, SMS,Flashlight,BarcodeScanner,MoviePage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider
  ]
})
export class AppModule {}
