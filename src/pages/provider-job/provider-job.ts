import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { ProviderService } from '../../providers/provider-service';
import { Geolocation } from 'ionic-native';
import { GoogleMapComponent } from '../../components/google-map/google-map';
import { ProviderHomePage } from '../provider-home/provider-home';

@Component({
  selector: 'page-provider-job',
  templateUrl: 'provider-job.html',
  entryComponents: [GoogleMapComponent]
})
export class ProviderJobPage {
  jobInfo: any;
  loading: Loading;

  constructor(public nav: NavController, public params: NavParams, private providerService: ProviderService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    console.log(params);
    this.jobInfo = params['data']['jobInfo'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProviderJobPage');
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
