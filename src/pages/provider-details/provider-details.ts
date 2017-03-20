import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-provider-details',
  templateUrl: 'provider-details.html'
})
export class ProviderDetailsPage {
  provider: any;
  constructor(public navCtrl: NavController, public params: NavParams) {
    console.log(params)
    this.provider = params['data']['provider']
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProviderDetailsPage');
  }



}
