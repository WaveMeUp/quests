import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProgressProvider} from "../../providers/progress/progress";


@IonicPage()
@Component({
  selector: 'page-final',
  templateUrl: 'final.html',
})
export class FinalPage {
  progress: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public progressProvider: ProgressProvider) {
    this.progress = this.progressProvider.getProgress();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinalPage');
  }

}
