import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { OffersListComponent } from './offers-list/offers-list.component';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'listOffers', component: OffersListComponent},
      { path: 'addOffer', component: AddOfferComponent}
    ]
  }
];

@NgModule({
  declarations: [HomeComponent, OffersListComponent, OfferDetailsComponent, AddOfferComponent],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PagesModule { }
