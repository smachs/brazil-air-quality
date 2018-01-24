import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  ApiCountry: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) { 
    this.ApiCountry = this.httpClient.get('https://api.openaq.org/v1/locations?country[]=BR');  
  }
 
  openDetails(film) {
    this.navCtrl.push('FilmDetailsPage', {
      film: film
    });
  }

}
