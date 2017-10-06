import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

/*
  Generated class for the RemoteserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RemoteserviceProvider {
  static get parameters() {
    return [[Http]];
}
  constructor(public http: Http) {
    console.log('Hello RemoteserviceProvider Provider');
  }
  loadfeedback(){
    var url = "http://cabonagua.pythonanywhere.com/tutorial/feedback/";
    var response = this.http.get(url).map(res => res.json());
    return response;
  }
  loadaccounts(){
    var url = "http://127.0.0.1:8000/tutorial/accounts/";
    var response = this.http.get(url).map(res => res.json());
    return response;
  }
  loadusers(){
    var url = "http://127.0.0.1:8000/tutorial/userprofile/";
    var response = this.http.get(url).map(res => res.json());
    return response;
  }
}
