import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { AvailableServicesPage } from '../available-services/available-services';
import { ActiveServicesPage } from '../active-services/active-services';
import { ProviderService } from '../../providers/provider-service'
import { UnloggedHomePage } from '../unlogged-home/unlogged-home';


@Component({
  selector: 'page-provider-home',
  templateUrl: 'provider-home.html'
})
export class ProviderHomePage {
  loading: Loading;
  services: any[];
  provider: any;
  providerInfo: any;
  servicesObject = { services: {'plumbing': false, 'electrical': false, 'hvac': false, 'miscellaneous': false }, auth_token: window.localStorage.getItem("authToken") };

  constructor(public nav: NavController, public navParams: NavParams, private auth: AuthService, private providerService: ProviderService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  }

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

  toggleService(event, service) {
    this.servicesObject.services[service] = !this.servicesObject.services[service];
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

  public logout() {
    this.auth.currentUser = null;
    window.localStorage.setItem('authToken', '');
    window.localStorage.setItem('client', '');
    this.nav.push(UnloggedHomePage);
    this.nav.setRoot(UnloggedHomePage);
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
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
        this.nav.setRoot(ActiveServicesPage);
      },
      error => {
        this.showError(error);
      })
    } else {
      this.showError("Please select a service");
    }
  }

  requestSelfInfo(){
    this.providerService.requestProviderInfo().subscribe(res => {
      console.log(res);
      this.providerInfo = res;
    })
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad ProviderHomePage');
    this.requestSelfInfo();
    this.showLoading();
    this.providerService.getProvidersServices().subscribe(res => {
      console.log(res)
      if(res.services){
        this.loading.dismiss();
        for(var i in res.services){
          this.servicesObject.services[res.services[i]['category']] = true;
        }
        console.log(this.servicesObject)
        this.services = res.services;
      } else {
        this.showError('There was an error loading your information');
      }
    },
    error => {
      this.showError(error);
    });
    this.requestSelfInfo();
  }

}
