import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ad',
  templateUrl: 'ad.html',
})
export class AdPage {
  imgUrl: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.imgUrl = this.navParams.data.imgUrl;
  }

  ionViewDidLoad() {
    if (!this.navParams.data.final) {
      setTimeout(() => {
        this.viewCtrl.dismiss();
      }, 5000);
    }
    console.log('ionViewDidLoad AdPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
