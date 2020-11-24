import { Component, Input } from '@angular/core';
import { BookItem } from '../../state/book';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent{
  @Input() book : BookItem ;

  constructor() { }

}
