import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { SaladAssPage } from '../pages/salad-ass/salad-ass';
import { ElectricalPage } from '../pages/electrical/electrical';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AuthService } from '../providers/auth-service';
import { HvacPage } from '../pages/hvac/hvac';
import { PlumbingPage } from '../pages/plumbing/plumbing';
import { GoogleMap } from '../components/google-map/google-map';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ItemDetailsPage,
    ListPage,
    SaladAssPage,
    ElectricalPage,
    LoginPage,
    RegisterPage,
    PlumbingPage,
    HvacPage,
    GoogleMap
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ItemDetailsPage,
    ListPage,
    SaladAssPage,
    ElectricalPage,
    LoginPage,
    RegisterPage,
    PlumbingPage,
    HvacPage
    
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
  AuthService]
})
export class AppModule {}
