import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-provider-register2',
  templateUrl: 'provider-register2.html'
})
export class ProviderRegisterPage2 {
  createSuccess = false;
  serviceObject = { services: { plumbing: { checked: false, base_rate: '' },
                              electrical: { checked: false, base_rate: ''},
                              hvac: { checked: false, base_rate: ''},
                              miscellaneous: { checked: false, base_rate: '' }
                              },
                              auth_token: window.localStorage.getItem("authToken") };

  constructor(public nav: NavController, public navParams: NavParams, private auth: AuthService, private alertCtrl: AlertController) {}

  public register() {
    console.log(this.serviceObject)
    this.auth.register(this.serviceObject, "provider_services").subscribe(res => {
      if(res) {
        this.createSuccess = true;
        this.showPopup("Success", "Your services have been logged.");
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
            this.nav.push(ProviderRegisterPage2);
          }
        }
      }]
    })
    alert.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProviderRegister2Page');
  }

}
