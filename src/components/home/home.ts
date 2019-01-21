import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


/**
 * Generated class for the HomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {

  text: string;
  apiUrl = "http://findteammates/";


  constructor(public http: HttpClient) {
    console.log('Hello HomeComponent Component');
    this.text = 'Hello World';
  }

  getTopGames(){
    let data = new Promise(resolve => {
      this.http.get(this.apiUrl+"games.php?top").subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        return err;
      });
    })
    return data;
  }

  getLastGames(){
    let data = new Promise(resolve => {
      this.http.get(this.apiUrl+"games.php?last").subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        return err;
      });
    })
    return data;
  }
  getHeadlineGames(){
    let data = new Promise(resolve => {
      this.http.get(this.apiUrl+"games.php?headline").subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        return err;
      });
    })
    return data;
   }

}
