import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FtmProvider } from '../../providers/ftm/ftm';
import { Storage } from '@ionic/storage';
import { IndexPage } from '../index/index';
import { RegisterPage } from '../register/register';
import { PasswordPage } from '../password/password';

import { TranslateService } from '@ngx-translate/core';

import { Events } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public registerPage;
  public passwordPage;

  //public ignore = false;

  public connected;

  public log = {
    login: '',
    password: ''
  };


  public login: string;
  public password: string;
  public logData;

  public errLogin;
  public errPassword;
  public errInvalid;

  public errServer;
  public checkConnectionServer;

  public spinner = false;

  constructor(public navCtrl: NavController, public ftm:FtmProvider, public storage:Storage, public translate: TranslateService, public events: Events, public navParams: NavParams) {
    // si login existant sur le device

    this.registerPage = RegisterPage;
    this.passwordPage = PasswordPage; 
    
    if(navParams.get("login") != undefined && navParams.get("password") != undefined){
        let login = navParams.get("login");
        let password = navParams.get("password");
        this.loginAction(login, password);
    }
   
  }

  public loginForm(){
    this.errLogin ="";
    this.errPassword ="";
    this.errInvalid ="";

    this.errServer = "";
    this.checkConnectionServer = "";


    if(!this.log.login || this.log.login.length < 3){
      this.errLogin = true;
    }
    if(!this.log.password || this.log.password.length < 3){
      this.errPassword = true;
    }

    if(this.log.login && this.log.password && this.log.login.length > 2 && this.log.password.length > 2){
      this.loginAction(this.log.login, this.log.password);
    }
  }

  public loginAction(login: string, password: string){
    this.spinner = true;
      this.checkConnectionServer = "start";
      this.ftm.getLog(login, password).then((data) => {
        this.logData = data;
        this.checkConnectionServer = "end";
        if(this.logData.status == "error"){
          this.errInvalid = true;
        }
        else if(this.logData.status == "success"){
          if(this.storage.ready()){
            let user = {'login': login, 'email':this.logData.user.email};
            this.storage.set('user', user);
            

          }
          /**
           * Comportement de la page à changer avec l'event publish
           */
          location.reload();
          //this.events.publish('connected', true);
          this.connected = true;
          //this.navCtrl.push(IndexPage);

        }
        this.spinner = false;
        
      });
      setTimeout(errServer=>{
        if (this.checkConnectionServer === "start"){
          this.errServer = true;
          this.spinner = false;
        } 
      }, 10000);
  }
}
