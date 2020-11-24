import { async, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs/internal/observable/of';
import { provideMockActions } from '@ngrx/effects/testing';

import { SearchService } from '../search/search.service';
import * as BookActions from './books.actions';
import { Load } from './books.actions';

describe('Books Actions', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [
            HttpClientTestingModule
          ],
          providers: [
            SearchService,
            provideMockStore({}),
          ],
        }).compileComponents();
    }));
    
    it('should create an action', () => {
    });


   
});