import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { BookItem } from '../state/book';
import { BooksFacade } from '../state/books.facade';


@Component({
  selector: 'tmobile-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchValue = '';
  books$: Observable<BookItem[]>;

  constructor(
    private route: Router,
    private booksFacade: BooksFacade) { }

  ngOnInit(): void {
    this.books$ = this.booksFacade.books$;
  }


  searchBtnClicked(){
    this.booksFacade.loadAll(this.searchValue);
  }

  bookSelected(id){
    this.route.navigate(['/bookDetail',id]);
  }

}
