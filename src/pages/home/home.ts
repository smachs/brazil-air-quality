import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  API: Observable<any>;
  CurrentLocation: Observable<any>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) { 
    this.API = this.httpClient.get('https://api.openaq.org/v1/locations?city[]=Sorocaba');

    this.CurrentLocation = this.httpClient.get('http://api.waqi.info/feed/here/?token=68c132eeabcb5d4919995288d3f9a5bd8d602c71');  
  }

}
