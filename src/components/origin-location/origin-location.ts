import { Component, Input, OnChanges } from '@angular/core';



// declare var google;

@Component({
  selector: 'origin-location',
  templateUrl: 'origin-location.html'
})
export class OriginLocationComponent implements OnChanges {
  @Input() isPinSet: boolean;
  @Input() map: google.maps.Map;

  private pickupMarker: google.maps.Marker;
  private popup: google.maps.InfoWindow;

  constructor() {
    console.log('Hello OriginLocation Component');

  }

  ngOnChanges(changes) {
    if (this.isPinSet){
      this.showPickupMarker();
    } else {
      this.removePickupMarker();
    }
  }

  showPickupMarker(){
    this.pickupMarker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.BOUNCE,
      position: this.map.getCenter(),
      icon: 'img/me.png'
    })  

    setTimeout( () => {
      this.pickupMarker.setAnimation(null);
    }, 750); 

    this.showPickupTime();
  }

  removePickupMarker(){
    if (this.pickupMarker){
      this.pickupMarker.setMap(null);
    }
  }

  showPickupTime() {
    this.popup = new google.maps.InfoWindow({
      content: '<h5>You are Here</h5>'
    });

    this.popup.open(this.map, this.pickupMarker);

    google.maps.event.addListener(this.pickupMarker, 'click', () => {
      this.popup.open(this.map, this.pickupMarker);
    })
  }

}
