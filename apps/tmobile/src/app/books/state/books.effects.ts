import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';

import { SearchService } from '../search/search.service';

/* NgRx */
import { Actions, ofType , createEffect} from '@ngrx/effects';
import * as bookActions from './books.actions';

@Injectable()
export class BooksEffects {

  constructor(private searchService: SearchService,
              private actions$: Actions) { }

  // @Effect()
  loadProducts$ = createEffect(() => 
  this.actions$.pipe(
    ofType(bookActions.Load),
    mergeMap((action$) =>
      this.searchService.getBooks(action$.payload).pipe(// calls books service to get books
        map(books => ({ type: '[Book] Load Book Success', payload: books })),// if loading is successfull it dispatches loadsuccess action
        catchError(err => of({ type: '[Book] Load Book Failure', payload: err })) // if fails dispatches load fail action
      )
    )
  ));
  
  

}
