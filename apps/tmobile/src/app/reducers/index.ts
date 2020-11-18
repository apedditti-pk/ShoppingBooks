import { ActionReducerMap } from '@ngrx/store';
import { booksReducer } from '../books/state/books.reducer';

export const reducers: ActionReducerMap<any> = {
    books : booksReducer
}