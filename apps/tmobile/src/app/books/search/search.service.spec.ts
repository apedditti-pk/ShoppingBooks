import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, getTestBed } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';

describe('SearchService', () => {
  let httpMock: HttpTestingController;
  let injector: TestBed;
  const initialState= [{"kind":"books#volume","id":"6JVCAwAAQBAJ","etag":"hlStCIjV/uI","selfLink":"https://www.googleapis.com/books/v1/volumes/6JVCAwAAQBAJ","volumeInfo":{"title":"Object Thinking","authors":["David West"],"publisher":"Microsoft Press","publishedDate":"2004-02-11","description":"In OBJECT THINKING, esteemed object technologist David West contends that the mindset makes the programmer—not the tools and techniques. Delving into the history, philosophy, and even politics of object-oriented programming, West reveals how the best programmers rely on analysis and conceptualization—on thinking—rather than formal process and methods. Both provocative and pragmatic, this book gives form to what’s primarily been an oral tradition among the field’s revolutionary thinkers—and it illustrates specific object-behavior practices that you can adopt for true object design and superior results. Gain an in-depth understanding of: Prerequisites and principles of object thinking. Object knowledge implicit in eXtreme Programming (XP) and Agile software development. Object conceptualization and modeling. Metaphors, vocabulary, and design for object development. Learn viable techniques for: Decomposing complex domains in terms of objects. Identifying object relationships, interactions, and constraints. Relating object behavior to internal structure and implementation design. Incorporating object thinking into XP and Agile practice.","industryIdentifiers":[{"type":"ISBN_13","identifier":"9780735637511"},{"type":"ISBN_10","identifier":"0735637512"}],"readingModes":{"text":true,"image":true},"pageCount":368,"printType":"BOOK","categories":["Computers"],"maturityRating":"NOT_MATURE","allowAnonLogging":true,"contentVersion":"3.6.5.0.preview.3","panelizationSummary":{"containsEpubBubbles":false,"containsImageBubbles":false},"imageLinks":{"smallThumbnail":"http://books.google.com/books/content?id=6JVCAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api","thumbnail":"http://books.google.com/books/content?id=6JVCAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},"language":"en","previewLink":"http://books.google.co.in/books?id=6JVCAwAAQBAJ&pg=PA268&dq=%5Bobject+Object%5D&hl=&cd=1&source=gbs_api","infoLink":"https://play.google.com/store/books/details?id=6JVCAwAAQBAJ&source=gbs_api","canonicalVolumeLink":"https://play.google.com/store/books/details?id=6JVCAwAAQBAJ"},"saleInfo":{"country":"IN","saleability":"FOR_SALE","isEbook":true,"listPrice":{"amount":2064.52,"currencyCode":"INR"},"retailPrice":{"amount":929.03,"currencyCode":"INR"},"buyLink":"https://play.google.com/store/books/details?id=6JVCAwAAQBAJ&rdid=book-6JVCAwAAQBAJ&rdot=1&source=gbs_api","offers":[{"finskyOfferType":1,"listPrice":{"amountInMicros":2064520000,"currencyCode":"INR"},"retailPrice":{"amountInMicros":929030000,"currencyCode":"INR"}}]},"accessInfo":{"country":"IN","viewability":"PARTIAL","embeddable":true,"publicDomain":false,"textToSpeechPermission":"ALLOWED","epub":{"isAvailable":false},"pdf":{"isAvailable":false},"webReaderLink":"http://play.google.com/books/reader?id=6JVCAwAAQBAJ&hl=&printsec=frontcover&source=gbs_api","accessViewStatus":"SAMPLE","quoteSharingAllowed":false},"searchInfo":{"textSnippet":"Application View Application Object w/ application ApplicationDispatcher <br>\ncomposite w/ dispatcher application&#39;s <b>object</b>-<b>object</b> dispatcher composed of <br>\nobject views Object-View Dispatcher Composite object view <b>Object</b>-<b>Object</b> <br>\nDispatcher&nbsp;..."},"type":"[Cart] Add To Cart","purchaseInfo":{"address":"flat no - 312, block a,\nsvs avaasa apartments, annapurna enclave, chandanagar","name":"arthireddy pedditti","email":"a@test.com","phoneNumber":"8019133370"}},{"kind":"books#volume","id":"6JVCAwAAQBAJ","etag":"hlStCIjV/uI","selfLink":"https://www.googleapis.com/books/v1/volumes/6JVCAwAAQBAJ","volumeInfo":{"title":"Object Thinking","authors":["David West"],"publisher":"Microsoft Press","publishedDate":"2004-02-11","description":"In OBJECT THINKING, esteemed object technologist David West contends that the mindset makes the programmer—not the tools and techniques. Delving into the history, philosophy, and even politics of object-oriented programming, West reveals how the best programmers rely on analysis and conceptualization—on thinking—rather than formal process and methods. Both provocative and pragmatic, this book gives form to what’s primarily been an oral tradition among the field’s revolutionary thinkers—and it illustrates specific object-behavior practices that you can adopt for true object design and superior results. Gain an in-depth understanding of: Prerequisites and principles of object thinking. Object knowledge implicit in eXtreme Programming (XP) and Agile software development. Object conceptualization and modeling. Metaphors, vocabulary, and design for object development. Learn viable techniques for: Decomposing complex domains in terms of objects. Identifying object relationships, interactions, and constraints. Relating object behavior to internal structure and implementation design. Incorporating object thinking into XP and Agile practice.","industryIdentifiers":[{"type":"ISBN_13","identifier":"9780735637511"},{"type":"ISBN_10","identifier":"0735637512"}],"readingModes":{"text":true,"image":true},"pageCount":368,"printType":"BOOK","categories":["Computers"],"maturityRating":"NOT_MATURE","allowAnonLogging":true,"contentVersion":"3.6.5.0.preview.3","panelizationSummary":{"containsEpubBubbles":false,"containsImageBubbles":false},"imageLinks":{"smallThumbnail":"http://books.google.com/books/content?id=6JVCAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api","thumbnail":"http://books.google.com/books/content?id=6JVCAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},"language":"en","previewLink":"http://books.google.co.in/books?id=6JVCAwAAQBAJ&pg=PA268&dq=%5Bobject+Object%5D&hl=&cd=1&source=gbs_api","infoLink":"https://play.google.com/store/books/details?id=6JVCAwAAQBAJ&source=gbs_api","canonicalVolumeLink":"https://play.google.com/store/books/details?id=6JVCAwAAQBAJ"},"saleInfo":{"country":"IN","saleability":"FOR_SALE","isEbook":true,"listPrice":{"amount":2064.52,"currencyCode":"INR"},"retailPrice":{"amount":929.03,"currencyCode":"INR"},"buyLink":"https://play.google.com/store/books/details?id=6JVCAwAAQBAJ&rdid=book-6JVCAwAAQBAJ&rdot=1&source=gbs_api","offers":[{"finskyOfferType":1,"listPrice":{"amountInMicros":2064520000,"currencyCode":"INR"},"retailPrice":{"amountInMicros":929030000,"currencyCode":"INR"}}]},"accessInfo":{"country":"IN","viewability":"PARTIAL","embeddable":true,"publicDomain":false,"textToSpeechPermission":"ALLOWED","epub":{"isAvailable":false},"pdf":{"isAvailable":false},"webReaderLink":"http://play.google.com/books/reader?id=6JVCAwAAQBAJ&hl=&printsec=frontcover&source=gbs_api","accessViewStatus":"SAMPLE","quoteSharingAllowed":false},"searchInfo":{"textSnippet":"Application View Application Object w/ application ApplicationDispatcher <br>\ncomposite w/ dispatcher application&#39;s <b>object</b>-<b>object</b> dispatcher composed of <br>\nobject views Object-View Dispatcher Composite object view <b>Object</b>-<b>Object</b> <br>\nDispatcher&nbsp;..."},"type":"[Cart] Add To Cart","purchaseInfo":{"address":"flat no - 312, block a,\nsvs avaasa apartments, annapurna enclave, chandanagar","name":"arthireddy pedditti","email":"a@test.com","phoneNumber":"8019133370"}}]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    })
    .compileComponents();
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  }));

  
  afterEach(() => {
    httpMock.verify();
  });  

  

  it('should be created', () => {
    const service: SearchService = TestBed.get(SearchService);
    expect(service).toBeTruthy();
  });

  it('getBooks() should return data', () => {
    const service: SearchService = TestBed.get(SearchService);
    const searchValue = 'angular';

    service.getBooks(searchValue).subscribe((res) => {
      expect(res).toEqual(initialState);
    });

    
    const req = httpMock.expectOne('https://www.googleapis.com/books/v1/volumes?q=angular');
    expect(req.request.method).toBe('GET');
    req.flush(initialState);
  });

  it('getBooks() should return error and call handleError() method', () => {
    const service: SearchService = TestBed.get(SearchService);
    const searchValue = 'angular';

    service.getBooks(searchValue).subscribe(
      res => fail('should have failed with the 404 error'),
                (error: HttpErrorResponse) => {
                    expect(error.statusText).toEqual('Not Found');
                    expect(service.handleError).toHaveBeenCalled();
              }
    );

   const req = httpMock.expectOne('https://www.googleapis.com/books/v1/volumes?q=angular');
    expect(req.request.method).toBe('GET');
    req.flush({ errorMessage: '404 Not Found' }, { status: 404, statusText: 'Not Found' });
  });


});
