import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LongMatchmakingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LongMatchmakingProvider {

  public long_match: boolean = false;
  public userId: number = 0;
  public connected: boolean = false;



  constructor(public http: HttpClient) {
  }

  public checkLongMatchMaking(checkPage){
    if(checkPage){
      this.long_match = true;
    }else{
      this.long_match = false;
    }
  }

  public setUserId(userId: number){
    this.userId = userId;
  }

  public checkPageConnected(checkPage){
    if(checkPage){
      this.connected = true;
    }else{
      this.connected = false;
    }
  }

}
