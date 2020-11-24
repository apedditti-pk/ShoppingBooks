import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Action, createReducer, on } from '@ngrx/store';
import { Book, BookItem } from './book';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as Books from './books.actions';

export interface BooksState extends EntityState<Book> {
  cartItems: [];
  collectionItems: [];
}

export const bookAdapter: EntityAdapter<Book> = createEntityAdapter<Book>({});

export const initialState: BooksState = bookAdapter.getInitialState({
  loaded: false,
  cartItems: [],
  collectionItems: [],
  searchKey: '',
  list: [],
  purchaseList :[]
});

export interface BooksState {
  list: [];
  cartItems: [];
  collectionItems: [];
  searchKey: string;
  loaded: boolean;
  purchaseList : BookItem[]
}

export const booksAdapter = createEntityAdapter<BooksState>();

export interface State extends EntityState<BooksState> {}


const getBookFeatureState = createFeatureSelector<BooksState>('books');

export const getBooks = createSelector(
  // you need to export the create selector in order to utilize in components
  getBookFeatureState,
  (state: BooksState) => state.list
);

export const getPurchaseItems = createSelector( // you need to export the create selector in order to utilize in components
    getBookFeatureState,
    (state: BooksState) => state.purchaseList
);

export const getCartItems = createSelector(
  // you need to export the create selector in order to utilize in components
  getBookFeatureState,
  (state: BooksState) => state.cartItems
);


export const getCollectionItems = createSelector(
  // you need to export the create selector in order to utilize in components
  getBookFeatureState,
  (state: BooksState) => state.collectionItems
);

export const getCartItemsCount = createSelector(
  // you need to export the create selector in order to utilize in components
  getBookFeatureState,
  (state: BooksState) => state.cartItems.length
);

const reducer = createReducer(
  initialState,
  on(Books.LoadSuccess, (state, { payload }) => {
    return Object.assign({
      ...state,
      loaded: true,
      searchKey: payload,
      list: payload.items,
    });
  }),
  
  on(Books.LoadFail, (state) => {
    return Object.assign({
      ...state,
      list: {},
    });
  }),

  on(Books.AddToCart, (state, payload) => {
    return Object.assign({
      ...state,
      cartItems: [...state.cartItems, payload.payload],
    });
  }),

  on(Books.DeleteFromCart, (state, {payload}) => {
    return Object.assign({
      ...state,
      cartItems: state.cartItems.filter((item:BookItem) => payload.id !== item.id),
    });
  }),

  on(Books.AddToCollections, (state, { payload, purchaseInfo }) => {
    const newData = payload.map((item) =>
      Object.assign({}, item, { purchaseInfo: purchaseInfo[0] })
    );
    return Object.assign({
      ...state,
      collectionItems: state.collectionItems.concat(newData),
    });
  }),

  on(Books.AddToPurchaseList, (state, payload) => {
    return Object.assign({
      ...state,
      purchaseList: payload.payload,
    });
  }),
);

export function booksReducer(state: BooksState | undefined, action: Action) {
  return reducer(state, action);
}

