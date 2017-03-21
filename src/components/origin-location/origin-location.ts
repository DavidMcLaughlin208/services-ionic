import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CarService } from '../../providers/car';

@Component({
  selector: 'origin-location',
  templateUrl: 'origin-location.html',
  providers: []
})
export class OriginLocationComponent implements OnChanges {
  @Input() isPinSet: boolean;
  @Input() map: google.maps.Map;
  // @Output() updatedServiceLocation: EventEmitter<google.maps.LatLng> = new EventEmitter();

  private serviceMarker: google.maps.Marker;
  private popup: google.maps.InfoWindow;

  constructor() {
    console.log('Hello OriginLocation Component');

  }

  ngOnChanges(changes) {
    if (this.isPinSet){
      this.showServiceMarker();
    } else {
      this.removeServiceMarker();
    }
  }

  showServiceMarker(){
    this.serviceMarker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.BOUNCE,
      position: this.map.getCenter(),
      icon: 'img/me.png'
    })  

    setTimeout( () => {
      this.serviceMarker.setAnimation(null);
    }, 750); 

    this.showServiceTime();

    // send pickup location
    // this.updatedServiceLocation.next(this.serviceMarker.getPosition());
  }

  removeServiceMarker(){
    if (this.serviceMarker){
      this.serviceMarker.setMap(null);
    }
  }

  showServiceTime() {
    this.popup = new google.maps.InfoWindow({
      content: '<p>You are Here</p>'
    });

    this.popup.open(this.map, this.serviceMarker);

    google.maps.event.addListener(this.serviceMarker, 'click', () => {
      this.popup.open(this.map, this.serviceMarker);
    })
  }

}
