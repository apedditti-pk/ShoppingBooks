import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatMenuModule,
  MatButtonModule
} from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormsModule }   from '@angular/forms';

import { EllipsisModule } from 'ngx-ellipsis';

import { MyCollectionComponent } from './my-collection.component';
import { BookListModule } from '../shared/book-list/book-list.module';


const myCollectionRoutes: Routes = [
  { path: '', component: MyCollectionComponent }
];


@NgModule({
  declarations: [
    MyCollectionComponent
  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    CommonModule, // If you are making your own module ,should include this,
    MatInputModule,
    FormsModule,
    EllipsisModule,
    BookListModule,
    RouterModule.forChild(myCollectionRoutes)
  ],
  exports: [
    MatSidenavModule
  ],
  providers:[
  ]
})
export class MyCollectionsModule { }
