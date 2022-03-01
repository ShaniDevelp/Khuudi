import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { BahriaTownListingComponent } from './BahriaTown-listing/BahriaTown-listing.component';
import { RawalpindiListingComponent } from './Rawalpindi-Listing/Rawalpindi-listing.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NewListingComponent } from './new-listing/new-listing.component';
// For MDB Angular Free
// import { CarouselModule, WavesModule } from 'angular-bootstrap-md'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingComponent,
    BahriaTownListingComponent,
    RawalpindiListingComponent,
    NewListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MdbCarouselModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
