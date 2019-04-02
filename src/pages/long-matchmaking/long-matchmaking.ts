import { LongMatchmakingProvider } from './../../providers/long-matchmaking/long-matchmaking';
import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FtmProvider } from '../../providers/ftm/ftm';

import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';


/**
 * Generated class for the LongMatchmakingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-long-matchmaking',
  templateUrl: 'long-matchmaking.html',
})
export class LongMatchmakingPage {
  public topGamesProvider;
  public searchPlayersProvider;
  public gamesStatus = null;
  public topGames;
  public loading;
  public selected;
  public nicknames;

  @Input() title: string;

  /*public users = {
    1: {
      'username': 'JohnTheLegend',
      'games': [
          'GTA5', 'Mincraft', 'Call of Duty : Black Ops'
      ]
    },
    2: {
        'username': 'SteveAustin',
        'games': [
            'Forza7', 'Tekken', 'GTA5'
        ]
    },
    3: {
        'username': 'McQueen',
        'games': [
            'GTA5', 'Forza7', 'Minecraft'
        ]
    },
    4: 
    {
        'username': 'Batman',
        'games': [
            'Forza7', 'Tekken', 'Call of Duty : Black Ops'
        ]    
    }
  };*/


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public ftmProvider:FtmProvider,
    public translate: TranslateService,
    public http: HttpClient,
    public longMatch: LongMatchmakingProvider) {
      this.longMatch.checkLongMatchMaking(false);
      this.longMatch.checkPageConnected(true);
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

  public getPlayers(){
    this.ftmProvider.searchPlayers().then(data => {
      this.searchPlayersProvider = data;
      
      if(this.searchPlayersProvider.status == "success"){
        this.nicknames = this.searchPlayersProvider.nickname;
        this.gamesStatus = true;
      }
      else if(this.topGamesProvider.status == "error"){
        this.nicknames = null;
        this.gamesStatus = false;
      }
      
      this.loading = false;
    });
  }

  /*getPlayers(){
    for(let i = 0; i < Object.keys( this.users[i] ).length; i++){
      for(let j = 0; j < Object.keys(this.users[i]['games'][j]).length; j++){
        if(this.users['games'] == this.title){
          console.log(this.users[i].username);
          return this.users[i].username;
        }
      }
    }
  }*/

}
