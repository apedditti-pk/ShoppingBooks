import { Component, Input } from '@angular/core';
import { BookItems } from '../state/book';

@Component({
  selector: 'tmobile-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent{
  @Input() book : BookItems ;

  constructor() { }

}
