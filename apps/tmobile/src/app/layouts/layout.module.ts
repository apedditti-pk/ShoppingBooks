import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatMenuModule,
  MatButtonModule
} from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { DrawerComponent } from './drawer/drawer.component';
import { SideNavService } from './side-nav.service';
import { LayoutsComponent } from './layouts.component';

@NgModule({
  declarations: [
    HeaderComponent,
    DrawerComponent,
    LayoutsComponent
  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    CommonModule, // If you are making your own module ,should include this,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    DrawerComponent,
    LayoutsComponent,
    MatSidenavModule
  ],
  providers:[
    SideNavService,
  ]
})
export class LayoutsModule { }
