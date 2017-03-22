import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { ProviderHomePage} from '../provider-home/provider-home'


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loading: Loading;
  registerCredentials = {phone_number:'',password:''};

  constructor(public nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public navParams: NavParams) {}

  public createAccount() {
    console.log("GOING TO REGISTER")
    this.nav.push(RegisterPage);
  }

  public login() {
    console.log("TRYNA LOGIN")
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(res => {
      console.log(res)
      if (res.authToken) {
        window.localStorage.setItem( 'authToken', res.authToken );
        window.localStorage.setItem( 'client', res.client );
        setTimeout(() => {
          this.loading.dismiss();
          if(res.client){
            this.nav.setRoot(HomePage)
          } else {
            this.nav.setRoot(ProviderHomePage)
          }
        });
      } else {
        this.showError('Invalid Credentials');
      }
    },
    error => {
      this.showError(error);
    });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });

    let alert = this.alertCtrl.create({
      title: 'Failure',
      subTitle: text,
      buttons: ["OK"]
    });
    alert.present(prompt);
  }

}
