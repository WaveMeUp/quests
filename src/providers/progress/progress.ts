import { Injectable } from '@angular/core';

@Injectable()
export class ProgressProvider {
  progress: number;

  constructor() {
    this.progress = 0;
  }

  resetProgress() {
    this.progress = 0;
  }

  addMiles(miles: number) {
    this.progress+=miles;
    console.log('current: ', this.progress);
  }

  getProgress() {
    return this.progress;
  }
}
