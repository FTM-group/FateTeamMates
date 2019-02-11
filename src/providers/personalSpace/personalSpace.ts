import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PersonalSpaceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PersonalSpaceProvider {

  public personal_space: boolean = false;
  public userId: number = 0;
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

}
