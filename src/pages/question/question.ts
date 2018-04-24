import {Component, ViewChild} from '@angular/core';
import {IonicPage, Navbar, NavController, NavParams, ViewController} from 'ionic-angular';
import {QuestModel} from "../../shared/models/quest.model";
import {QuestionModel} from "../../shared/models/question.model";
import {AnswerModel} from "../../shared/models/answer.model";
import {FinalPage} from "../final/final";
import {ProgressProvider} from "../../providers/progress/progress";

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
  progress: number;
  percentProgress: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public progressProvider:ProgressProvider, public viewCtrl: ViewController) {
    this.quest = this.navParams.data.quest;
    this.currentQuestion = this.navParams.data.question ? this.navParams.data.question : this.quest.questions[0];
    this.progress = this.progressProvider.getProgress();
    console.log(`Question: ${this.getQuestionCount()}, result: ${(this.getQuestionCount()-1) / this.quest.questions.length * 100}`);
    this.percentProgress = this.getQuestionCount() === 1 ? 0 : (this.getQuestionCount()-1) / this.quest.questions.length * 100
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
    /*this.navBar.backButtonClick = (e:UIEvent)=> {
      let count = 0;
      this.navCtrl.remove(this.viewCtrl.index);
      this.navCtrl.pop();
    }*/
  }

  selectAnswer(answer: AnswerModel) {
    this.selectedAnswer = answer;
    if (this.selectedAnswer.correct) {
      console.log(this.selectedAnswer);
      const currentIndex = this.viewCtrl.index;
      if (this.getQuestionCount() !== this.quest.getQuestionsCount()) {
        this.progressProvider.addMiles(this.quest.milesPerQuestion);
        this.navCtrl.push(QuestionPage,{quest: this.quest, question: this.quest.questions[this.getQuestionCount()]})
          .then(() => {
            if (this.getQuestionCount() === 1) this.navCtrl.remove(currentIndex-1,2);
            else this.navCtrl.remove(currentIndex);
          })
      } else {
        this.progressProvider.addMiles(this.quest.milesPerQuestion);
        this.navCtrl.setRoot(FinalPage);
      }

    }
  }

  getQuestionCount() {
    return this.quest.questions.indexOf(this.currentQuestion) + 1;
  }

}
