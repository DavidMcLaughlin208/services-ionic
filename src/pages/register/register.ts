import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { ProviderRegisterPage } from '../provider-register/provider-register';
import { Register2Page } from '../register2/register2';
import { Geocoder, GeocoderRequest, Geolocation } from 'ionic-native';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  createSuccess = false;
  registerCredentials = { client: {password: '', first_name: '', last_name: '', phone_number: ''} };

  constructor(public nav: NavController, public navParams: NavParams, private auth: AuthService, private alertCtrl: AlertController) {}

  public register() {
    console.log(this.registerCredentials)
    this.auth.register(this.registerCredentials, "clients").subscribe(res => {
      if(res) {
        this.createSuccess = true;
        // this.auth.authToken = res.authToken;
        window.localStorage.setItem("authToken", res.authToken);
        window.localStorage.setItem("client", res.client);
        this.showPopup("Success", "Account created.");
        this.nav.push(Register2Page);
      } else {
        this.showPopup("Error", "Problem creating account.");
      }
    },
    error => {
      this.showPopup("Error", error);
    });
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
      {
        text: 'OK',
        handler: data => {
          if(this.createSuccess) {
            // this.nav.push(Register2Page);
            // Geolocation.getCurrentPosition().then((position) => {
            //   console.log(position);
            //   let req: GeocoderRequest = { position: {lat: position.coords.latitude, lng: position.coords.longitude} }
            //   let geocoder = new google.maps.Geocoder;
            //   geocoder.geocode(req).then((results)=>{
            //     this.nav.push(Register2Page, { results });
            //   })
            // })
          }
        }
      }]
    })
    alert.present();
  }

  registerProvider() {
    this.nav.push(ProviderRegisterPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
