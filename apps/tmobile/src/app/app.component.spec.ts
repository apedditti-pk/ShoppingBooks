import { HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EllipsisModule } from 'ngx-ellipsis';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksFacade } from './books/state/books.facade';
import { BooksModule } from './books/books.module';
import { SearchService } from './books/search/search.service';
import { LayoutsModule } from './layouts/layout.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { reducers } from './reducers';
import {APP_BASE_HREF} from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PageNotFoundComponent
      ],
      providers:[
        SearchService,
        BooksFacade,
        {provide: APP_BASE_HREF, useValue : '/' }
      ],
      imports:[
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
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
