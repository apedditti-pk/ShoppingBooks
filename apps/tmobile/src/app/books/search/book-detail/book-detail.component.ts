import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params ,Router} from '@angular/router';

import { Store, select } from '@ngrx/store';

import * as fromBook from '../../state/books.reducer';
import { Book, BookItem } from '../../state/book';
import { BooksFacade } from '../../state/books.facade';


@Component({
  selector: 'tmobile-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book: BookItem;
  bookId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private store: Store<fromBook.State>,
    private booksFacade: BooksFacade
  ) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    this.activatedRoute.params.subscribe((params: Params) => this.bookId = params['id']);
    this.store.pipe(select(fromBook.getBooks)).subscribe((books)=>{
      this.book = books.find((book: BookItem) => {
        return book.id === this.bookId;
      });
    });
  }

  addToCart(book : BookItem){
    this.booksFacade.addToCart(book);
  }

  buyNow(book: BookItem){
    this.booksFacade.purchaseListItems([book]);
    this.route.navigate(['billingDetails']);
  }

}
