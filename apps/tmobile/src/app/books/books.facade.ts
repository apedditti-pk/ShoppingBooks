import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';


import * as fromBook from './books.reducer';
import * as BookActions from './books.actions';
import { BookItems } from './book';

@Injectable()
export class BooksFacade {

  //selecting from store 
  
  books$ = this.store.pipe(select(fromBook.getBooks)) as Observable<BookItems[]>;
  cartBooks$ = this.store.pipe(select(fromBook.getCartItems)) as Observable<BookItems[]>;
  collectionBooks$ =  this.store.pipe(select(fromBook.getCollectionItems)) as Observable<BookItems[]>;
  cartItemsCount$ = this.store.pipe(select(fromBook.getCartItemsCount)) as Observable<number>;

  constructor(
    private store: Store<fromBook.State>,
  ) { }

  //Dispatching actions

  loadAll(searchValue:string) {
    this.store.dispatch(BookActions.Load({payload :searchValue}));
  }

  addToCollections(payload: BookItems[], purchaseInfo: any){
    const x = {payload ,purchaseInfo}
    this.store.dispatch(BookActions.AddToCollections(x));
  }

  clearCart(payload: BookItems){
    this.store.dispatch(BookActions.DeleteFromCart({payload}));
  }

  addToCart(book){
    this.store.dispatch( BookActions.AddToCart(book));
  }

  
}



