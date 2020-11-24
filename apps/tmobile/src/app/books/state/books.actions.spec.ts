import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { provideMockStore } from '@ngrx/store/testing';

import { SearchService } from '../search/search.service';
import * as BookActions from './books.actions';
import { Load } from './books.actions';
import { Book } from './book';

describe('Books Actions', () => {
  const initialState : Book= {
    kind: 'books#volumes',
    totalItems: 1340,
      items: [
      {
      kind: 'books#volume',
      id: '0BSOg0oHhZ0C',
      etag: 'sWJBeRbxMK0',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/0BSOg0oHhZ0C',
      volumeInfo: {
        title: 'Angular Momentum in Quantum Mechanics',
        publisher: 'Princeton University Press',
        publishedDate: '1996',
        description: 'This book offers a concise introduction to the angular momentum, one of the most fundamental quantities in all of quantum mechanics. Beginning with the quantization of angular momentum, spin angular momentum, and the orbital angular momentum, the author goes on to discuss the Clebsch-Gordan coefficients for a two-component system. After developing the necessary mathematics, specifically spherical tensors and tensor operators, the author then investigates the 3-j, 6-j, and 9-j symbols. Throughout, the author provides practical applications to atomic, molecular, and nuclear physics. These include partial-wave expansions, the emission and absorption of particles, the proton and electron quadrupole moment, matrix element calculation in practice, and the properties of the symmetrical top molecule.',
        pageCount: 146,
        printType: 'BOOK',
        averageRating: 4,
        ratingsCount: 1,
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '2.1.2.0.preview.1',
        imageLinks: {
          smallThumbnail: 'http://books.google.com/books/content?id=0BSOg0oHhZ0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail: 'http://books.google.com/books/content?id=0BSOg0oHhZ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
        },
        language: 'en',
        previewLink: 'http://books.google.co.in/books?id=0BSOg0oHhZ0C&pg=PA12&dq=angular&hl=&cd=1&source=gbs_api',
        infoLink: 'http://books.google.co.in/books?id=0BSOg0oHhZ0C&dq=angular&hl=&source=gbs_api',
        canonicalVolumeLink: 'https://books.google.com/books/about/Angular_Momentum_in_Quantum_Mechanics.html?hl=&id=0BSOg0oHhZ0C'
      },
      saleInfo: {
        country: 'IN',
        saleability: 'NOT_FOR_SALE',
        isEbook: false
      },
      accessInfo: {
        country: 'IN',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false
        },
        pdf: {
          isAvailable: true,
          acsTokenLink: 'http://books.google.co.in/books/download/Angular_Momentum_in_Quantum_Mechanics-sample-pdf.acsm?id=0BSOg0oHhZ0C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
        },
        webReaderLink: 'http://play.google.com/books/reader?id=0BSOg0oHhZ0C&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false
      },
      searchInfo: {
        textSnippet: '<b>Angular</b> Momentum of a System of Particles PRELIMINARY REMARKS . In <br>\nclassical mechanics the <b>angular</b> momentum of a system of n particles relative to a <br>\npoint 0 is given by ( 2.2.1 ) 1 = įt : X : = ΣΙ . where Ii , Pi , and L ; are the position <br>\nvector&nbsp;...'
      }
      }
    ]
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService, provideMockStore({})],
    }).compileComponents();
  }));

  it('should create action for Load with passed data', () => {
    const payload = { payload: 'angular' };
    expect(Load(payload)).toEqual({
      type: '[Book] Load Book',
      payload: 'angular',
    });
  });

  it('should create action for LoadSuccess with passed data', () => {
   
    const payload = { payload: initialState };
    expect(BookActions.LoadSuccess(payload)).toEqual({
      type: '[Book] Load Book Success',
      payload: initialState,
    });
  });

  it('should create action for LoadFail', () => {
    const payload = { payload: 'error' };
    expect(BookActions.LoadFail(payload)).toEqual({
      type: '[Book] Load Book Failure',
      payload: 'error',
    });
  });

  it('should create action for AddToCart with passed data', () => {
    const payload = { payload: initialState };
    expect(BookActions.AddToCart(payload)).toEqual({
      type: '[Cart] Add To Cart',
      payload: initialState,
    });
  });

  it('should create action for AddToCollections with passed data', () => {
    const purchaseInfo = [
      {
        address: 'flat no - 312, block a,\nsvs avaasa apartments, annapurna enclave, chandanagar',
        name: 'arthireddy pedditti',
        email: 'a@a.com',
        phoneNumber: '8019133370'
      }
    ];
    const collectionMock = [
      {
        kind: 'books#volume',
        id: '0BSOg0oHhZ0C',
        etag: 'sWJBeRbxMK0',
        selfLink: 'https://www.googleapis.com/books/v1/volumes/0BSOg0oHhZ0C',
        volumeInfo: {
          title: 'Angular Momentum in Quantum Mechanics',
          authors: [
            'A. R. Edmonds'
          ],
          publisher: 'Princeton University Press',
          publishedDate: '1996',
          description: 'This book offers a concise introduction to the angular momentum, one of the most fundamental quantities in all of quantum mechanics. Beginning with the quantization of angular momentum, spin angular momentum, and the orbital angular momentum, the author goes on to discuss the Clebsch-Gordan coefficients for a two-component system. After developing the necessary mathematics, specifically spherical tensors and tensor operators, the author then investigates the 3-j, 6-j, and 9-j symbols. Throughout, the author provides practical applications to atomic, molecular, and nuclear physics. These include partial-wave expansions, the emission and absorption of particles, the proton and electron quadrupole moment, matrix element calculation in practice, and the properties of the symmetrical top molecule.',
          industryIdentifiers: [
            {
              type: 'ISBN_10',
              identifier: '0691025894'
            },
            {
              type: 'ISBN_13',
              identifier: '9780691025896'
            }
          ],
          readingModes: {
            text: false,
            image: true
          },
          pageCount: 146,
          printType: 'BOOK',
          categories: [
            'Science'
          ],
          averageRating: 4,
          ratingsCount: 1,
          maturityRating: 'NOT_MATURE',
          allowAnonLogging: false,
          contentVersion: '2.1.2.0.preview.1',
          panelizationSummary: {
            containsEpubBubbles: false,
            containsImageBubbles: false
          },
          imageLinks: {
            smallThumbnail: 'http://books.google.com/books/content?id=0BSOg0oHhZ0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            thumbnail: 'http://books.google.com/books/content?id=0BSOg0oHhZ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
          },
          language: 'en',
          previewLink: 'http://books.google.co.in/books?id=0BSOg0oHhZ0C&pg=PA12&dq=angular&hl=&cd=1&source=gbs_api',
          infoLink: 'http://books.google.co.in/books?id=0BSOg0oHhZ0C&dq=angular&hl=&source=gbs_api',
          canonicalVolumeLink: 'https://books.google.com/books/about/Angular_Momentum_in_Quantum_Mechanics.html?hl=&id=0BSOg0oHhZ0C'
        },
        saleInfo: {
          country: 'IN',
          saleability: 'NOT_FOR_SALE',
          isEbook: false
        },
        accessInfo: {
          country: 'IN',
          viewability: 'PARTIAL',
          embeddable: true,
          publicDomain: false,
          textToSpeechPermission: 'ALLOWED',
          epub: {
            isAvailable: false
          },
          pdf: {
            isAvailable: true,
            acsTokenLink: 'http://books.google.co.in/books/download/Angular_Momentum_in_Quantum_Mechanics-sample-pdf.acsm?id=0BSOg0oHhZ0C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
          },
          webReaderLink: 'http://play.google.com/books/reader?id=0BSOg0oHhZ0C&hl=&printsec=frontcover&source=gbs_api',
          accessViewStatus: 'SAMPLE',
          quoteSharingAllowed: false
        },
        searchInfo: {
          textSnippet: '<b>Angular</b> Momentum of a System of Particles PRELIMINARY REMARKS . In <br>\nclassical mechanics the <b>angular</b> momentum of a system of n particles relative to a <br>\npoint 0 is given by ( 2.2.1 ) 1 = įt : X : = ΣΙ . where Ii , Pi , and L ; are the position <br>\nvector&nbsp;...'
        }
      }
    ];
    const payload = { payload: collectionMock, purchaseInfo};
    expect(BookActions.AddToCollections(payload)).toEqual({
      type: '[Collections] Add To Collections',
      payload: collectionMock,
      purchaseInfo
    });
  });

});
