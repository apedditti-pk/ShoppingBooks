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
import { EllipsisModule } from 'ngx-ellipsis';

import { CartComponent } from './cart.component';
import { BookListModule } from '../shared/book-list/book-list.module';



const cartRoutes: Routes = [
  { path: '', component: CartComponent }
];

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    CommonModule, // If you are making your own module ,should include this,
    MatInputModule,
    FormsModule,
    EllipsisModule,
    RouterModule.forChild(cartRoutes),
    BookListModule
  ],
  exports: [
  ],
  providers:[
  ]
})
export class CartModule { }
