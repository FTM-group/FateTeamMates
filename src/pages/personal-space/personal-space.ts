import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersonalSpaceProvider } from '../../providers/personalSpace/personalSpace';
import { ConnectedProvider } from '../../providers/connected/connected';
import { FtmProvider } from '../../providers/ftm/ftm';

/**
 * Generated class for the PersonalSpacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal-space',
  templateUrl: 'personal-space.html',
})
export class PersonalSpacePage {

  public gamesProvider;
  public gamesStatus = null;
  public games;
  public loading;
  public selected;
  public lastGames;
  public lastGamesProvider;
  public gamesWithNicknames;
  public gamesWithNicknamesProvider;

  public user;


  constructor(public navCtrl: NavController, public navParams: NavParams, public ftmProvider:FtmProvider, public personalSpace: PersonalSpaceProvider, public connected: ConnectedProvider) {
    this.loadingIndex();
    this.personalSpace.checkPagePersonalSpace(false);
    this.connected.checkPageConnected(true);
  }

  public loadingIndex(){
    this.loading = true;
    this.getLastGames();
    this.getGamesWithNicknames();
    
  }

  public selectGame(id){
    this.selected = id;
  }

  public getLastGames(){
    this.ftmProvider.getLastGamesWithNicknames().then(data => {
      this.lastGamesProvider = data;
      console.log(data)

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

  public getGamesWithNicknames(){
    this.ftmProvider.getGamesWithNicknames().then(data => {
      this.gamesWithNicknamesProvider = data;
      console.log(data)

      if(this.gamesWithNicknamesProvider.status == "success"){
        this.gamesWithNicknames = this.gamesWithNicknamesProvider.games;
        this.gamesStatus = true;
      }
      else if(this.gamesWithNicknamesProvider.status == "error"){
        this.gamesWithNicknames = null;
        this.gamesStatus = false;
      }
      
      this.loading = false;
    });
  }


}
