import { Injectable } from '@angular/core';
import { Geolocation } from 'ionic-native'
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class RequestService {
  services: string[];


  constructor(private http:Http){
    this.http = http;
    this.services = ["plumbers", "hvac", "electrical"];
  }

  public requestService(location, serviceIndex) {
    let requestUrl = "http://realtime-services.herokuapp.com/clients" //+ this.services[+index];
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': window.localStorage.getItem( "authToken" )  });
    let options = new RequestOptions({ headers: headers });
    let data = { location: location }
    return this.http.post(requestUrl, data, options)
      .map(res => res.json())
      .catch(this.handleError);
  };

  private handleError(error) {
    console.error(error);
    return Observable.throw('There was an error');
  }

  public getLocation() {
     Geolocation.getCurrentPosition();
  }
}
