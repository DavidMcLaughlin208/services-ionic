import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { ProviderService } from '../../providers/provider-service';

@Component({
  selector: 'page-awaiting-service',
  templateUrl: 'awaiting-service.html'
})
export class AwaitingServicePage {
  loading: Loading;
  constructor(public nav: NavController, public params: NavParams, private providerService: ProviderService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AwaitingServicePage');
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
