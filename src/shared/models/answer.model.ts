export class AnswerModel {
  constructor(
    public title: string,
    public correct: boolean
  ) {
    this.title = title;
    this.correct = correct;
  }
}
