import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { ProviderService } from '../../providers/provider-service';
import { Geolocation } from 'ionic-native';

@Component({
  selector: 'page-active-services',
  templateUrl: 'active-services.html'
})
export class ActiveServicesPage {
  loading: Loading;
  locationInterval: any;

  constructor(public nav: NavController, public params: NavParams, private providerService: ProviderService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    this.locationInterval = setInterval(this.updateLocation.bind(this), 10000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActiveServicesPage');
  }

  ionViewDidLeave() {
    clearInterval(this.locationInterval)
  }

  updateLocation(){
    console.log("ENTERING INTERVAL");
    // this.showLoading();
    Geolocation.getCurrentPosition().then((position) => {
      let latLong = { lat: position['coords']['latitude'], long: position['coords']['longitude']}
      this.providerService.sendLocation(latLong).subscribe(res => {
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
