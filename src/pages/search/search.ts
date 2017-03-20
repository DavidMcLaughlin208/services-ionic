import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { ProviderService } from '../../providers/provider-service';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  category: string;
  loading: Loading;

  constructor(public nav: NavController, public params: NavParams, private providerService: ProviderService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    this.category = params['data']['category'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    this.requestProviders();
  }
  requestProviders() {
    Geolocation.getCurrentPosition().then((position) => {
      let latLongCat = { coords: {lat: position['coords']['latitude'], long: position['coords']['longitude'] }, category: this.category, auth_token: window.localStorage.getItem("authToken") }
      console.log(latLongCat);
      this.providerService.requestProviders(latLongCat).subscribe(res => {
        console.log(res)
        console.log("SENT LOCATION")
      },
      error => {
        this.showError("Error updating your location")
      })
    })
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
