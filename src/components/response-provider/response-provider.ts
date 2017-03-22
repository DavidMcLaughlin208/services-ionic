import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { CarService } from '../../providers/car';
//import {SlidingMarker} = require('marker-animate-unobtrusive')


@Component({
  selector: 'response-provider',
  templateUrl: 'response-provider.html'
})
export class ResponseProviderComponent implements OnInit, OnChanges {
  @Input() map: google.maps.Map;
  @Input() isServiceRequested: boolean;
  @Input() serviceLocation: google.maps.LatLng;

  public serviceCarMarker: any;
  public polylinePath: google.maps.Polyline;

  constructor(public carService: CarService) {
    console.log('Hello ResponseProvider Component');
 
  }

  ngOnInit(){

  }

  ngOnChanges(){
    if (this.isServiceRequested){
      this.requestCar();
    } else {
      this.removeCar();
    }
  }

  addServiceMarker(position) {
    this.serviceCarMarker = new google.maps.Marker({
      map: this.map,
      position: position,
      icon: '../../img/car.png'
    });

    this.serviceCarMarker.setDuration(1000)
    this.serviceCarMarker.setEasing('linear')
  }

  showDirections(path) {
    this.polylinePath = new google.maps.Polyline({
      path: path,
      strokeColor: '#FF0000',
      strokeWeight: 3
    });
    this.polylinePath.setMap(this.map);
  }

  updateCar() {
    this.carService.getServiceCar().subscribe(car => {
      this.serviceCarMarker.setPosition(car.position);
      this.polylinePath.setPath(car.path);

      if (car.path.length > 1 ) {
        setTimeout(() => {
          this.updateCar();
        }, 1000);
      } else {}
    })
  }

  requestCar(){
    // console.log('request car' + this.serviceLocation)
    this.carService.findServiceCar(this.serviceLocation)
      .subscribe(car => {

        this.addServiceMarker(car.position);
        this.showDirections(car.path);
        this.updateCar();
      })
  }

  removeCar(){

  }

}
