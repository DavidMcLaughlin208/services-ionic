import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { SimulateService } from '../providers/simulate';
import 'rxjs/add/operator/map';


@Injectable()
export class CarService {

	public simulate: SimulateService;

  constructor() {
  	this.simulate = new SimulateService();
  }

  getServiceCar() {
    return this.simulate.getServiceCar()
  }
  findServiceCar(serviceLocation){
    return this.simulate.findServiceCar(serviceLocation)
  }

  getCars(lat, lng){
  	return Observable
  		.interval(2000)
  		.switchMap(()=> this.simulate.getCars(lat, lng))
  		.share();
  }

}
