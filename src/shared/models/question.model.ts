import {AnswerModel} from "./answer.model";

export class QuestionModel {
  /**
   * Модель вопроса для квеста
   * @param {string} title - загаловок вопроса
   * @param {Array<string>} answers - массив ответов
   * @param {number} trueAnswer - номер правильного ответа
   * @param {string} imgUrl - путь к изображению для вопроса
   */
  constructor (
    public title: string,
    public answers: Array<AnswerModel>,
    public imgUrl: string
  ) {
    this.title = title;
    this.answers = answers;
    this.imgUrl = imgUrl;
  }
}
