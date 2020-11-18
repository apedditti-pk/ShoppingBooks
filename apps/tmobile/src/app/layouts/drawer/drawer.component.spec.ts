import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatMenuModule, MatButtonModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { MemoizedSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs/internal/observable/of';

import { BooksFacade } from '../../books/state/books.facade';
import { SideNavService } from '../side-nav.service';
import * as fromBook from '../../books/state/books.reducer';
import { DrawerComponent } from './drawer.component';

describe('DrawerComponent', () => {
  let component: DrawerComponent;
  let fixture: ComponentFixture<DrawerComponent>;
  let mockStore: MockStore;
  let mockCollectionBooksSelector: MemoizedSelector<fromBook.State, any>;
  const initialState = [{
    "kind": "books#volume",
    "id": "0BSOg0oHhZ0C",
    "etag": "sWJBeRbxMK0",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/0BSOg0oHhZ0C",
    "volumeInfo": {
      "title": "Angular Momentum in Quantum Mechanics",
      "authors": [
        "A. R. Edmonds"
      ],
      "publisher": "Princeton University Press",
      "publishedDate": "1996",
      "description": "This book offers a concise introduction to the angular momentum, one of the most fundamental quantities in all of quantum mechanics. Beginning with the quantization of angular momentum, spin angular momentum, and the orbital angular momentum, the author goes on to discuss the Clebsch-Gordan coefficients for a two-component system. After developing the necessary mathematics, specifically spherical tensors and tensor operators, the author then investigates the 3-j, 6-j, and 9-j symbols. Throughout, the author provides practical applications to atomic, molecular, and nuclear physics. These include partial-wave expansions, the emission and absorption of particles, the proton and electron quadrupole moment, matrix element calculation in practice, and the properties of the symmetrical top molecule.",
      "industryIdentifiers": [
        {
          "type": "ISBN_10",
          "identifier": "0691025894"
        },
        {
          "type": "ISBN_13",
          "identifier": "9780691025896"
        }
      ],
      "readingModes": {
        "text": false,
        "image": true
      },
      "pageCount": 146,
      "printType": "BOOK",
      "categories": [
        "Science"
      ],
      "averageRating": 4,
      "ratingsCount": 1,
      "maturityRating": "NOT_MATURE",
      "allowAnonLogging": false,
      "contentVersion": "2.1.2.0.preview.1",
      "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
      },
      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=0BSOg0oHhZ0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=0BSOg0oHhZ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      "language": "en",
      "previewLink": "http://books.google.co.in/books?id=0BSOg0oHhZ0C&pg=PA12&dq=angular&hl=&cd=1&source=gbs_api",
      "infoLink": "http://books.google.co.in/books?id=0BSOg0oHhZ0C&dq=angular&hl=&source=gbs_api",
      "canonicalVolumeLink": "https://books.google.com/books/about/Angular_Momentum_in_Quantum_Mechanics.html?hl=&id=0BSOg0oHhZ0C"
    },
    "saleInfo": {
      "country": "IN",
      "saleability": "NOT_FOR_SALE",
      "isEbook": false
    },
    "accessInfo": {
      "country": "IN",
      "viewability": "PARTIAL",
      "embeddable": true,
      "publicDomain": false,
      "textToSpeechPermission": "ALLOWED",
      "epub": {
        "isAvailable": false
      },
      "pdf": {
        "isAvailable": true,
        "acsTokenLink": "http://books.google.co.in/books/download/Angular_Momentum_in_Quantum_Mechanics-sample-pdf.acsm?id=0BSOg0oHhZ0C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
      },
      "webReaderLink": "http://play.google.com/books/reader?id=0BSOg0oHhZ0C&hl=&printsec=frontcover&source=gbs_api",
      "accessViewStatus": "SAMPLE",
      "quoteSharingAllowed": false
    },
    "searchInfo": {
      "textSnippet": "<b>Angular</b> Momentum of a System of Particles PRELIMINARY REMARKS . In <br>\nclassical mechanics the <b>angular</b> momentum of a system of n particles relative to a <br>\npoint 0 is given by ( 2.2.1 ) 1 = įt : X : = ΣΙ . where Ii , Pi , and L ; are the position <br>\nvector&nbsp;..."
    },
    "type": "[Cart] Add To Cart"
  }];


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawerComponent ],
      providers : [ 
        SideNavService,
        BooksFacade,
        provideMockStore({
          initialState
        })
      ],
      imports:[
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatMenuModule,
        MatButtonModule,
        MatListModule,
        RouterTestingModule
      ]
    })
    .compileComponents();

    mockStore = TestBed.get(MockStore);
  //  const getBookFeatureState = createFeatureSelector<fromBook.BooksState>('books');
    mockCollectionBooksSelector = mockStore.overrideSelector(
      fromBook.getCartItemsCount,
      initialState.length
    );
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign collectionBooks$ when component is resolved', inject(
    [SideNavService],
    (service : SideNavService) => {
    spyOn(service, 'sideNavToggleSubject').and.returnValue(of(true));
    const spy =  spyOn(component.myNav, 'toggle');

    service.toggle();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    component.cartItemsCount$.forEach(x => {
      expect(x).toEqual(1);
    })

  }));
});
