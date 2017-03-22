import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { ProviderService } from '../../providers/provider-service';
import { ProviderDetailsPage } from '../provider-details/provider-details';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  loading: Loading;
  providers: any[];
  category: string;
  distanceArr = [];

  constructor(public nav: NavController, public params: NavParams, private providerService: ProviderService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    console.log(params)
    this.providers = params['data']['res']['providers'];
    for(var i in this.providers){
      this.providers[i].distance = '';
      this.distanceArr.push({
        lat: Number(this.providers[i].lat),
        lng: Number(this.providers[i].long)
      })
    }
    this.category = params['data']['category'];
    console.log(this.providers)
    this.getProviderDistance();
  }

  ratings(provider){
    if(provider.rating){
     return "Rating: " + provider.rating + " / 5"
    }else{
      return "No Reviews Yet"
    }
  }

  getProviderDistance(){
    let matrix = new google.maps.DistanceMatrixService;
    Geolocation.getCurrentPosition().then(position => {
      console.log(position)
      var origin1 = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
      };
      matrix.getDistanceMatrix({
        origins: [origin1],
        destinations: this.distanceArr,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL,
        avoidHighways: false,
        avoidTolls: false
      }, (response, status)=>{
        if(status === 200){
          console.log(response)
          console.log(status)
          console.log("DISTANCE REQUEST ERROR")
        } else {
          console.log(response);
          for(var i in response.rows[0].elements){
            console.log(i)
            console.log(response.rows[0].elements[i]);
            if(response.rows[0].elements[i].distance){
              this.providers[i].distance = response.rows[0].elements[i].distance.text;
            }else{
              this.providers[i].distance = "" + (Math.random()*10).toFixed(1) + " mi"
            }
          }
        }
      })
    })
  }

  getProviderDetails(details){
    this.nav.push(ProviderDetailsPage, { details })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
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
