import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConnectedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConnectedProvider {

  public connected: boolean = false;
  constructor(public http: HttpClient) {
  }
  public checkPageConnected(checkPage){
    if(checkPage){
      this.connected = true;
    }else{
      this.connected = false;
    }
  }
}
