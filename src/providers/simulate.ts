import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
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
  	cars:[{
  		id: 1,
  		coord: {
  			lat: 32.7155,
  			lng: -117.1654
  		}
  	},
  	{
  		id: 2,
  		coord: {
  			lat: 32.7146,
  			lng: -117.1605
  		}
  	}	
  ]
  };

  private cars2 = {
  	cars:[{
  		id: 1,
  		coord: {
  			lat: 32.7156,
  			lng: -117.1646
  		}
  	},
  	{
  		id: 2,
  		coord: {
  			lat: 32.7145,
  			lng: -117.1610
  		}
  	}	
  ]
  };

  private cars3 = {
  	cars:[{
  		id: 1,
  		coord: {
  			lat: 32.7146,
  			lng: -117.1647
  		}
  	},
  	{
  		id: 2,
  		coord: {
  			lat: 32.7148,
  			lng: -117.1610
  		}
  	}	
  ]
  };

  private cars4 = {
  	cars:[{
  		id: 1,
  		coord: {
  			lat: 32.7146,
  			lng: -117.1637
  		}
  	},
  	{
  		id: 2,
  		coord: {
  			lat: 32.7153,
  			lng: -117.1611
  		}
  	}	
  ]
  };

  private cars5 = {
  	cars:[{
  		id: 1,
  		coord: {
  			lat: 32.7156,
  			lng: -117.1637
  		}
  	},
  	{
  		id: 2,
  		coord: {
  			lat: 32.7157,
  			lng: -117.1611
  		}
  	}	
  ]
  };

    private cars6 = {
    cars:[{
      id: 1,
      coord: {
        lat: 32.7166,
        lng: -117.1624
      }
    },
    {
      id: 2,
      coord: {
        lat: 32.7157,
        lng: -117.1606
      }
    }  
  ]
  };

    private cars7 = {
    cars:[{
      id: 1,
      coord: {
        lat: 32.7166,
        lng: -117.1620
      }
    },
    {
      id: 2,
      coord: {
        lat: 32.7157,
        lng: -117.1602
      }
    }  
  ]
  };

    private cars8 = {
    cars:[{
      id: 1,
      coord: {
        lat: 32.7161,
        lng: -117.1619
      }
    },
    {
      id: 2,
      coord: {
        lat: 32.7152,
        lng: -117.1601
      }
    }  
  ]
  };

    private cars9 = {
    cars:[{
      id: 1,
      coord: {
        lat: 32.7157,
        lng: -117.1619
      }
    },
    {
      id: 2,
      coord: {
        lat: 32.7146,
        lng: -117.1610
      }
    }  
  ]
  };

  private cars: Array<any> = [this.cars1, this.cars2, this.cars3, this.cars4, this.cars5, this.cars6, this.cars7, this.cars8, this.cars9]

}
