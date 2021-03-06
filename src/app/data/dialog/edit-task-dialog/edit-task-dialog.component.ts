import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Task} from '../../../model/Task';
import {DataHandlerService} from '../../../service/data-handler.service';
import {Category} from '../../../model/Category';
import {Priority} from '../../../model/Priority';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.scss']
})
export class EditTaskDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<EditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: [Task, string],
    private dataHandler: DataHandlerService,
    private dialog: MatDialog
  ) {
  }

  dialogTitle: string;
  task: Task;
  categories: Category[];
  priorities: Priority[];
  tmpTitle: string;
  tmpCategory: Category;
  tmpPriority: Priority;
  tmpCompleted: boolean;
  completedText: string;
  tmpDate: Date;

  ngOnInit() {
    this.task = this.data[0];
    this.dialogTitle = this.data[1];
    this.tmpTitle = this.task.title;
    this.tmpCategory = this.task.category;
    this.tmpPriority = this.task.priority;
    this.tmpCompleted = this.task.completed;
    this.tmpDate = this.task.date;

    if (this.task.completed) {
      this.completedText = 'Активировать';
    }
    else {
      this.completedText = 'Завершить';
    }

    this.dataHandler.getAllCategories().subscribe(items => this.categories = items);
    this.dataHandler.getAllPriorities().subscribe(items => this.priorities = items);
  }

  onConfirm() {
    this.task.title = this.tmpTitle;
    this.task.category = this.tmpCategory;
    this.task.priority = this.tmpPriority;
    this.task.date = this.tmpDate;
    this.dialogRef.close(this.task);
  }

  onCancel() {
    this.dialogRef.close(null);
  }

  onComplete() {
    this.task.completed = !this.tmpCompleted;
    if (this.task.completed) {
      this.dialogRef.close('complete');
      this.completedText = 'Активировать';
    }
    else {
      this.dialogRef.close('activate');
      this.completedText = 'Завершить';
    }
  }

  onDelete() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '700px',
      data: {
        dialogTitle: 'Подтвердите действие',
        message: `Вы действительно хотите удалить задачу "${this.task.title}" ?`
      },
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dialogRef.close('delete');
      }
    });
  }

}
