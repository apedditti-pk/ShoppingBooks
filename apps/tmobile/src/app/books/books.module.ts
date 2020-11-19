import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { booksReducer } from './state/books.reducer';
import { BooksEffects } from './state/books.effects'; 

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('books', booksReducer),
        EffectsModule.forFeature([BooksEffects])
    ],
    declarations:[],
    providers:[],
    exports: [
    ],
})

export class BooksModule{

}