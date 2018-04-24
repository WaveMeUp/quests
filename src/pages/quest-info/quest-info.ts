import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {QuestModel} from "../../shared/models/quest.model";
import {QuestionPage} from "../question/question";
import {MapPage} from "../map/map";

/**
 * Generated class for the QuestInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quest-info',
  templateUrl: 'quest-info.html',
})
export class QuestInfoPage {
  quest: QuestModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.quest = this.navParams.data.quest;
    console.log(this.quest);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestInfoPage');
  }

  openMap(quest: QuestModel) {
    this.navCtrl.push(MapPage, {quest});
  }

  startQuest(quest: QuestModel) {
    this.navCtrl.push(QuestionPage, {quest})
  }

}
