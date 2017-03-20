import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { ProviderHomePage } from '../provider-home/provider-home';

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
                              }, auth_token: window.localStorage.getItem('authToken') };

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
            this.nav.push(ProviderHomePage);
            this.nav.setRoot(ProviderHomePage);

          }
        }
      }]
    })
    alert.present();
  }

  plumbingChecked(){
    this.serviceObject.services.plumbing.checked = !this.serviceObject.services.plumbing.checked;
  }

  electricalChecked(){
    this.serviceObject.services.electrical.checked = !this.serviceObject.services.electrical.checked;
  }

  hvacChecked(){
    this.serviceObject.services.hvac.checked = !this.serviceObject.services.hvac.checked;
  }

  miscellaneousChecked(){
    this.serviceObject.services.miscellaneous.checked = !this.serviceObject.services.miscellaneous.checked;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProviderRegister2Page');
  }

}
