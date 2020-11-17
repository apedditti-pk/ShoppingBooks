import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  purchaseListItems = [];

  constructor() { }

  setPurchaseListItems(books){
    books.forEach(book => {
      this.purchaseListItems.push(book);
    });
  }

  getPurchaseListItems(){
    return this.purchaseListItems;
  }

  emptyPurchaseListItems(){
    this.purchaseListItems = [];
  }
}