import { Injectable } from '@angular/core';

@Injectable()
export class ProgressProvider {
  progress: number;
  correctAnswers: number;
  constructor() {
    this.progress = 0;
    this.correctAnswers = 0;
  }

  resetProgress() {
    this.progress = 0;
    this.correctAnswers = 0;
  }

  addMiles(miles: number) {
    console.log('adding miles');
    this.progress+=miles;
    this.correctAnswers+=1;
    console.log('current: ', this.progress);
  }

  getProgress() {
    return {
      progress: this.progress,
      correctAnswers: this.correctAnswers
    };
  }
}
