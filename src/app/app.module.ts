import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { SFeedbackPage } from '../pages/s-feedback/s-feedback';
import { SSchedulePickerPage } from '../pages/s-schedule-picker/s-schedule-picker';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RemoteserviceProvider } from '../providers/remoteservice/remoteservice';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SFeedbackPage,
    SSchedulePickerPage,
    LoginPage,
    SignupPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SFeedbackPage,
    SSchedulePickerPage,
    LoginPage,
    SignupPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RemoteserviceProvider
  ]
})
export class AppModule {}
