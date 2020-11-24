import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';


import * as fromBook from './books.reducer';
import * as BookActions from './books.actions';
import {  BookItem } from './book';

@Injectable()
export class BooksFacade {

  //selecting from store 
  
  books$ = this.store.pipe(select(fromBook.getBooks)) as Observable<BookItem[]>;
  cartBooks$ = this.store.pipe(select(fromBook.getCartItems)) as Observable<BookItem[]>;
  collectionBooks$ =  this.store.pipe(select(fromBook.getCollectionItems)) as Observable<BookItem[]>;
  cartItemsCount$ = this.store.pipe(select(fromBook.getCartItemsCount)) as Observable<number>;
  purchaseListItems$ = this.store.pipe(select(fromBook.getPurchaseItems)) as Observable<BookItem[]>;

  constructor(
    private store: Store<fromBook.State>,
  ) { }

  //Dispatching actions

  loadAll(searchValue:string) {
    this.store.dispatch(BookActions.Load({payload :searchValue}));
  }

  addToCollections(payload: BookItem[], purchaseInfo: object){
    const x = {payload ,purchaseInfo};
    this.store.dispatch(BookActions.AddToCollections(x));
  }

  clearCart(payload: BookItem){
    this.store.dispatch(BookActions.DeleteFromCart({payload}));
  }

  addToCart(book: BookItem){
    this.store.dispatch( BookActions.AddToCart({payload : book}));
  }

  purchaseListItems(books : BookItem[]){
    this.store.dispatch( BookActions.AddToPurchaseList({payload : books}));
  }

  
}



