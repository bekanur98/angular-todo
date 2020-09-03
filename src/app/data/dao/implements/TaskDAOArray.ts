import {TaskDAO} from '../interfaces/TaskDAO';
import {Observable, of} from 'rxjs';
import {Priority} from '../../../model/Priority';
import {Category} from '../../../model/Category';
import {Task} from 'src/app/model/Task';
import {TestData} from '../../TestData';

export class TaskDAOArray implements TaskDAO {
  add(T): Observable<Task> {
    return undefined;
  }

  delete(id: number): Observable<Task> {
    return undefined;
  }

  get(id: number): Observable<Task> {
    return of(TestData.tasks.find(task => task.id === id));
  }

  getAll(): Observable<Task[]> {
    return of(TestData.tasks);
  }

  getCompletedCountInCategory(category: Category): Observable<number> {
    return undefined;
  }

  getTotalCount(): Observable<number> {
    return undefined;
  }

  getTotalCountInCategory(category: Category): Observable<number> {
    return undefined;
  }

  getUncompletedCountInCategory(category: Category): Observable<number> {
    return undefined;
  }

  search(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]> {
    if (category === undefined) {
      return of(TestData.tasks);
    }
    else if (category !== null) {
      return of(TestData.tasks.filter(tasks => tasks.category === category));
    }

    // return of(this.searchTasks(category, searchText, status, priority));
  }

  private searchTasks(category: Category, searchText: string, status: boolean, priority: Priority): Task[] {
    let allTasks = TestData.tasks;

    if (category != null) {
      allTasks = allTasks.filter(tasks => tasks.category === category);
    }

    return allTasks;
  }

  update(T): Observable<Task> {
    return undefined;
  }

}
