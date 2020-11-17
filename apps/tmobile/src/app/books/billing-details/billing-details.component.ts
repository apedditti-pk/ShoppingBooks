import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { GenericValidator } from '../../../shared/generic-validator';
import { BookItems } from '../book';
import { BooksService } from '../books.service';
import { BooksFacade } from '../books.facade';

@Component({
  selector: 'tmobile-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.scss']
})
export class BillingDetailsComponent implements OnInit {

  billingForm: FormGroup;
  private validationMessages: { [key: string]: { [key: string]: string } };
  displayMessage: { [key: string]: string } = {};
  private genericValidator: GenericValidator;
  billingInfo = [];

  book: BookItems[];
  bookId: string;

  
  constructor(private fb: FormBuilder,
              private booksService :BooksService,
              private booksFacade: BooksFacade) {
    this.validationMessages = {
      orderName: {
        required: 'Product name is required.'
      },
      email: {
        required: 'Email is required',
        email : 'Please enter right email format (ex: test@xyz.com)'
      },
      phoneNumber: {
        required: 'Phone number is required',
        pattern : 'Please enter numbers between(0 - 9)',
        maxLength: 'Please enter 10 digit number',
        minLength: 'Please enter 10 digit number'
      },
      address: {
        required: 'Address is required'
      }
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
   }

  ngOnInit():void {

    this.formInit();

    let MOBILE_PATTERN = /[0-9\+\-\ ]/;
    this.billingForm = this.fb.group({
      orderName: ['', [Validators.required]],
      email: ['', [Validators.required,
                    Validators.email]],
      phoneNumber: ['',[Validators.required,
                        Validators.pattern(MOBILE_PATTERN),
                        Validators.minLength(10),
                        Validators.maxLength(10)]],
      address: ['', Validators.required]
    });

    this.billingForm.valueChanges.subscribe(
      value => this.displayMessage = this.genericValidator.processMessages(this.billingForm)
    );
  }

  blur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.billingForm);
  }

  submitOrder(form){
    if(form.value.address !== null && form.value.address !== ''){
      this.billingInfo = form.value;
      const books = this.booksService.getPurchaseListItems();

      const orderInfo = [{
          address : form.value.address ,
          name : form.value.orderName,
          email : form.value.email,
          phoneNumber : form.value.phoneNumber
      }];

      this.booksFacade.addToCollections(books, orderInfo);
      form.reset();
      Object.keys(form.controls).forEach(key => {
        form.get(key).setErrors(null) ;
      });
      this.booksService.emptyPurchaseListItems();
    }
  }

  formInit() {
    this.billingForm = new FormGroup({
       address: new FormControl(''),
       orderName: new FormControl(''),
       email: new FormControl(''),
       phoneNumber: new FormControl('')
    });
  }

  
}

