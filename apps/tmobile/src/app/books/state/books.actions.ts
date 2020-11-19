import { createAction , props} from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book, BookItems } from './book';

export const Load = createAction('[Book] Load Book',props<{ payload: string }>());
export const LoadSuccess = createAction('[Book] Load Book Success', props<{ payload: Book }>());
export const LoadFail = createAction('[Book] Load Book Failure', props<{ payload: string }>());
export const AddToCart = createAction('[Cart] Add To Cart', props<{ payload: Book }>());
export const DeleteFromCart = createAction('[Cart] Delete Book From Cart', props<{ payload: BookItems }>());
export const AddToCollections = createAction('[Collections] Add To Collections', props<{  payload: BookItems[], purchaseInfo }>());
export const AddToPurchaseList = createAction('[Purchase List] Add To PurchaseList', props<{  payload: BookItems[]}>());
