import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { BookItems } from '../state/book';
import { BooksService } from '../books.service';
import { BooksFacade } from '../state/books.facade';

@Component({
  selector: 'tmobile-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartBooks$: Observable <BookItems[]>;

  constructor(private route: Router,
              private booksService :BooksService,
              private booksFacade: BooksFacade) { }
              

  ngOnInit() {
    this.cartBooks$ = this.booksFacade.cartBooks$;
  }

  clearCartClicked(payload:BookItems){
    this.booksFacade.clearCart(payload);
  }

  purchaseClicked(books){
    this.booksService.setPurchaseListItems(books);
    this.route.navigate(['billingDetails']);
  }
  
}
