import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {QuestModel} from "../../shared/models/quest.model";
import {QuestionPage} from "../question/question";
import {ProgressProvider} from "../../providers/progress/progress";

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  quest: QuestModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public proggressProvider:ProgressProvider) {
    this.quest = this.navParams.data.quest;
    console.log(this.quest);
  }

  startQuest(quest: QuestModel) {
    this.proggressProvider.resetProgress();
    this.navCtrl.push(QuestionPage, {quest})
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

}
