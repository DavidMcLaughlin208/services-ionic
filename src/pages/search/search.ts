import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { ProviderService } from '../../providers/provider-service';
import { ProviderDetailsPage } from '../provider-details/provider-details';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  loading: Loading;
  providers: any[];
  category: string;

  constructor(public nav: NavController, public params: NavParams, private providerService: ProviderService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    console.log(params)
    this.providers = params['data']['res']['providers'];
    this.category = params['data']['category'];
    console.log(this.providers)
  }

  getProviderDetails(details){
    this.nav.push(ProviderDetailsPage, { details })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }


  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  showError(text) {
    setTimeout(() => {
      // this.loading.dismiss();
    });

    let alert = this.alertCtrl.create({
      title: 'Failure',
      subTitle: text,
      buttons: ["OK"]
    });
    alert.present(prompt);
  }

}
