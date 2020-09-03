import {Injectable} from '@angular/core';
import {Category} from '../model/Category';
import {TestData} from '../data/TestData';
import {Task} from '../model/Task';
import {BehaviorSubject, Subject} from 'rxjs';
import {Test} from 'tslint';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);

  constructor() {
  }

  // getCategories(): Category[] {
  //   return TestData.categories;
  // }

  getTasks() {
    this.tasksSubject.next(TestData.tasks);
  }

  getTasksByCategory(category: Category) {
    if (category === undefined){
      this.tasksSubject.next(TestData.tasks);
    }
    else {
      const tasks = TestData.tasks.filter(task => task.category === category);
      this.tasksSubject.next(tasks);
    }
  }
}
