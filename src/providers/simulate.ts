import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SimulateService {

  constructor() {}


  getCars(lat, lng) {

  	let carData = this.cars[this.carIndex];

  	this.carIndex++;

  	if (this.carIndex > this.cars.length-1) {
  		this.carIndex = 0;
  	}

  	return Observable.create(
  		observer => observer.next(carData)
  	)
	
  }

  private carIndex: number = 0;

  private cars1 = {

  		cars: [{
  			id: 1,
  			coord: {
  				lat: 32.7155,
  				lng: -117.1619
  			}
  		},
  		{
  			id: 2,
  			coord: {
  				lat: 32.7135,
  				lng: -117.1555
  			}
  		}	
  	]
  };

  private cars2 = {
  		cars: [{
  			id: 1,
  			coord: {
  				lat: 32.7156,
  				lng: -117.1600
  			}
  		},
  		{
  			id: 2,
  			coord: {
  				lat: 32.7136,
  				lng: -117.1583
  			}
  		}	
  	]
  };

  private cars3 = {
  		cars: [{
  			id: 1,
  			coord: {
  				lat: 32.7167,
  				lng: -117.1596
  			}
  		},
  		{
  			id: 2,
  			coord: {
  				lat: 32.7157,
  				lng: -117.1583
  			}
  		}	
  	]
  };

  private cars4 = {
  		cars: [{
  			id: 1,
  			coord: {
  				lat: 32.7157,
  				lng: -117.1574
  			}
  		},
  		{
  			id: 2,
  			coord: {
  				lat: 32.7126,
  				lng: -117.1574
  			}
  		}	
  	]
  };

  private cars5 = {
  		cars: [{
  			id: 1,
  			coord: {
  				lat: 32.7156,
  				lng: -117.1573
  			}
  		},
  		{
  			id: 2,
  			coord: {
  				lat: 32.7147,
  				lng: -117.1573
  			}
  		}	
  	]

  };

  private cars: Array<any> = [this.cars1, this.cars2, this.cars3, this.cars4, this.cars5]

}
