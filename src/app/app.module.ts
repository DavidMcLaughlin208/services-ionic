import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UnloggedHomePage } from '../pages/unlogged-home/unlogged-home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { Register2Page } from '../pages/register2/register2';
import { AuthService } from '../providers/auth-service';
import { RequestService } from '../providers/request-service';
import { GoogleMapComponent } from '../components/google-map/google-map';

import { ProviderRegisterPage } from '../pages/provider-register/provider-register';
import { ProviderRegisterPage2 } from '../pages/provider-register2/provider-register2';
import { AvailableServicesPage } from '../pages/available-services/available-services';
import { ActiveServicesPage } from '../pages/active-services/active-services';
import { AwaitingServicePage } from '../pages/awaiting-service/awaiting-service';
import { ProviderJobPage } from '../pages/provider-job/provider-job';
import { SearchPage } from '../pages/search/search';
import { ProviderDetailsPage } from '../pages/provider-details/provider-details';
import { ProviderHomePage } from '../pages/provider-home/provider-home';
import { ProviderService } from '../providers/provider-service';
import { OriginLocationComponent } from '../components/origin-location/origin-location';
import { CarService } from '../providers/car';
import { SimulateService} from '../providers/simulate';
import { AvailableProvidersComponent } from '../components/available-providers/available-providers';





@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProviderRegisterPage,
    ProviderRegisterPage2,
    ProviderHomePage,
    AvailableServicesPage,
    ActiveServicesPage,
    SearchPage,
    GoogleMapComponent,
    OriginLocationComponent,
    ProviderDetailsPage,
    AwaitingServicePage,
    Register2Page,
    AvailableProvidersComponent,
    ProviderJobPage,
    UnloggedHomePage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProviderRegisterPage,
    ProviderRegisterPage2,
    ProviderHomePage,
    AvailableServicesPage,
    ActiveServicesPage,
    SearchPage,
    GoogleMapComponent,
    OriginLocationComponent,
    ProviderDetailsPage,
    AwaitingServicePage,
    Register2Page,
    AvailableProvidersComponent,
    ProviderJobPage,
    UnloggedHomePage


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
