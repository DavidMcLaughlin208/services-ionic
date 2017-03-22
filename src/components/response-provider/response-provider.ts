import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { CarService } from '../../providers/car';



@Component({
  selector: 'response-provider',
  templateUrl: 'response-provider.html'
})
export class ResponseProviderComponent implements OnInit, OnChanges {
  @Input() map: google.maps.Map;
  @Input() isServiceRequested: boolean;
  @Input() serviceLocation: google.maps.LatLng;

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

  requestCar(){
    console.log('request car' + this.serviceLocation)
    // this.carService.findServiceCar(this.serviceLocation)
    //   .subscribe(car => {

    //   })
  }

  removeCar(){

  }

}
