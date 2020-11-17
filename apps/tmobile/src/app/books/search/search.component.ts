import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { BookItems } from '../book';
import { BooksFacade } from '../books.facade';


@Component({
  selector: 'tmobile-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchValue = '';
  books$: Observable<BookItems[]>;

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
    this.route.navigate(['search/bookDetail',id]);
  }

}
