import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SimulateService {

  constructor(public http: Http) {}

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
  	cars:[{
  		id: 1,
  		coord: {
  			lat: 32.7156,
  			lng: -117.1591
  		}
  	},
  	{
  		id: 2,
  		coord: {
  			lat: 32.7157,
  			lng: -117.1610
  		}
  	}	
  ]
  };

  private cars2 = {
  	cars:[{
  		id: 1,
  		coord: {
  			lat: 32.7135,
  			lng: -117.1547
  		}
  	},
  	{
  		id: 2,
  		coord: {
  			lat: 37.7165,
  			lng: -117.1528
  		}
  	}	
  ]
  };

  private cars3 = {
  	cars:[{
  		id: 1,
  		coord: {
  			lat: 32.7147,
  			lng: -117.1503
  		}
  	},
  	{
  		id: 2,
  		coord: {
  			lat: 32.7136,
  			lng: -132.7136
  		}
  	}	
  ]
  };

  private cars4 = {
  	cars:[{
  		id: 1,
  		coord: {
  			lat: 32.7156,
  			lng: -117.1665
  		}
  	},
  	{
  		id: 2,
  		coord: {
  			lat: 32.7126,
  			lng: -117.1664
  		}
  	}	
  ]
  };

  private cars5 = {
  	cars:[{
  		id: 1,
  		coord: {
  			lat: 32.7146,
  			lng: -117.1583
  		}
  	},
  	{
  		id: 2,
  		coord: {
  			lat: 32.7146,
  			lng: -117.1564
  		}
  	}	
  ]
  };

  private cars: Array<any> = [this.cars1, this.cars2, this.cars3, this.cars4, this.cars5]

}
