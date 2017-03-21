import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-register2',
  templateUrl: 'register2.html'
})
export class Register2Page {
  address = { good: { client: {address: ''} }, trash: { street: '', city: '', state: '', zip: '' } }
  createSuccess = false;
  full_address: string;
  sentAddress: any;

  constructor(public nav: NavController, public params: NavParams, private auth: AuthService, private alertCtrl: AlertController) {
    console.log(params);
    this.full_address = params['data']
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register2Page');
  }

  public register(geocode) {
    if(geocode == 'true'){
      this.sentAddress = { client: this.full_address, auth_token: window.localStorage.getItem('authToken') }
    } else {
      let built_address = (this.address.trash.street + " " + this.address.trash.city + " " +this.address.trash.state + " " + this.address.trash.zip)
      this.sentAddress = { client: { address: built_address, auth_token: window.localStorage.getItem('authToken') } }
    }
    console.log(this.sentAddress);
    this.auth.updateAddress(this.sentAddress).subscribe(res => {
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
            this.nav.setRoot(HomePage);
          }
        }
      }]
    })
    alert.present();
  }

}
