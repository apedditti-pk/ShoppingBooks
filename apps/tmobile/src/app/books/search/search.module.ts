import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatMenuModule,
  MatButtonModule
} from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormsModule }   from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { EllipsisModule } from 'ngx-ellipsis';

import { SearchComponent } from './search.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListModule } from '../shared/book-list/book-list.module';


const searchRoutes: Routes = [
  {
    path: '', component: SearchComponent, children: [
      {
        path: 'bookDetail/:id', component: BookDetailComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    SearchComponent,
    BookDetailComponent
  ],
  imports: [
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    CommonModule, // If you are making your own module ,should include this,
    FormsModule,
    EllipsisModule,
    BookListModule,
    RouterModule.forChild(searchRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers:[
     { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class SearchModule { }
