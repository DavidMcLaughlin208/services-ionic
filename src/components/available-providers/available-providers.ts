import { Component, Input, OnInit } from '@angular/core';
import { CarService } from '../../providers/car';
// import SlidingMarker = require('marker-animate-unobtrusive')

@Component({
  selector: 'available-providers',
  templateUrl: 'available-providers.html',
  providers: []
})

export class AvailableProvidersComponent implements OnInit {
  @Input() map: google.maps.Map;
  @Input() isServiceRequested: boolean;
  
  public geocoder: google.maps.GeocoderRequest
 
  public carMarkers: Array<google.maps.Marker>;

  constructor(public carService: CarService) {
    this.carMarkers = [];
  }

  ngOnInit(){
    this.fetchAndRefreshCars();
  }

  addCarMarker(car){
    let carMarker = new google.maps.Marker({
      map: this.map,
      position: new google.maps.LatLng(car.coord.lat, car.coord.lng),
      icon: 'img/me.png'
    });

    // carMarker.setValues({type: 'id', id: car.id});
    carMarker.set('id', car.id);
    this.carMarkers.push(carMarker);

  }

  updateCarMarker(car) {
    for (var i=0, numOfCars=this.carMarkers.length; i<numOfCars; i++){
      console.log("IN UPDATE CAR MARKER")
      console.log(this.carMarkers[i].get('id'),car.id)
      if (this.carMarkers[i].get('id') === car.id) {
        this.carMarkers[i].setPosition(new google.maps.LatLng(car.coord.lat, car.coord.lng));
        return;
      }
    }
  }

  fetchAndRefreshCars(){
    console.log(this.carMarkers)
    console.log(this.isServiceRequested)

    this.carService.getCars(32.7157, -117.1608)
      .subscribe(carsData => {
        if (!this.isServiceRequested) {
          (<any>carsData).cars.forEach( car => {
            console.log(car)
            this.updateCarMarker(car);
          })
        }
      })
  }


}