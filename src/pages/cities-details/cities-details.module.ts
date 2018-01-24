import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CitiesDetailsPage } from './cities-details';

@NgModule({
  declarations: [
    CitiesDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CitiesDetailsPage),
  ],
})
export class CitiesDetailsPageModule {}
