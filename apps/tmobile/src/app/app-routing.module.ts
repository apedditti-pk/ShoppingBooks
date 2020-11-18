import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
        {
          path: '',
          loadChildren: () =>
            import('./books/search/search.module').then(m => m.SearchModule)
        },
        {
            path: 'cart',
            loadChildren: () =>
              import('./books/cart/cart.module').then(m => m.CartModule)
        },
        {
            path: 'myCollections',
            loadChildren: () =>
              import('./books/my-collection/my-collection.module').then(m => m.MyCollectionsModule)
        },
        {
          path: 'billingDetails',
          loadChildren: () =>
            import('./books/billing-details/billing-details.module').then(m => m.BillingDetailsModule)
        },
     { path: '**', component: PageNotFoundComponent }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(appRoutes,{ enableTracing: false })
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }