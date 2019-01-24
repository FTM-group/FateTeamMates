import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';


@Injectable()
export class FtmProvider {
  
  apiUrl = "http://findteammates/FTM/";
  public errServer="ok";

  constructor(public http: HttpClient, public translate: TranslateService) {
  
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

  switchLanguage(language:string){
    this.translate.use(language);
  }

  
}
