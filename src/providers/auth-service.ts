import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


export class User {
  username: string;
  email: string;

  constructor(username: string, email: string) {
    this.username = username;
    this.email = email;
  }
}

@Injectable()
export class AuthService {
  currentUser: User;

  constructor(private http:Http){
    this.http = http;
  }

  public login(credentials) {
    if(credentials.email === null || credentials.password === null){
      return Observable.throw("Please insert credentials");
    } else {
      // return Observable.create(observer => {

      //   let access = (credentials.password === "pass" && credentials.email === "email")
      //   this.currentUser = new User('Simon', 'saimon@devdactic.com');
      //   observer.next(access);
      //   observer.complete();
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
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://secret-taiga-76523.herokuapp.com/" + accountType, credentials, options)
      .map(res => res.json())
      .catch(this.handleRegisterError);
  }

  private handleRegisterError(error) {
    console.error(error);
    return Observable.throw(error.json().errors.join(" "));
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      window.localStorage.setItem( 'authToken', null )
      observer.next(true);
      observer.complete();
    })
  }
}

