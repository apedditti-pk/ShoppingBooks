import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params ,Router} from '@angular/router';

import { Store, select } from '@ngrx/store';

import * as fromBook from '../../books.reducer';
import { BookItems } from '../../book';
import { BooksService } from '../../books.service';
import { BooksFacade } from '../../books.facade';


@Component({
  selector: 'tmobile-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book: BookItems;
  bookId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private store: Store<any>,
    private booksService: BooksService,
    private booksFacade: BooksFacade
  ) { }

  ngOnInit() {
    this.getBook();
  }

  getBook(): void {
    this.activatedRoute.params.subscribe((params: Params) => this.bookId = params['id']);
    this.store.pipe(select(fromBook.getBooks)).subscribe((books)=>{
      this.book = books.find((book: BookItems) => {
        return book.id === this.bookId;
      });
    });
  }

  addToCart(book){
    this.booksFacade.addToCart(book);
  }

  buyNow(book){
    this.booksService.setPurchaseListItems([book]);
    this.route.navigate(['billingDetails']);
  }

}
