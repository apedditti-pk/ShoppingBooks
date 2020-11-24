import { createAction , props} from '@ngrx/store';
import { Book, BookItem } from './book';

export const Load = createAction('[Book] Load Book',props<{ payload: string }>());
export const LoadSuccess = createAction('[Book] Load Book Success', props<{ payload: Book }>());
export const LoadFail = createAction('[Book] Load Book Failure', props<{ payload: string }>());
export const AddToCart = createAction('[Cart] Add To Cart', props<{ payload: BookItem }>());
export const DeleteFromCart = createAction('[Cart] Delete Book From Cart', props<{ payload: BookItem }>());
export const AddToCollections = createAction('[Collections] Add To Collections', props<{  payload: BookItem[], purchaseInfo }>());
export const AddToPurchaseList = createAction('[Purchase List] Add To PurchaseList', props<{  payload: BookItem[]}>());
