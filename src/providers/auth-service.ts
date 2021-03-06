import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


export class User {
  username: string;
  email: string;
  client: boolean;

  constructor(username: string, email: string, client: boolean) {
    this.username = username;
    this.email = email;
    this.client = client;
  }
}

@Injectable()
export class AuthService {
  currentUser: User;
  authToken: string;


  constructor(private http:Http){
    this.http = http;
  }

  public login(credentials) {
    if(credentials.phone === null || credentials.password === null){
      return Observable.throw("Please insert credentials");
    } else {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post("http://secret-taiga-76523.herokuapp.com/sessions", credentials, options )
        .map(res => res.json())
        .catch(this.handleLoginError);
    };
  }


  private handleLoginError(error) {
    console.error(error);
    return Observable.throw('Invalid Credentials');
  }

  public register(credentials, accountType) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    console.log(headers)
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://secret-taiga-76523.herokuapp.com/" + accountType, credentials, options)
      .map(res => res.json())
      .catch(this.handleRegisterError);
  }

  public updateAddress(address){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://secret-taiga-76523.herokuapp.com/clients/address", address, options)
      .map(res => res.json())
      .catch(this.handleAddressError)
  }

  private handleRegisterError(error) {
    console.error(error);
    return Observable.throw(error.json().errors.join(" "));
  }

  private handleAddressError(error) {
    console.error(error);
    console.error("handleAddressError");
    return Observable.throw(error.json().errors.join(" "));
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      this.authToken = null;
      // window.localStorage.clear();
      // window.localStorage.setItem( 'authToken', null )
      // window.localStorage.setItem( 'client', null )
      observer.next(true);
      observer.complete();
    })
  }
}

