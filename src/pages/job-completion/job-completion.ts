import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { ProviderService } from '../../providers/provider-service';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-job-completion',
  templateUrl: 'job-completion.html'
})
export class JobCompletionPage {
  loading: Loading;
  constructor(public nav: NavController, public params: NavParams, private providerService: ProviderService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobCompletionPage');
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  goHome(){
    this.showError("Thank you for your review")
    this.nav.push(HomePage)
  }

  showError(text) {
    setTimeout(() => {
      // this.loading.dismiss();
    });

    let alert = this.alertCtrl.create({
      title: 'Complete',
      subTitle: text,
      buttons: ["OK"]
    });
    alert.present(prompt);
  }

}

