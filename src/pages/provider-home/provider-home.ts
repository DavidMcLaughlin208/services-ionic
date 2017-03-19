import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { AvailableServicesPage } from '../available-services/available-services';
import { ProviderService } from '../../providers/provider-service'


@Component({
  selector: 'page-provider-home',
  templateUrl: 'provider-home.html'
})
export class ProviderHomePage {
  loading: Loading;
  services: any[];

  constructor(public nav: NavController, public navParams: NavParams, private auth: AuthService, private providerService: ProviderService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }

  makeMeAvailable(){
    this.showLoading();
    this.providerService.getProvidersServices().subscribe(res => {
      console.log(res)
      if(res.services){
        this.loading.dismiss();
        this.nav.push(AvailableServicesPage, {res});
      } else {
        this.showError('There was an error loading your information');
      }
    },
    error => {
      this.showError(error);
    });
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

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProviderHomePage');
  }

}
