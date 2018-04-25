import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {ProgressProvider} from "../../providers/progress/progress";
import {AdPage} from "../ad/ad";
import {HomePage} from "../home/home";
import {QuestModel} from "../../shared/models/quest.model";


@IonicPage()
@Component({
  selector: 'page-final',
  templateUrl: 'final.html',
})
export class FinalPage {
  correctAnswers: number;
  quest: QuestModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, public progressProvider: ProgressProvider, public modalCtrl: ModalController) {
    this.correctAnswers = this.progressProvider.getProgress().correctAnswers;
    this.quest = this.navParams.data.quest;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinalPage');
  }

  getPrize() {
    const modal = this.modalCtrl.create(AdPage, {imgUrl: 'assets/imgs/prize.png', final: true})
    modal.present();
  }

  toMainPage() {
    this.navCtrl.setRoot(HomePage);
  }

}
