import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { IndexPage } from '../pages/index';
import { PasswordPage } from '../pages/password/password';
import { LongMatchmakingPage } from './../pages/long-matchmaking/long-matchmaking';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { FtmProvider } from '../providers/ftm/ftm';
import { CheckerProvider } from '../providers/checker/checker';
import { EmailComposer } from '@ionic-native/email-composer';


import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Network } from '@ionic-native/network';
import { LongMatchmakingProvider } from '../providers/long-matchmaking/long-matchmaking';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    IndexPage,
    PasswordPage,
    LongMatchmakingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(
      {
        name: '__mydb_ftm',
           driverOrder: ['indexeddb', 'sqlite', 'websql']
      }
    ),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    IndexPage,
    PasswordPage,
    LongMatchmakingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FtmProvider,
    CheckerProvider,
    EmailComposer,
    Network,
    LongMatchmakingProvider
  ]
})
export class AppModule {}
