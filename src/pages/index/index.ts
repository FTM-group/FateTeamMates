import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FtmProvider } from '../../providers/ftm/ftm';

import { TranslateService } from '@ngx-translate/core';
import { PersonalSpaceProvider } from '../../providers/personalSpace/personalSpace';
import { ConnectedProvider } from '../../providers/connected/connected';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public ftmProvider:FtmProvider, public translate: TranslateService, public personalSpace: PersonalSpaceProvider, public connected: ConnectedProvider) {
    this.loadingIndex();
    this.personalSpace.checkPagePersonalSpace(true);
    this.connected.checkPageConnected(true);

  }

  public loadingIndex(){
    this.loading = true;
    //this.getAllGames();
  }

  /*public getAllGames(){
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
  }*/

  public selectGame(id){
    this.selected = id;
  }
  
}
