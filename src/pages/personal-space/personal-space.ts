import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersonalSpaceProvider } from '../../providers/personalSpace/personalSpace';
import { ConnectedProvider } from '../../providers/connected/connected';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public personalSpace: PersonalSpaceProvider, public connected: ConnectedProvider) {

    this.personalSpace.checkPagePersonalSpace(false);
    this.connected.checkPageConnected(true);
  }

  ionViewDidLoad() {
  }

}
