import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Category} from '../../model/Category';
import {MatDialog} from '@angular/material/dialog';
import {EditCategoryDialogComponent} from '../../data/dialog/edit-category-dialog/edit-category-dialog.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  indexMouseMove: number;
  @Input()
  categories: Category[];

  @Input()
  selectedCategory: Category;

  @Output()
  selectCategory = new EventEmitter<Category>();

  @Output()
  deleteCategory = new EventEmitter<Category>();

  @Output()
  updateCategory = new EventEmitter<Category>();

  constructor(private dataHandler: DataHandlerService, private dialog: MatDialog) {
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

  showEditIcon(index: number) {
    this.indexMouseMove = index;
  }

  openEditDialog(category: Category) {
    const dialogRef = this.dialog.open(EditCategoryDialogComponent, {
      data: [category.title, 'Редактирование категории'],
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'delete') {
        this.deleteCategory.emit(category);

        return;
      }

      if (typeof (result) === 'string') {
        category.title = result as string;
        this.updateCategory.emit(category);

        return;
      }
    });
  }
}
