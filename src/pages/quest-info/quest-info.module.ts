import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestInfoPage } from './quest-info';

@NgModule({
  declarations: [
    QuestInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestInfoPage),
  ],
})
export class QuestInfoPageModule {}
