import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Category} from '../../model/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  allCategory: boolean;
  @Input()
  categories: Category[];

  @Input()
  selectedCategory: Category;

  @Output()
  selectCategory = new EventEmitter<Category>();

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.showTasksByCategory(undefined);
  }

  showTasksByCategory(category: Category) {

    if (this.selectedCategory === category) {
      return;
    }

    this.selectedCategory = category;

    this.selectCategory.emit(this.selectedCategory);

  }
}
