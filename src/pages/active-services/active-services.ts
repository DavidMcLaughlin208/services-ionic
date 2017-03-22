import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { ProviderService } from '../../providers/provider-service';
import { Geolocation } from 'ionic-native';
import { GoogleMapComponent } from '../../components/google-map/google-map';
import { ProviderHomePage } from '../provider-home/provider-home';
import { ProviderJobPage } from '../provider-job/provider-job';


@Component({
  selector: 'page-active-services',
  templateUrl: 'active-services.html',
  entryComponents: [GoogleMapComponent]
})
export class ActiveServicesPage {
  loading: Loading;
  locationInterval: any;
  public isServiceRequested: boolean;
  job: boolean;
  jobInfo: any;
  title: string;
  titleInterval: any;


  constructor(public nav: NavController, public params: NavParams, private providerService: ProviderService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    this.locationInterval = setInterval(this.updateLocation.bind(this), 10000);
    this.isServiceRequested = false;
    this.title = "Awaiting Jobs"
    this.titleInterval = setInterval(this.titleChange.bind(this), 1000);
  }

  titleChange(){
    if(this.title.length === 16){
      this.title = "Awaiting Jobs"
    } else {
      this.title = this.title + '.'
    }
  }

  confirmService(){
    this.isServiceRequested = true;
  }

  cancelService(){
    this.isServiceRequested = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActiveServicesPage');
  }

  ionViewDidLeave() {
    clearInterval(this.locationInterval)
  }

  deactivate() {
    this.providerService.makeUnavailable().subscribe(res => {
      console.log(res);
      clearInterval(this.locationInterval)
      this.nav.setRoot(ProviderHomePage);
    },
    error => {
      this.showError("There was an error canceling your availability.")
    })
  }

  updateLocation(){
    console.log("ENTERING INTERVAL");
    // this.showLoading();
    Geolocation.getCurrentPosition().then((position) => {
      console.log(position)
      let latLong = { lat: position['coords']['latitude'], long: position['coords']['longitude']}
      this.providerService.sendLocation(latLong).subscribe(res => {
        console.log(res)
        console.log("SENT LOCATION")
        if(res){
          this.nav.push(ProviderJobPage, {jobInfo: res});
        }
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
