import { Injectable } from '@angular/core';
import {QuestModel} from "../../shared/models/quest.model";
import {QUESTS} from "../../shared/data/quests.data";

@Injectable()
export class QuestsProvider {

  getQuests(): Promise<QuestModel[]> {
    console.log(QUESTS);
    return Promise.resolve(QUESTS)
  }

}
