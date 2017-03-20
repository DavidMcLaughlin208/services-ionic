import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { ProviderService } from '../../providers/provider-service';
import { ActiveServicesPage } from '../active-services/active-services';


@Component({
  selector: 'page-available-services',
  templateUrl: 'available-services.html'
})
export class AvailableServicesPage {
  services: any[];
  servicesObject = { services: {'plumbing': false, 'electrical': false, 'hvac': false, 'miscellaneous': false }, auth_token: window.localStorage.getItem("authToken") };
  loading: Loading;

  constructor(public nav: NavController, public params: NavParams, private providerService: ProviderService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    this.services = this.params['data']['res']['services'];
    for(var i in this.services){
      this.services[i] = this.services[i]["category"]
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvailableServicesPage');
    console.log(this.services);
  }

  toggleService(event, service) {
    this.servicesObject.services[service] = !this.servicesObject.services[service];
  }

  makeAvailable(){
    this.showLoading();
    console.log(this.servicesObject)
    let valid = false;
    for(var i in this.servicesObject['services']){
      if(this.servicesObject['services'][i] === true){
        valid = true;
      }
    }
    if(valid){
      this.providerService.makeAvailable(this.servicesObject).subscribe(res => {
        console.log(res)
        this.loading.dismiss();
        this.nav.push(ActiveServicesPage);
      },
      error => {
        this.showError(error);
      })
    } else {
      this.showError("Please select a service");
    }
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
