import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuestsProvider } from '../providers/quests/quests';
import {QuestInfoPage} from "../pages/quest-info/quest-info";
import {QuestionPage} from "../pages/question/question";
import {FinalPage} from "../pages/final/final";
import { ProgressProvider } from '../providers/progress/progress';
import {MapPage} from "../pages/map/map";
import {IonicImageViewerModule} from "ionic-img-viewer";
import {ProgressBarModule} from "angular-progress-bar";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuestInfoPage,
    QuestionPage,
    FinalPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicImageViewerModule,
    ProgressBarModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuestInfoPage,
    QuestionPage,
    FinalPage,
    MapPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuestsProvider,
    ProgressProvider
  ]
})
export class AppModule {}
