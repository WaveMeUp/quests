import {Component, ViewChild} from '@angular/core';
import {IonicPage, ModalController, Navbar, NavController, NavParams, ViewController} from 'ionic-angular';
import {QuestModel} from "../../shared/models/quest.model";
import {QuestionModel} from "../../shared/models/question.model";
import {AnswerModel} from "../../shared/models/answer.model";
import {FinalPage} from "../final/final";
import {ProgressProvider} from "../../providers/progress/progress";
import {ImageViewerController} from "ionic-img-viewer";
import {AdPage} from "../ad/ad";

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html'
})
export class QuestionPage {
  @ViewChild(Navbar) navBar: Navbar;
  quest: QuestModel;
  currentQuestion: QuestionModel;
  selectedAnswer: AnswerModel;
  progress: {};
  percentProgress: number;
  wrongAnswer: boolean = false;
  _imageViewCtrl: ImageViewerController;

  constructor(public navCtrl: NavController, public navParams: NavParams, public progressProvider:ProgressProvider, public viewCtrl: ViewController, public modalCtrl:ModalController) {
    this.quest = this.navParams.data.quest;
    this.currentQuestion = this.navParams.data.question ? this.navParams.data.question : this.quest.questions[0];
    this.progress = this.progressProvider.getProgress();
    this.percentProgress = this.getQuestionCount() === 1 ? 0 : (this.getQuestionCount()-1) / this.quest.questions.length * 100
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
    /*this.navBar.backButtonClick = (e:UIEvent)=> {
      let count = 0;
      this.navCtrl.remove(this.viewCtrl.index);
      this.navCtrl.pop();
    }*/
    if (this.getQuestionCount() === 3) {
      this.presentImage();
    }
  }

  private presentImage() {
      const modal = this.modalCtrl.create(AdPage, {imgUrl: 'assets/imgs/adv1.png'});
      modal.present();
  }

  private nextQuestion() {
    const currentIndex = this.viewCtrl.index;
    if (this.getQuestionCount() !== this.quest.getQuestionsCount()) {
      if (!this.wrongAnswer) this.progressProvider.addMiles(this.quest.milesPerQuestion);
      this.navCtrl.push(QuestionPage,{quest: this.quest, question: this.quest.questions[this.getQuestionCount()]})
        .then(() => {
          if (this.getQuestionCount() === 1) this.navCtrl.remove(currentIndex-1,2);
          else this.navCtrl.remove(currentIndex);
        })
    } else {
      if (!this.wrongAnswer) this.progressProvider.addMiles(this.quest.milesPerQuestion);
      this.navCtrl.setRoot(FinalPage, {quest: this.quest});
    }
  }

  selectAnswer(answer: AnswerModel) {
    this.selectedAnswer = answer;
    if (this.selectedAnswer.correct && !this.wrongAnswer) {
      console.log(this.selectedAnswer);
      this.nextQuestion()
    } else {
      this.wrongAnswer = true;
      console.log('wrong answer');
      setTimeout(() => {
        this.nextQuestion();
      }, 1500)
    }
  }

  getQuestionCount() {
    return this.quest.questions.indexOf(this.currentQuestion) + 1;
  }

}
