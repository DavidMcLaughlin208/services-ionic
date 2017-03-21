import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { ProviderService } from '../../providers/provider-service';
import { GoogleMapComponent } from '../../components/google-map/google-map';
import { AwaitingServicePage } from '../awaiting-service/awaiting-service';

@Component({
  selector: 'page-provider-details',
  templateUrl: 'provider-details.html',
  entryComponents: [GoogleMapComponent]
})
export class ProviderDetailsPage {
  provider: any;
  loading: Loading;
  constructor(public nav: NavController, public params: NavParams, private providerService: ProviderService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    console.log(params)
    this.provider = params['data']['details']
    console.log(this.provider)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProviderDetailsPage');
  }

  confirmService(){
    let details = { job: { provider_service_id: this.provider.id , auth_token: window.localStorage.getItem("authToken") } }
    this.providerService.startJob(details).subscribe(res => {
      console.log(res)
      this.nav.push(AwaitingServicePage, {provider: this.provider});
    },
    error => {
      this.showError("Error starting your job.")
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
