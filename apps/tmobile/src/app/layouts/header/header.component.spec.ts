import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { MatIconModule, MatToolbarModule } from '@angular/material';
import { SideNavService } from '../side-nav.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        MatIconModule,
        MatToolbarModule
      ],
      providers:[ SideNavService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger sideNavService() method when clickMenu() is ececuted ', inject(
    [SideNavService],
    (service : SideNavService) => {
      fixture.detectChanges();
      const clickMenuSpy = spyOn(component, 'clickMenu').and.callThrough();
      const toggleSpy = spyOn(service, 'toggle');

      component.clickMenu();
      fixture.detectChanges();

      expect(clickMenuSpy).toHaveBeenCalled();
      expect(toggleSpy).toHaveBeenCalled();
  }
  ));

});
