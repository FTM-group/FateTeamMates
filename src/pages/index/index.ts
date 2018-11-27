import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FtmProvider } from '../../providers/ftm/ftm';

import { TranslateService } from '@ngx-translate/core';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public ftmProvider:FtmProvider, public translate: TranslateService) {
    this.loadingIndex();
  }

  public loadingIndex(){
    this.loading = true;
    this.getAllGames();
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

  public selectGame(id){
    this.selected = id;
  }
  
}
