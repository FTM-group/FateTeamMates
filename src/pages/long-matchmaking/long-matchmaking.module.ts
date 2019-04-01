import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LongMatchmakingPage } from './long-matchmaking';

@NgModule({
  declarations: [
    LongMatchmakingPage,
  ],
  imports: [
    IonicPageModule.forChild(LongMatchmakingPage),
  ],
})
export class LongMatchmakingPageModule {}
