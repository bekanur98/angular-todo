import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CategoriesComponent} from './views/categories/categories.component';
import {TasksComponent} from './views/tasks/tasks.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {EditTaskDialogComponent} from './data/dialog/edit-task-dialog/edit-task-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    TasksComponent,
    EditTaskDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  entryComponents: [
    EditTaskDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
