import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EmailCheckerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CheckerProvider {

  constructor(public http: HttpClient) {

  }

  checkEmailPattern(email:string){
    var emailRegexp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (email && emailRegexp.test(email)) {
      return true;
    }
    else{
      return false;
    }
  }

  checkPassword(password:string){
    var passwordRegexp = new RegExp (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*[\²|\_|\-|\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\"|\;|\:|\s]).+$/g);
    if (password && passwordRegexp.test(password)) {
      return true;
    }
    else{
      return false;
    }
  }

}
