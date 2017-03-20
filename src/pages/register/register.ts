import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { ProviderRegisterPage } from '../provider-register/provider-register';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  createSuccess = false;
  registerCredentials = { client: {email: '', password: '', firstName: '', lastName: '', phoneNumber: '', street_address: '', city: '', state: '', zipcode: '' } };

  constructor(public nav: NavController, public navParams: NavParams, private auth: AuthService, private alertCtrl: AlertController) {}

  public register() {
    console.log(this.registerCredentials)
    this.auth.register(this.registerCredentials, "clients").subscribe(res => {
      if(res) {
        this.createSuccess = true;
        window.localStorage.setItem("authToken", res.authToken);
        this.showPopup("Success", "Account created.");
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
            this.nav.popToRoot();
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
