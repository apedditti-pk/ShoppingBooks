import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
import * as Booksreducer from './books.reducer';
 
export interface BooksState {
  books: Booksreducer.BooksState;
}
 
// export const reducers: ActionReducerMap<BooksState> = {
//   books: Booksreducer.booksReducer
// }
 
export const selectFeature = createFeatureSelector<Booksreducer.BooksState>('books');
 
export const getBooks = createSelector(selectFeature, Booksreducer.getBooks);
export const getCartItems = createSelector(selectFeature, Booksreducer.getCartItems );
export const getCollectionItems = createSelector(selectFeature, Booksreducer.getCollectionItems);
export const getCartItemsCount = createSelector(selectFeature, Booksreducer.getCartItemsCount);
 
export const booksSelector = {
    getBooks,
    getCartItems,
    getCollectionItems,
    getCartItemsCount
}