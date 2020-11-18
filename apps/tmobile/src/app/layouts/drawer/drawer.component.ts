import { Component, OnInit , ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material';

import { Observable } from 'rxjs';

import { SideNavService } from '../side-nav.service';
import { BooksFacade } from '../../books/state/books.facade';

@Component({
  selector: 'tmobile-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  @ViewChild('sidenav', {static: true}) public myNav: MatSidenav;
  cartItemsCount$: Observable<number>;


  constructor(private sideNavService: SideNavService,
    private booksFacade: BooksFacade) { 
  }

  ngOnInit() { 
   this.sideNavService.sideNavToggleSubject.subscribe(()=> {
      this.myNav.toggle();
    });
    this.cartItemsCount$ = this.booksFacade.cartItemsCount$;
  } 

}
