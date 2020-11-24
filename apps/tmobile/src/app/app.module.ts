import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EllipsisModule } from 'ngx-ellipsis';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BooksFacade } from './books/state/books.facade';
import { LayoutsModule } from './layouts/layout.module';
import { SearchService } from './books/search/search.service';
import { reducers } from './reducers';
import { BooksModule } from '../app/books/books.module';
import { environment } from '../environments/environment';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [AppComponent, PageNotFoundComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EllipsisModule,
    BooksModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Tmobile',
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [
    SearchService,
    BooksFacade
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
