import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { SimulateService } from '../providers/simulate';
import 'rxjs/add/operator/map';


@Injectable()
export class CarService {

	public simulateService: SimulateService;

  constructor() {
  	this.simulateService = new SimulateService();
  }

  findServicePerson(serviceLocation){

  }

  getCars(lat, lng) {
  	return Observable
  		.interval(2000)
  		.switchMap(()=> this.simulateService.getCars(lat, lng))
  		.share();
  }

}
