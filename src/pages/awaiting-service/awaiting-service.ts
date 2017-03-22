import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { ProviderService } from '../../providers/provider-service';
import { GoogleMapComponent } from '../../components/google-map/google-map';
import { JobCompletionPage } from '../job-completion/job-completion';

@Component({
  selector: 'page-awaiting-service',
  templateUrl: 'awaiting-service.html',
  entryComponents: [GoogleMapComponent]
})
export class AwaitingServicePage {
  loading: Loading;
  provider: any;
  constructor(public nav: NavController, public params: NavParams, private providerService: ProviderService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    console.log(params)
    this.provider = params['data']['provider']
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AwaitingServicePage');
  }

  completeJob(){
    this.nav.push(JobCompletionPage);
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
