import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ElectricalPage } from '../electrical/electrical';
import { PlumbingPage } from '../plumbing/plumbing';
import { HvacPage } from '../hvac/hvac';
import { LoginPage } from '../login/login';
import { AuthService } from '../../providers/auth-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  categories: any[];
  constructor(public nav: NavController, public navParams: NavParams, private auth: AuthService) {
    this.categories = [PlumbingPage, HvacPage, ElectricalPage];
  }
  categorySelected(event, index) {
    this.nav.push(this.categories[+index]);
  }

  public logout() {
    this.auth.currentUser = null;
    this.nav.setRoot(LoginPage);
    this.nav.push(LoginPage);
    this.nav.popToRoot();
  }
}
