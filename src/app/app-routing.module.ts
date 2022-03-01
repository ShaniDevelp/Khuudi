import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { BahriaTownListingComponent } from './BahriaTown-listing/BahriaTown-listing.component';
import { RawalpindiListingComponent } from './Rawalpindi-Listing/Rawalpindi-listing.component';



const routes : Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Islamabadlisting',
    component: ListingComponent
    
  },
  {
    path: 'BahriaTownlisting',
    component: BahriaTownListingComponent
    
  },
  {
    path: 'Rawalpindilisting',
    component: RawalpindiListingComponent
    
  }
  
]




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
