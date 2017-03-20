import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { LoginPage } from '../login/login';
import { AuthService } from '../../providers/auth-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  categories: any[];
  constructor(public nav: NavController, public navParams: NavParams, private auth: AuthService) { }


  categorySelected(category) {
    this.nav.push(SearchPage, {category: category});
  }

  public logout() {
    this.auth.currentUser = null;
    window.localStorage.setItem('authToken', '');
    this.nav.push(LoginPage);
    this.nav.setRoot(LoginPage);
  }


}
