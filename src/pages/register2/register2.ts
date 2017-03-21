import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-register2',
  templateUrl: 'register2.html'
})
export class Register2Page {
  address = { good: { client: {address: ''} }, trash: { street: '', city: '', state: '', zip: '' } }
  createSuccess = false;

  constructor(public nav: NavController, public navParams: NavParams, private auth: AuthService, private alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register2Page');
  }

  public register(provided_address) {
    let full_address = (this.address.trash.street + " " + this.address.trash.city + " " +this.address.trash.state + " " + this.address.trash.zip)
    let address = { client: { address: full_address, auth_token: window.localStorage.getItem('authToken') } }
    console.log(address);
    this.auth.updateAddress(address).subscribe(res => {
      console.log(res)
      if(res) {
        this.createSuccess = true;
        this.showPopup("Success", "Account created.");
      } else {
        this.showPopup("Error", "Problem creating account.");
      }
    },
    error => {
      console.log("update adddress error");
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
            this.nav.push(LoginPage);
          }
        }
      }]
    })
    alert.present();
  }

}
