import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { ProviderService } from '../../providers/provider-service';

@Component({
  selector: 'page-active-services',
  templateUrl: 'active-services.html'
})
export class ActiveServicesPage {
  loading: Loading;

  constructor(public nav: NavController, public params: NavParams, private providerService: ProviderService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActiveServicesPage');
  }

}
