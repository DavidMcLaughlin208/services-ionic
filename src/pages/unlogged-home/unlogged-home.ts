import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { ProviderRegisterPage } from '../provider-register/provider-register';
import { HomePage } from '../home/home'
import { ProviderHomePage } from '../provider-home/provider-home';

@Component({
  selector: 'page-unlogged-home',
  templateUrl: 'unlogged-home.html'
})
export class UnloggedHomePage {

  constructor(public nav: NavController, public params: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    // if(window.localStorage.getItem('authToken') && window.localStorage.getItem('client')){
    //   if(window.localStorage.getItem("client") == 'true'){
    //     this.nav.setRoot(HomePage)
    //   }else{
    //     this.nav.setRoot(ProviderHomePage)
    //   }
    // }
  }

  login(){
    this.nav.push(LoginPage)
  }

  registerUser(){
    this.nav.push(RegisterPage)
  }

  registerProvider(){
    this.nav.push(ProviderRegisterPage)
  }

}
