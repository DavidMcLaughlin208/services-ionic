import { Component, Input, OnInit } from '@angular/core';
import { CarService } from '../../providers/car';

@Component({
  selector: 'available-providers',
  templateUrl: 'available-providers.html',
  providers: []
  //CarService
})
export class AvailableProvidersComponent implements OnInit {
  @Input() map: google.maps.Map;
  @Input() isServiceRequested: boolean;

  public carMarkers: Array<google.maps.Marker>;

  constructor(public carService: CarService) {
    this.carMarkers = [];
  }

  ngOnInit(){
    // this.fetchAndRefreshCars();
  }

  addCarMarker(car){
    let carMarker = new google.maps.Marker({
      map: this.map,
      position: new google.maps.LatLng(car.coord.lat, car.coord.lng),
      icon: '../../img/car.png'
    })

    carMarker.set('id', car.id);

    this.carMarkers.push(carMarker);
  }

  updateCarMarker(car){
    for (var i=0, numOfCars=this.carMarkers.length; i<numOfCars; i++){
    	if (this.carMarkers[i].get('id') === car.id) {
    		this.carMarkers[i].setPosition(new google.maps.LatLng(car.coord.lat, car.coord.lng));
    		return;
    	}
    }

    this.addCarMarker(car);
  }

  fetchAndRefreshCars(){
    this.carService.getCars(9,9)
      .subscribe(carsData => {
        if (!this.isServiceRequested){
          (<any>carsData).cars.forEach( car => {
            this.updateCarMarker(car)
          })
        }
      })
  }
}
