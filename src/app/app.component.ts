import { Component, ViewChild  } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { TranslateService } from '@ngx-translate/core';

import { LoginPage } from '../pages/login/login';
//import { IndexPage } from '../pages/index/index';

import { Events } from 'ionic-angular';

import { Network } from '@ionic-native/network';
import { AppFtmProvider } from '../providers/app-ftm/app-ftm';
import { PersonalSpacePage } from '../pages/personal-space/personal-space';


@Component({
  templateUrl: 'app.html'
})


export class MyApp {

  lang: string;
  //connected: boolean = false;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public storage:Storage, public translate: TranslateService, public events: Events, public network: Network, public appFtm: AppFtmProvider) {
    
    
    this.storage.get('lang').then((val) => {
      if(val != null){
        this.translate.use(val);
        this.lang = val;
      }
      else{
        translate.setDefaultLang('en');
        this.lang = "en";
      }
      this.nav.push(LoginPage);
    });

    

    /*this.storage.get('user').then((val) => {
      if(val != null){   
        this.connected.checkPageConnected(true);
        //this.nav.push(IndexPage);
      }
      else{
        this.nav.push(LoginPage);
      }
    });*/

    //this.network.onConnect().subscribe(data=> console.log(data), error => console.log(error));
  
    //this.network.onDisconnect().subscribe(data=> console.log(data), error => console.log(error));
  }

  public switchLanguage(language:string){
    if(this.storage.ready()){
      this.storage.set('lang', language);
      this.translate.use(language);
      this.lang = language;
    }    
  }

  public goToPersonalSpace(){
    this.nav.push(PersonalSpacePage);
  }

  public logout(){
    if(this.storage.ready()){
      this.storage.remove('user');
      this.appFtm.checkPageConnected(false);
      this.nav.push(LoginPage);
    }   
  }

  ionViewDidEnter(){
    this.network.onConnect().subscribe(data=> console.log(data), error => console.log(error));
  
    this.network.onDisconnect().subscribe(data=> console.log(data), error => console.log(error));
  }
}

