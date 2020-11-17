import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { BookItems } from '../book';
import { BooksFacade } from '../books.facade';


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
