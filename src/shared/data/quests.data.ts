import {QuestionModel} from "../models/question.model";
import {QuestModel} from "../models/quest.model";
import {PartnerModel} from "../models/partner.model";

export const QUESTS: Array<QuestModel> = [
  new QuestModel(
    'History of Saint-Petersburg',
    'assets/imgs/quests/img1.jpg',
    'assets/imgs/quests/map1.jpg',
    [
      new QuestionModel('What was the reason to constucting the Alexander Column?',
        [
          {title: 'Gift for Alexander I from England', correct: false},
          {title: 'Victory in the war with Napoleon', correct: true},
          {title: 'In memory of the brother by Nikolay I', correct: false}
        ], 'assets/imgs/quests/img3.png'),
      new QuestionModel('What is the material of the "Medniy Vsadnik"?',
        [
          {title: 'Bronze', correct: true},
          {title: 'Copper', correct: false},
          {title: 'Alumni', correct: false}
        ], 'assets/imgs/quests/img3.png'),
      new QuestionModel('How many years was St. Isaac\'s Cathedral built?',
        [
          {title: '5', correct: false},
          {title: '15', correct: false},
          {title: '40', correct: true}
        ], 'assets/imgs/quests/img3.png'),
      new QuestionModel('Which house of Bolshaya Morskaya Street belonged to Vladimir Nabokov? ',
        [
          {title: '47', correct: true},
          {title: '42', correct: false},
          {title: '50', correct: false}
        ], 'assets/imgs/quests/img3.png')
    ],
    25,
    [
      new PartnerModel('Teremok','Blin from Russia',[0,20]),
      new PartnerModel('Bukvoed', '15% discount', [21,100])
    ],
    100,
    false,
    10),
  new QuestModel(
    'Another quest',
    'assets/imgs/quests/img2.jpg',
    'assets/imgs/quests/map1.jpg',
    [
      new QuestionModel('What was the reason to constucting the Alexander Column?',
        [
          {title: 'Gift for Alexander I from England', correct: false},
          {title: 'Victory in the war with Napoleon', correct: true},
          {title: 'In memory of the brother by Nikolay I', correct: false}
        ],'assets/imgs/quests/img3.png'),
      new QuestionModel('What is the material of the "Medniy Vsadnik"?',
        [
          {title: 'Bronze', correct: true},
          {title: 'Copper', correct: false},
          {title: 'Alumni', correct: false}
        ], 'assets/imgs/quests/img3.png'),
      new QuestionModel('How many years was St. Isaac\'s Cathedral built?',
        [
          {title: '5', correct: false},
          {title: '15', correct: false},
          {title: '40', correct: true}
        ], 'assets/imgs/quests/img3.png'),
      new QuestionModel('Which house of Bolshaya Morskaya Street belonged to Vladimir Nabokov? ',
        [
          {title: '47', correct: true},
          {title: '42', correct: false},
          {title: '50', correct: false}
        ], 'assets/imgs/quests/img3.png')
    ],
    25,
    [
      new PartnerModel('Teremok','Blin from Russia',[0,20]),
      new PartnerModel('Bukvoed', '15% discount', [21,100])
    ],
    100,
    true,
    10)
];

