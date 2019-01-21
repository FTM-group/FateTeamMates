import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FtmProvider } from '../../providers/ftm/ftm';

import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  public gamesProvider;
  public gamesStatus = null;
  public games;
  public loading;
  public selected;

  public topGames;
  public topGamesProvider;
  public lastGames;
  public lastGamesProvider;
  public headlineGames;
  public headlineGamesProvider;
  
  public apiUrl = "http://findteammates/";


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public ftmProvider:FtmProvider,
              public translate: TranslateService,
              public http: HttpClient) {
    this.loadingIndex();
  }

  public loadingIndex(){
    this.loading = true;
    //this.getAllGames();
    this.getHeadline();
    this.getLast();
    this.getTop();
  }

  public selectGame(id){
    this.selected = id;
  }

  public getAllGames(){
    this.ftmProvider.getGames().then(data => {
      this.gamesProvider = data;

      if(this.gamesProvider.status == "success"){
        this.games = this.gamesProvider.games;
        this.gamesStatus = true;
      }
      else if(this.gamesProvider.status == "error"){
        this.games = null;
        this.gamesStatus = false;
      }
      
      this.loading = false;
    });
  }  

  public getTop(){
    this.ftmProvider.getTopGames().then(data => {
      this.topGamesProvider = data;
      
      if(this.topGamesProvider.status == "success"){
        this.topGames = this.topGamesProvider.games;
        this.gamesStatus = true;
      }
      else if(this.topGamesProvider.status == "error"){
        this.topGames = null;
        this.gamesStatus = false;
      }
      
      this.loading = false;
    });
  }

  public getLast(){
    this.ftmProvider.getLastGames().then(data => {
      this.lastGamesProvider = data;

      if(this.lastGamesProvider.status == "success"){
        this.lastGames = this.lastGamesProvider.games;
        this.gamesStatus = true;
      }
      else if(this.lastGamesProvider.status == "error"){
        this.lastGames = null;
        this.gamesStatus = false;
      }
      
      this.loading = false;
    });
  }

  public getHeadline(){
    this.ftmProvider.getHeadlineGames().then(data => {
      this.headlineGamesProvider = data;

      if(this.headlineGamesProvider.status == "success"){
        this.headlineGames = this.headlineGamesProvider.games;
        this.gamesStatus = true;
      }
      else if(this.headlineGamesProvider.status == "error"){
        this.headlineGames = null;
        this.gamesStatus = false;
      }
      
      this.loading = false;
    });
  }
}
