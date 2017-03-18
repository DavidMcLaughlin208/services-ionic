import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { SaladAssPage } from '../salad-ass/salad-ass'

@Component({
  selector: 'page-electrical',
  templateUrl: 'electrical.html'
})

export class ElectricalPage {
  constructor(public navCtrl: NavController, public navParams: NavParams){

  }
  search() {
    console.log(this.navParams)
    this.navCtrl.push(SaladAssPage)
  }
}
