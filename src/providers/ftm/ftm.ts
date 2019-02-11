import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { TranslateService } from '@ngx-translate/core';
import { PersonalSpaceProvider } from '../personalSpace/personalSpace';


@Injectable()
export class FtmProvider {
  
  apiUrl = "http://findteammates/FTM/";
  public errServer="ok";

  public user;
  constructor(public http: HttpClient, public translate: TranslateService, public storage: Storage, public personnalSpace: PersonalSpaceProvider) {
    
  }

 
  checkLoginAvailability(login:string){
    let data = new Promise(resolve => {
      this.http.get(this.apiUrl+"new_user.php?login="+login).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        return err;
      });
    })
    return data;
  }

  checkEmailAvailability(email:string){
    let data = new Promise(resolve => {
      this.http.get(this.apiUrl+"new_user.php?email="+email).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        return err;
      });
    })
    return data;
  }

  newUser(login:string, password:string, email:string){
    let data = new Promise(resolve => {
      this.http.post(this.apiUrl+"new_user.php", {'login':login, 'password':password, 'email':email}, {
        headers: { 'Content-Type': 'application/json' }
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        return err;
      });
    })
    return data;
  }


  getLog(login:string, password:string){

    let data = new Promise(resolve => {
      this.http.post(this.apiUrl+"login.php", {'login':login, 'password':password}, {
        headers: { 'Content-Type': 'application/json' }
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        return null;
      });
    })
    return data;
    
  }

  getGames(){
    let data = new Promise(resolve => {
      this.http.get(this.apiUrl+"games.php?all").subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        return err;
      });
    })
    return data;
  }

  getLastGamesWithNicknames(){
    let data = new Promise(resolve => {
      this.http.get(this.apiUrl+"games.php?last_games="+this.personnalSpace.userId).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        return err;
      });
    })
    return data;
  }

  getGamesWithNicknames(){
    let data = new Promise(resolve => {
      this.http.get(this.apiUrl+"games.php?games="+this.personnalSpace.userId).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        return err;
      });
    })
    return data;
  }

  getCheckLog(email){
    let data = new Promise(resolve => {
      this.http.get(this.apiUrl+"user.php?user="+email).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        return err;
      });
    })
    return data;
  }

  switchLanguage(language:string){
    this.translate.use(language);
  }

  
}
