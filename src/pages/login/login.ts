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

  public login = {
    nickname: '',
    password: ''
  };


  public nickname: string;
  public password: string;
  public logData;

  public errNickname;
  public errPassword;
  public errInvalid;

  public errServer;
  public checkConnectionServer;

  public spinner = false;

  constructor(public navCtrl: NavController, public ftm:FtmProvider, public storage:Storage, public translate: TranslateService, public events: Events, public navParams: NavParams) {
    // si login existant sur le device

    this.registerPage = RegisterPage;
    this.passwordPage = PasswordPage; 
    
    if(navParams.get("nickname") != undefined && navParams.get("password") != undefined){
        let nickname = navParams.get("nickname");
        let password = navParams.get("password");
        this.loginAction(nickname, password);
    }
   
  }

  public loginForm(){
    this.errNickname ="";
    this.errPassword ="";
    this.errInvalid ="";

    this.errServer = "";
    this.checkConnectionServer = "";


    if(!this.login.nickname || this.login.nickname.length < 3){
      this.errNickname = true;
    }
    if(!this.login.password || this.login.password.length < 3){
      this.errPassword = true;
    }

    if(this.login.nickname && this.login.password && this.login.nickname.length > 2 && this.login.password.length > 2){
      this.loginAction(this.login.nickname, this.login.password);
    }
  }

  public loginAction(nickname: string, password: string){
    this.spinner = true;
      this.checkConnectionServer = "start";
      this.ftm.getLog(nickname, password).then((data) => {
        this.logData = data;
        this.checkConnectionServer = "end";
        if(this.logData.status == "error"){
          this.errInvalid = true;
        }
        else if(this.logData.status == "success"){
          if(this.storage.ready()){
            let user = {'nickname':this.logData.user.nickname, 'email':this.logData.user.email};
            this.storage.set('user', user);
            this.events.publish('connected', true);
          }
          this.navCtrl.push(IndexPage);
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
