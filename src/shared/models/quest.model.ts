import {QuestionModel} from "./question.model";
import {PartnerModel} from "./partner.model";

export class QuestModel {
  /**
   * Модель квеста
   * @param {string} title - название квеста
   * @param {string} imgUrl - путь к изображения квеста
   * @param {string} mapUrl - путь к изображению с картой
   * @param {Array<QuestionModel>} questions - массив с вопросами для квеста
   * @param {number} timeToComplete - примерное время на прохождение
   * @param {Array<PartnerModel>} partners - массив партнёров
   * @param {number} availableMiles - доступные мили,
   * @param {boolean} locked - заблокирован ли квест
   * @param {number} milesPerQuestion - количество милей за каждый вопрос
   */
  constructor(
    public title: string,
    public imgUrl: string,
    public mapUrl: string,
    public questions: Array<QuestionModel>,
    public timeToComplete: number,
    public partners: Array<PartnerModel>,
    public availableMiles: number,
    public locked: boolean,
    public milesPerQuestion?: number
  ) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.mapUrl = mapUrl;
    this.questions = questions;
    this.timeToComplete = timeToComplete;
    this.partners = partners;
    this.availableMiles = availableMiles;
    this.milesPerQuestion = this.milesPerQuestion ? this.milesPerQuestion : this.availableMiles / this.questions.length;

  }
  getQuestionsCount() {
    return this.questions.length
  }

}
