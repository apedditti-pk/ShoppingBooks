import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { BookItem } from '../state/book';
import { BooksFacade } from '../state/books.facade';


@Component({
  selector: 'tmobile-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.scss']
})
export class MyCollectionComponent implements OnInit {
  collectionBooks$: Observable<BookItem[]>;

  constructor(private booksFacade: BooksFacade) { }

  ngOnInit() {
    this.collectionBooks$ = this.booksFacade.collectionBooks$;
  }

}
