import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AppFtmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppFtmProvider {

  public personal_space: boolean = false;
  public userId: number = 0;
  public connected: boolean = false;

  constructor(public http: HttpClient) {
    }
 
  public checkPagePersonalSpace(checkPage){
    if(checkPage){
      this.personal_space = true;
    }else{
      this.personal_space = false;
    }
  }

  public setUserId(userId: number){
    this.userId = userId;
  }


  //Connect to application
  public checkPageConnected(checkPage){
    if(checkPage){
      this.connected = true;
    }else{
      this.connected = false;
    }
  }

}
