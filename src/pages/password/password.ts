import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer: EmailComposer, public translate: TranslateService) {
    this.sendPassword();
  }

  public sendPassword(){
    this.emailComposer.isAvailable().then((available: boolean) =>{

      let email = {
        to: 'kevin.guillier.pro@gmail.com',
        subject: 'test',
        body: 'How are you? Nice greetings from Leipzig',
        isHtml: true
      };
      console.log(available);

      if(available) {
        console.log('envoi test');
        this.emailComposer.open(email);
      }
      else{
        console.log('email composer pas pret');
        this.emailComposer.open(email);

      }


     });
  }


}
