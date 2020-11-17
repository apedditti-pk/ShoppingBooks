import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, Validators, FormControl } from '@angular/forms';


import {
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatInputModule
} from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';


import { BooksFacade } from '../books.facade';
import { BooksService } from '../books.service';
import { BillingDetailsComponent } from './billing-details.component';

describe('BillingDetailsComponent', () => {
  let component: BillingDetailsComponent;
  let fixture: ComponentFixture<BillingDetailsComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingDetailsComponent ],
      providers: [ BooksService,
                   BooksFacade ,
                   FormBuilder ,
                   FormGroup,
                   { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
                   { provide: FormBuilder, useValue: formBuilder }
                 ],
      imports: [
                  MatIconModule,
                  MatMenuModule,
                  MatButtonModule,
                  MatInputModule,
                  MatListModule,
                  ReactiveFormsModule,
                  FormsModule
                ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingDetailsComponent);
    component = fixture.componentInstance;

    component.billingForm = new FormGroup({
      address: new FormControl(''),
      orderName: new FormControl(''),
      email: new FormControl(''),
      phoneNumber: new FormControl('')
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call forminit in onInit() method', () => {
    fixture = TestBed.createComponent(BillingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const ngOnInitSpy = spyOn(component, 'ngOnInit');
    const formInitSpy = spyOn(component, 'formInit');

    component.ngOnInit();
    component.formInit();

    expect(ngOnInitSpy).toHaveBeenCalled();
    expect(formInitSpy).toHaveBeenCalled();
  });
});
