import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

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
    let requestData = { auth_token: window.localStorage.getItem("authToken")};
    return this.http.post("http://secret-taiga-76523.herokuapp.com/providers/info", requestData, options)
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

  public makeUnavailable(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://secret-taiga-76523.herokuapp.com/providers/deactivate", {auth_token: window.localStorage.getItem('authToken') }, options)
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
    let locationData = { current_location: currentLocation, auth_token: this.auth_token }
    console.log(locationData)
    return this.http.post("http://secret-taiga-76523.herokuapp.com/providers/location", locationData, options)
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
    return this.http.post("http://secret-taiga-76523.herokuapp.com/jobs", details, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  public requestProviderInfo(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://secret-taiga-76523.herokupp.com/provider/info", {auth_token: window.localStorage.getItem("authToken")}, options)
      .map(res => res.json())
      .catch(this.handleError);
  }
}
