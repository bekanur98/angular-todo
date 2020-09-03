import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Category} from '../../model/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];
  selectedCategory: Category;
  allCategory: boolean;

  constructor(private dataHandler: DataHandlerService) {
    this.allCategory = true;
  }

  ngOnInit(): void {
    this.dataHandler.categoriesSubject.subscribe(categories => this.categories = categories);
  }

  showTasksByCategory(category: Category) {
    this.allCategory = category === undefined;
    this.dataHandler.getTasksByCategory(category);
    this.selectedCategory = category;
  }
}
