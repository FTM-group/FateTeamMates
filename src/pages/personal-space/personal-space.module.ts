import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalSpacePage } from './personal-space';

@NgModule({
  declarations: [
    PersonalSpacePage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalSpacePage),
  ],
})
export class PersonalSpacePageModule {}
