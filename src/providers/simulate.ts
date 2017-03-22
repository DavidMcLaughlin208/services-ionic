import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SimulateService {

  public directionsService: google.maps.DirectionsService;
  public myRoute: any;
  public myRouteIndex: number;

  constructor() {
    this.directionsService = new google.maps.DirectionsService;
  }

  getServiceCar() {
    return Observable.create(observable => {

      let car = this.myRoute[this.myRouteIndex];
      observable.next(car);
      this.myRouteIndex++;
    })

  }

  getSegmentedDirections(directions){
    let route = directions.routes[0];
    let legs = route.legs;
    let path = [];
    let increments = [];
    let duration = 0;

    let numOfLegs = legs.length;

    while (numOfLegs--) {

      let leg = legs[numOfLegs];
      let steps = leg.steps;
      let numOfSteps = steps.length;

      while (numOfSteps--) {

        let step = steps[numOfSteps];
        let points = step.path;
        let numOfPoints = points.length;

        duration += step.duration.value;

        while(numOfPoints--) {
          let point = points[numOfPoints];

          path.push(point);

          increments.unshift({
            position: point,
            time: duration,
            path: path.slice(0)
          })
        }
      }
    }

    return increments;
  }

  calculateRoute(start, end) {

    return Observable.create(observable => {

      this.directionsService.route({
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING
       }, (response, status) => {
         if (status === google.maps.DirectionsStatus.OK) {
           observable.next(response);
         } else {
           observable.error(status);
         }
      }) 
    });
  }

  simulateRoute(start, end) {

    return Observable.create(observable => {
      this.calculateRoute(start, end).subscribe(directions => {

        this.myRoute = this.getSegmentedDirections(directions);
        this.getServiceCar().subscribe( car => {
          observable.next(car);
        })
      })
    })
  }

  findServiceCar(pickupLocation) {

    this.myRouteIndex = 0;

    let car = this.cars1.cars[0]
    let start = new google.maps.LatLng(car.coord.lat, car.coord.lng);
    let end = pickupLocation;

    return this.simulateRoute(start, end);
  }

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
