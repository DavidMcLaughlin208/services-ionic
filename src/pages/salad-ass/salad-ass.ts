import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'salad-ass',
  templateUrl: 'salad-ass.html'
})

export class SaladAssPage {
  salad: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams)
    this.salad = "TEST";
  }
}
