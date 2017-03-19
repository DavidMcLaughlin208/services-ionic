import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-provider-home',
  templateUrl: 'provider-home.html'
})
export class ProviderHomePage {

  constructor(public nav: NavController, public navParams: NavParams, private auth: AuthService) { }

  makeMeAvailable(){

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProviderHomePage');
  }

}
