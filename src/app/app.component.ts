import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SaladAssPage } from '../pages/salad-ass/salad-ass';
import { LoginPage } from '../pages/login/login';
import { PlumbingPage } from '../pages/plumbing/plumbing';
import { ElectricalPage } from '../pages/electrical/electrical';
import { HvacPage } from '../pages/hvac/hvac';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = LoginPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Plumbing', component: PlumbingPage },
      { title: 'Electrical', component: ElectricalPage },
      { title: 'HVAC', component: HvacPage },
      { title: 'THE Salad Ass', component: SaladAssPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.push(page.component)
    // this.nav.setRoot(page.component);
  }
}
