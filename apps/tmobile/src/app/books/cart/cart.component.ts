import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { BookItem } from '../state/book';
import { BooksFacade } from '../state/books.facade';

@Component({
  selector: 'tmobile-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartBooks$: Observable <BookItem[]>;

  constructor(private route: Router,
              private booksFacade: BooksFacade) { }
              

  ngOnInit() {
    this.cartBooks$ = this.booksFacade.cartBooks$;
  }

  clearCartClicked(payload:BookItem){
    this.booksFacade.clearCart(payload);
  }

  purchaseClicked(books: BookItem[]){
    this.booksFacade.purchaseListItems(books);
    this.route.navigate(['billingDetails']);
  }
  
}
