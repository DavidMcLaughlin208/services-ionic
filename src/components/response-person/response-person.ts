import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { CarService } from '../../providers/car'; 

@Component({
  selector: 'response-person',
  templateUrl: 'response-person.html'

})

export class ResponsePersonComponent implements OnInit, OnChanges {
  @Input() map: google.maps.Map;
  @Input() isServiceRequested: boolean;
  @Input() serviceLocation: google.maps.LatLng;

  constructor(public carService: CarService) {
    
  }

  ngOnInit(){

  }

  ngOnChanges() {
    if (this.isServiceRequested) {
      this.requestCar();
    } else {
      this.removeCar();
    }
  }

  requestCar() {
    console.log('request car' + this.serviceLocation);
    // this.carService.findPickupCar(this.pickupLocation)
    //   .subscribe(car => {
        // show car marker
        // show car path/directions
        // keep updating car
    //   })
  }

  removeCar() {

  }

}
