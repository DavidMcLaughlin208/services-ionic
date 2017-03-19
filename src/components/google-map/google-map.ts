import { Directive, ElementRef, Renderer, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';



/*
  Generated class for the GoogleMap directive.

  See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
  for more info on Angular 2 Directives.
*/

declare var google;

@Directive({
  selector: '[google-map]' // Attribute selector
})

export class GoogleMap {

	scrollerHandle: any;
    header: any;
    headerHeight: any;
    translateAmt: any;
    scaleAmt: any;
    scrollTop: any;
    lastScrollTop: any;
    ticking: any;
 

  @ViewChild('map') mapElement: ElementRef;
  map: any;
 
  constructor(public navCtrl: NavController, public renderer: Renderer) {
 
  }
 


  ionViewDidLoad(){
    this.loadMap();
  }
 
  loadMap(){
 
    Geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
    }, (err) => {
      console.log(err);
    });
 
  }

}
