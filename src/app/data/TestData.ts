import {Category} from '../model/Category';
import {Priority} from '../model/Priority';
import {Task} from '../model/Task';

export class TestData {

  static categories: Category[] = [
    {id: 1, title: 'Работа'},
    {id: 2, title: 'Семья'},
    {id: 3, title: 'Учеба'},
    {id: 4, title: 'Отдых'},
    {id: 5, title: 'Спорт'},
    {id: 6, title: 'Еда'},
    {id: 7, title: 'Финансы'},
    {id: 8, title: 'Гаджеты'},
    {id: 9, title: 'Здоровье'},
    {id: 10, title: 'Автомобиль'},
  ];

  static priorities: Priority[] = [
    {id: 1, title: 'Низкий', color: '#e5e5e5'},
    {id: 2, title: 'Средний', color: '#85D1B2'},
    {id: 3, title: 'Высокий', color: '#F1929D'},
    {id: 4, title: 'Очень срочно!!', color: '#F1128D'},
  ];

  static tasks: Task[] = [
    {
      id: 1,
      title: 'Залить бензин полный бак',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9],
      date: new Date('2020-06-23')
    },

    {
      id: 2,
      title: 'Передать отчеты начальнику управления',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[0],
      date: new Date('2020-06-27')
    },

    {
      id: 3,
      title: 'hello',
      priority: TestData.priorities[0],
      completed: true,
      category: TestData.categories[2],
      date: new Date('2020-07-11')
    },
    {
      id: 4,
      title: 'Выучить ангуляр',
      priority: null,
      completed: false,
      category: null,
      date: null
    },
    {
      id: 5,
      title: 'react-native',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[7],
      date: new Date('2020-09-11')
    },
    {
      id: 6,
      title: 'devops',
      priority: TestData.priorities[4],
      completed: false,
      category: TestData.categories[6],
      date: new Date('2020-08-21')
    },
    {
      id: 7,
      title: 'Camping',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[2],
      date: new Date('2020-09-04')
    },
    {
      id: 8,
      title: 'Footbal',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2020-09-6')
    },
  ];
}
