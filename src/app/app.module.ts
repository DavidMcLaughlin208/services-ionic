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
import { RequestService } from '../providers/request-service';
import { HvacPage } from '../pages/hvac/hvac';
import { PlumbingPage } from '../pages/plumbing/plumbing';
import { GoogleMapComponent } from '../components/google-map/google-map';
import { ProviderRegisterPage } from '../pages/provider-register/provider-register';
import { ProviderRegisterPage2 } from '../pages/provider-register2/provider-register2';
import { AvailableServicesPage } from '../pages/available-services/available-services';
import { ActiveServicesPage } from '../pages/active-services/active-services';
import { SearchPage } from '../pages/search/search';
import { ProviderDetailsPage } from '../pages/provider-details/provider-details';
import { ProviderHomePage } from '../pages/provider-home/provider-home';
import { ProviderService } from '../providers/provider-service';
import { OriginLocationComponent } from '../components/origin-location/origin-location';
import { CarService } from '../providers/car';
import { SimulateService} from '../providers/simulate'



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
    ProviderRegisterPage,
    ProviderRegisterPage2,
    ProviderHomePage,
    AvailableServicesPage,
    ActiveServicesPage,
    SearchPage,
    GoogleMapComponent,
    OriginLocationComponent,
    ProviderDetailsPage
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
    HvacPage,
    ProviderRegisterPage,
    ProviderRegisterPage2,
    ProviderHomePage,
    AvailableServicesPage,
    ActiveServicesPage,
    SearchPage,
    GoogleMapComponent,
    OriginLocationComponent,
    ProviderDetailsPage

  ],

  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
  AuthService,
  RequestService,
  ProviderService,
  CarService,
  SimulateService

  ]
})
export class AppModule {}
