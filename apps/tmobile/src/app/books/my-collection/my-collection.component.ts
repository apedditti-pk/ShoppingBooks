import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { BookItems } from '../state/book';
import { BooksFacade } from '../state/books.facade';


@Component({
  selector: 'tmobile-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.scss']
})
export class MyCollectionComponent implements OnInit {
  collectionBooks$: Observable<BookItems[]>;

  constructor(private booksFacade: BooksFacade) { }

  ngOnInit() {
    this.collectionBooks$ = this.booksFacade.collectionBooks$;
  }

}
