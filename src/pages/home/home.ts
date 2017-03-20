import { Component } from '@angular/core';

import { NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { LoginPage } from '../login/login';
import { AuthService } from '../../providers/auth-service';
import { Geolocation } from 'ionic-native';
import { ProviderService } from '../../providers/provider-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  categories: any[];
  loading: Loading;

  constructor(public nav: NavController, public navParams: NavParams, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private providerService: ProviderService) { }


  categorySelected(category) {
  }

  public logout() {
    this.auth.currentUser = null;
    window.localStorage.setItem('authToken', '');
    this.nav.push(LoginPage);
    this.nav.setRoot(LoginPage);
  }

  requestProviders(category) {
    this.showLoading();
    Geolocation.getCurrentPosition().then((position) => {
      let latLongCat = { coords: {lat: position['coords']['latitude'], long: position['coords']['longitude'] }, category: category, auth_token: window.localStorage.getItem("authToken") }
      console.log(latLongCat);
      this.providerService.requestProviders(latLongCat).subscribe(res => {
        console.log(res)
        console.log("SENT LOCATION")
        this.loading.dismiss();
        this.nav.push(SearchPage, {res, category})
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
      this.loading.dismiss();
    });

    let alert = this.alertCtrl.create({
      title: 'Failure',
      subTitle: text,
      buttons: ["OK"]
    });
    alert.present(prompt);
  }




}
