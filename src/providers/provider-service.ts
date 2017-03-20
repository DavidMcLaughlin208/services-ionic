import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Geolocation } from 'ionic-native';

declare var google;

export class Provider {
  services: string;
  email: string;

  constructor() { }

  addServices(services){
    this.services = services;
  }
}

@Injectable()
export class ProviderService {
  currentProvider: Provider;
  auth_token: string;

  constructor(private http:Http){
    this.http = http;
    this.auth_token = window.localStorage.getItem("authToken");
  }

  public getProvidersServices(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let data = { auth_token: window.localStorage.getItem("authToken")};
    return this.http.post("http://secret-taiga-76523.herokuapp.com/providers/info", data, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  public makeAvailable(services){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://secret-taiga-76523.herokuapp.com/providers/activate", services, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error) {
    console.error(error);
    return Observable.throw('There was an issue retrieving your information.');
  }

  public sendLocation(currentLocation){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let data = { current_location: currentLocation, auth_token: this.auth_token }
    console.log(data)
    return this.http.post("http://secret-taiga-76523.herokuapp.com/providers/location", data, options)
      .map(res => { return res.json()})
      .catch(this.handleError);
  }

  public requestProviders(latLongCat){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://secret-taiga-76523.herokuapp.com/clients/location", latLongCat, options)
      .map(res => res.json())
      .catch(this.handleError)
  }

  public startJob(details){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://secret-taiga-76523/jobs", details, options)
      .map(res => res.json())
      .catch(this.handleError);
  }
}
