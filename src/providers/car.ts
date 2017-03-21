import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SimulateService } from '../providers/simulate/simulate';
import 'rxjs/add/operator/map';


@Injectable()
export class CarService {

	public simulate: any;

  constructor() {
  	this.simulate = new SimulateService();
  }

  getCars(lat, lng){
  	return Observable
  		.interval(2000)
  		.switchMap(()=> this.simulate.getCars(lat, lng))
  		.share();
  }

}
