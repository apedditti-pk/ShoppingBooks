import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MemoizedSelector } from '@ngrx/store';
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatMenuModule,
  MatButtonModule,
  MatInputModule
} from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';

import { BookItem } from '../state/book';
import * as fromBook from '../state/books.reducer';
import { BooksFacade } from '../state/books.facade';
import { SearchComponent } from './search.component';
import { RouterTestingModule } from '@angular/router/testing';
import { EllipsisModule } from 'ngx-ellipsis';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListModule } from '../shared/book-list/book-list.module';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let mockStore: MockStore;
  let mockCollectionBooksSelector: MemoizedSelector<fromBook.State, any>;
  let router;

  const initialState = [{"kind":"books#volume","id":"6JVCAwAAQBAJ","etag":"hlStCIjV/uI","selfLink":"https://www.googleapis.com/books/v1/volumes/6JVCAwAAQBAJ","volumeInfo":{"title":"Object Thinking","authors":["David West"],"publisher":"Microsoft Press","publishedDate":"2004-02-11","description":"In OBJECT THINKING, esteemed object technologist David West contends that the mindset makes the programmer—not the tools and techniques. Delving into the history, philosophy, and even politics of object-oriented programming, West reveals how the best programmers rely on analysis and conceptualization—on thinking—rather than formal process and methods. Both provocative and pragmatic, this book gives form to what’s primarily been an oral tradition among the field’s revolutionary thinkers—and it illustrates specific object-behavior practices that you can adopt for true object design and superior results. Gain an in-depth understanding of: Prerequisites and principles of object thinking. Object knowledge implicit in eXtreme Programming (XP) and Agile software development. Object conceptualization and modeling. Metaphors, vocabulary, and design for object development. Learn viable techniques for: Decomposing complex domains in terms of objects. Identifying object relationships, interactions, and constraints. Relating object behavior to internal structure and implementation design. Incorporating object thinking into XP and Agile practice.","industryIdentifiers":[{"type":"ISBN_13","identifier":"9780735637511"},{"type":"ISBN_10","identifier":"0735637512"}],"readingModes":{"text":true,"image":true},"pageCount":368,"printType":"BOOK","categories":["Computers"],"maturityRating":"NOT_MATURE","allowAnonLogging":true,"contentVersion":"3.6.5.0.preview.3","panelizationSummary":{"containsEpubBubbles":false,"containsImageBubbles":false},"imageLinks":{"smallThumbnail":"http://books.google.com/books/content?id=6JVCAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api","thumbnail":"http://books.google.com/books/content?id=6JVCAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},"language":"en","previewLink":"http://books.google.co.in/books?id=6JVCAwAAQBAJ&pg=PA268&dq=%5Bobject+Object%5D&hl=&cd=1&source=gbs_api","infoLink":"https://play.google.com/store/books/details?id=6JVCAwAAQBAJ&source=gbs_api","canonicalVolumeLink":"https://play.google.com/store/books/details?id=6JVCAwAAQBAJ"},"saleInfo":{"country":"IN","saleability":"FOR_SALE","isEbook":true,"listPrice":{"amount":2064.52,"currencyCode":"INR"},"retailPrice":{"amount":929.03,"currencyCode":"INR"},"buyLink":"https://play.google.com/store/books/details?id=6JVCAwAAQBAJ&rdid=book-6JVCAwAAQBAJ&rdot=1&source=gbs_api","offers":[{"finskyOfferType":1,"listPrice":{"amountInMicros":2064520000,"currencyCode":"INR"},"retailPrice":{"amountInMicros":929030000,"currencyCode":"INR"}}]},"accessInfo":{"country":"IN","viewability":"PARTIAL","embeddable":true,"publicDomain":false,"textToSpeechPermission":"ALLOWED","epub":{"isAvailable":false},"pdf":{"isAvailable":false},"webReaderLink":"http://play.google.com/books/reader?id=6JVCAwAAQBAJ&hl=&printsec=frontcover&source=gbs_api","accessViewStatus":"SAMPLE","quoteSharingAllowed":false},"searchInfo":{"textSnippet":"Application View Application Object w/ application ApplicationDispatcher <br>\ncomposite w/ dispatcher application&#39;s <b>object</b>-<b>object</b> dispatcher composed of <br>\nobject views Object-View Dispatcher Composite object view <b>Object</b>-<b>Object</b> <br>\nDispatcher&nbsp;..."},"type":"[Cart] Add To Cart","purchaseInfo":{"address":"flat no - 312, block a,\nsvs avaasa apartments, annapurna enclave, chandanagar","name":"arthireddy pedditti","email":"a@test.com","phoneNumber":"8019133370"}},{"kind":"books#volume","id":"6JVCAwAAQBAJ","etag":"hlStCIjV/uI","selfLink":"https://www.googleapis.com/books/v1/volumes/6JVCAwAAQBAJ","volumeInfo":{"title":"Object Thinking","authors":["David West"],"publisher":"Microsoft Press","publishedDate":"2004-02-11","description":"In OBJECT THINKING, esteemed object technologist David West contends that the mindset makes the programmer—not the tools and techniques. Delving into the history, philosophy, and even politics of object-oriented programming, West reveals how the best programmers rely on analysis and conceptualization—on thinking—rather than formal process and methods. Both provocative and pragmatic, this book gives form to what’s primarily been an oral tradition among the field’s revolutionary thinkers—and it illustrates specific object-behavior practices that you can adopt for true object design and superior results. Gain an in-depth understanding of: Prerequisites and principles of object thinking. Object knowledge implicit in eXtreme Programming (XP) and Agile software development. Object conceptualization and modeling. Metaphors, vocabulary, and design for object development. Learn viable techniques for: Decomposing complex domains in terms of objects. Identifying object relationships, interactions, and constraints. Relating object behavior to internal structure and implementation design. Incorporating object thinking into XP and Agile practice.","industryIdentifiers":[{"type":"ISBN_13","identifier":"9780735637511"},{"type":"ISBN_10","identifier":"0735637512"}],"readingModes":{"text":true,"image":true},"pageCount":368,"printType":"BOOK","categories":["Computers"],"maturityRating":"NOT_MATURE","allowAnonLogging":true,"contentVersion":"3.6.5.0.preview.3","panelizationSummary":{"containsEpubBubbles":false,"containsImageBubbles":false},"imageLinks":{"smallThumbnail":"http://books.google.com/books/content?id=6JVCAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api","thumbnail":"http://books.google.com/books/content?id=6JVCAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},"language":"en","previewLink":"http://books.google.co.in/books?id=6JVCAwAAQBAJ&pg=PA268&dq=%5Bobject+Object%5D&hl=&cd=1&source=gbs_api","infoLink":"https://play.google.com/store/books/details?id=6JVCAwAAQBAJ&source=gbs_api","canonicalVolumeLink":"https://play.google.com/store/books/details?id=6JVCAwAAQBAJ"},"saleInfo":{"country":"IN","saleability":"FOR_SALE","isEbook":true,"listPrice":{"amount":2064.52,"currencyCode":"INR"},"retailPrice":{"amount":929.03,"currencyCode":"INR"},"buyLink":"https://play.google.com/store/books/details?id=6JVCAwAAQBAJ&rdid=book-6JVCAwAAQBAJ&rdot=1&source=gbs_api","offers":[{"finskyOfferType":1,"listPrice":{"amountInMicros":2064520000,"currencyCode":"INR"},"retailPrice":{"amountInMicros":929030000,"currencyCode":"INR"}}]},"accessInfo":{"country":"IN","viewability":"PARTIAL","embeddable":true,"publicDomain":false,"textToSpeechPermission":"ALLOWED","epub":{"isAvailable":false},"pdf":{"isAvailable":false},"webReaderLink":"http://play.google.com/books/reader?id=6JVCAwAAQBAJ&hl=&printsec=frontcover&source=gbs_api","accessViewStatus":"SAMPLE","quoteSharingAllowed":false},"searchInfo":{"textSnippet":"Application View Application Object w/ application ApplicationDispatcher <br>\ncomposite w/ dispatcher application&#39;s <b>object</b>-<b>object</b> dispatcher composed of <br>\nobject views Object-View Dispatcher Composite object view <b>Object</b>-<b>Object</b> <br>\nDispatcher&nbsp;..."},"type":"[Cart] Add To Cart","purchaseInfo":{"address":"flat no - 312, block a,\nsvs avaasa apartments, annapurna enclave, chandanagar","name":"arthireddy pedditti","email":"a@test.com","phoneNumber":"8019133370"}}];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SearchComponent,
        BookDetailComponent 
      ],
      imports: [
        BrowserAnimationsModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatInputModule,
        FormsModule,
        EllipsisModule,
        BookListModule,
        RouterTestingModule.withRoutes([
          {path: 'search/bookDetail/:id', component: BookDetailComponent}
        ])
      ],
      providers:[
        BooksFacade,
        provideMockStore({
          initialState
        })
      ]
    })
    .compileComponents();

    mockStore = TestBed.get(MockStore);
    mockCollectionBooksSelector = mockStore.overrideSelector(
      fromBook.getBooks,
      initialState
    );
    router = TestBed.get(Router);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign books$ when component is resolved', async(() => {
    fixture.detectChanges();
    component.books$.forEach(element => {
        expect(element[0].id).toEqual('6JVCAwAAQBAJ');
    });
  }));

  it('should call clearCart() in Facade when clearCartClicked() in component is executed', inject(
    [BooksFacade],
    (facade : BooksFacade) => {
    const serachBtnClickedSpy = spyOn(component, 'searchBtnClicked').and.callThrough();
    const loadAllFacadeSpy = spyOn(facade, 'loadAll');

    component.searchBtnClicked();
    fixture.detectChanges();

    expect(serachBtnClickedSpy).toHaveBeenCalled();
    expect(loadAllFacadeSpy).toHaveBeenCalled();

  }));

  it('should call clearCart() in Facade when clearCartClicked() in component is executed', async(() => {
    const bookSelectedSpy = spyOn(component, 'bookSelected').and.callThrough();
    const navigateSpy = spyOn(router, 'navigate');

    component.bookSelected('2dOq4BHuASwC');
    fixture.detectChanges();

    expect(bookSelectedSpy).toHaveBeenCalledWith('2dOq4BHuASwC');
    expect(navigateSpy).toHaveBeenCalled();

  }));
 

});
