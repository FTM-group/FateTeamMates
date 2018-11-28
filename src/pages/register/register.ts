import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FtmProvider } from '../../providers/ftm/ftm';
import { CheckerProvider } from '../../providers/checker/checker';

import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public loginPage;
  public register = {
    login: '',
    password: '',
    password2: '',
    email: ''
  };

  public available;
  public loginAvailability = null;
  public errLogin = null;
  public passwordsMatch = null;
  public errPassword = null;
  public emailAvailability = null;
  public errEmail = null;

  public registerSpinner = false;
  public errRegister;


  constructor(public navCtrl: NavController, public navParams: NavParams, public ftmProvider:FtmProvider, public checker:CheckerProvider, public translate: TranslateService) {
    this.loginPage = LoginPage;
  }

  public registerForm() {
    if(this.register.login == ""){
      this.errLogin = 1;
    }
    if(this.register.password == ""){
      this.errPassword = 1;
    }
    if(this.register.email == ""){
      this.errEmail = 1;
    }

    if(this.loginAvailability && this.passwordsMatch && this.emailAvailability){
      this.registerSpinner = true;
      this.errRegister = false;
      this.ftmProvider.newUser(this.register.login, this.register.password, this.register.email).then(data=>{
        if(data['status'] == "success"){
          this.navCtrl.push(LoginPage, {
            login : this.register.login,
            password : this.register.password
          });
        }
        else{
          this.errRegister = true;
        }
        this.registerSpinner = false;
      });
      
    }

    
  }

  public checkLogin(){
    this.errLogin = null;
    if (this.register.login == ""){
      this.loginAvailability = null;
    }
    else if(this.register.login.length < 3){
      this.errLogin = 2;
    }
    else{
      this.ftmProvider.checkLoginAvailability(this.register.login).then(data => {
        this.available = data;
        if(this.available.status == "available"){
          this.loginAvailability = true;
        }
        else if(this.available.status == "exist"){
          this.loginAvailability = false;
        }
      });
    }
  }

  public checkPasswords(){
    this.errPassword = null;

    if((this.register.password == "" && this.register.password2 == "") || (this.register.password != this.register.password2 && (this.register.password == "" || this.register.password2 == ""))){
      this.passwordsMatch = null;
    }
    else if(this.register.password != this.register.password2){
      this.errPassword = 2;
      this.passwordsMatch = false;
    }
    else if(this.register.password.length < 3 && this.register.password2.length < 3){
      this.errPassword = 3;
      this.passwordsMatch = false;
    }
    else if(this.checker.checkPassword(this.register.password) == false){
      this.errPassword = 4;
      this.passwordsMatch = false;
    }
    else{
      this.passwordsMatch = true;
    }
  }

  public checkEmail(){
    this.errEmail = null;
    if (this.register.email == ""){
      this.emailAvailability = null;
    }
    else if(this.checker.checkEmailPattern(this.register.email) == false){
      this.errEmail = 2;
    }
    else{
      this.ftmProvider.checkEmailAvailability(this.register.email).then(data => {
        this.available = data;
        if(this.available.status == "available"){
          this.emailAvailability = true;
        }
        else if(this.available.status == "exist"){
          this.emailAvailability = false;
        }
      });
    }
    
  }
}
