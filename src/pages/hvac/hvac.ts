import { ViewChild, ElementRef, Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { GoogleMapComponent } from '../../components/google-map/google-map';


@Component({
  selector: 'hvac',
  templateUrl: 'hvac.html',
  entryComponents: [GoogleMapComponent]
})

export class HvacPage{

	public isServiceRequested: boolean;

	constructor(){
		this.isServiceRequested = false;
	}

	confirmService(){
		this.isServiceRequested = true;
	}

	cancelService(){
		this.isServiceRequested = false;
	}

	
}


// @ViewChild('map') mapElement: ElementRef;
//   map: any;

//  constructor(public navCtrl: NavController) {
 
//   }
 
//   ionViewDidLoad(){
//     this.loadMap();
//   }
 
//   loadMap(){
//  		console.log(Geolocation.getCurrentPosition())
//     Geolocation.getCurrentPosition().then((position) => {
 
//       let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
//       let mapOptions = {
//         center: latLng,
//         zoom: 15,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//       }
 
//       this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
//     }, (err) => {
//       console.log(err);
//     });
 
//   }

//   addInfoWindow(marker, content){
 
//   let infoWindow = new google.maps.InfoWindow({
//     content: content
//   });
 
//   google.maps.event.addListener(marker, 'click', () => {
//     infoWindow.open(this.map, marker);
//   });
 
// }

//   addMarker(){
 
//   let marker = new google.maps.Marker({
//     map: this.map,
//     animation: google.maps.Animation.DROP,
//     position: this.map.getCenter()
//   });
 
//   let content = "<h4>Information!</h4>";          
 
//   this.addInfoWindow(marker, content);
 
// }






