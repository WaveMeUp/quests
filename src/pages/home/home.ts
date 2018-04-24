import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {QuestsProvider} from "../../providers/quests/quests";
import {QuestModel} from "../../shared/models/quest.model";
import {QuestInfoPage} from "../quest-info/quest-info";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [QuestsProvider]
})
export class HomePage implements OnInit {
  appName: string = '#TravelGo';
  quests: Array<QuestModel>;

  constructor(public navCtrl: NavController, private questsProvider: QuestsProvider) {

  }

  ngOnInit() {
    this.questsProvider.getQuests()
      .then(quests => {
        console.log(quests);
        this.quests = quests;
      })
  }

  openQuest(quest: QuestModel) {
    if (!quest.locked) this.navCtrl.push(QuestInfoPage,{quest});
  }

}
