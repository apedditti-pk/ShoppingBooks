import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import {
  MatIconModule,
  MatMenuModule,
  MatButtonModule
} from '@angular/material';

import { BillingDetailsComponent } from './billing-details.component';

const billingRoutes: Routes = [
  { path: '', component: BillingDetailsComponent }
];

@NgModule({
  declarations: [
    BillingDetailsComponent
  ],
  imports: [
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    CommonModule, // If you are making your own module ,should include this,
    MatInputModule,
    RouterModule.forChild(billingRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    
  ],
  providers:[
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class BillingDetailsModule { }
