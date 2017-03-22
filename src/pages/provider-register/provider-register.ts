import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { ProviderRegisterPage2 } from '../provider-register2/provider-register2';

@Component({
  selector: 'page-provider-register',
  templateUrl: 'provider-register.html'
})
export class ProviderRegisterPage {
  createSuccess = false;
  registerCredentials = { provider: {email: '', password: '', firstName: '', lastName: '', phoneNumber: '', street_address: '', city: '', state: '', zipcode: '', company_name: '' } };

  constructor(public nav: NavController, public navParams: NavParams, private auth: AuthService, private alertCtrl: AlertController) {}

  public register() {
    console.log(this.registerCredentials)
    this.auth.register(this.registerCredentials, "providers").subscribe(res => {
      if(res.authToken) {
        this.createSuccess = true;
        // this.auth.authToken = res.authToken;
        window.localStorage.setItem("authToken", res.authToken);
        window.localStorage.setItem("client", res.client);
        this.showPopup("Success", "Account created. Please add more information about your business");
        this.nav.push(ProviderRegisterPage2);
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

          }
        }
      }]
    })
    alert.present();
  }

  registerServices(){
    this.nav.push(ProviderRegisterPage2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProviderRegisterPage');
  }

}
