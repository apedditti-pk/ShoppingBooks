import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  MatIconModule,
  MatMenuModule,
  MatButtonModule
} from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule }   from '@angular/forms';
import { EllipsisModule } from 'ngx-ellipsis';

import { BookListComponent } from './book-list.component';

@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    CommonModule, // If you are making your own module ,should include this,
    MatInputModule,
    FormsModule,
    EllipsisModule
  ],
  exports: [
      BookListComponent
  ],
  providers:[
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class BookListModule { }
