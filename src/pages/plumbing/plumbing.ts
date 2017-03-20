import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RequestService } from '../../providers/request-service';

import { Geolocation } from 'ionic-native';
import { GoogleMapComponent } from '../../components/google-map/google-map';


@Component({
  selector: 'page-plumbing',
  templateUrl: 'plumbing.html',
   entryComponents: [GoogleMapComponent]
})
export class PlumbingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private requester: RequestService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlumbingPage');
  }

  requestPlumbers(serviceIndex) {
    // let address = GET GEOLOCATION FROM REQUEST-SERVICE
    let address = '';
    this.requester.requestService(address, serviceIndex).subscribe(res => {
      //INFO ABOUT PLUMBERS DO SOMETHING WITH MAPS
    })
  }

}
