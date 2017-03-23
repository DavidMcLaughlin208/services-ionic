import { Component, OnInit, Input } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { Observable } from 'rxjs/Observable';
import { OriginLocationComponent } from '../origin-location/origin-location';
// import { AvailableProvidersComponent } from '../available-providers/available-providers';

@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html',
  entryComponents: [OriginLocationComponent]
})

export class GoogleMapComponent implements OnInit {

  @Input() isServiceRequested: boolean;

  public location; map;
  public isMapIdle: boolean;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {}


  ngOnInit(){
    this.map = this.createMap();
    this.addMapEventListeners();


    this.getLocation().subscribe(location => {
      this.centerLocation(location)
    })
  }

  addMapEventListeners(){
    google.maps.event.addListener(this.map, 'dragstart', ()=>{
      this.isMapIdle = false;
    })
    google.maps.event.addListener(this.map, 'idle', ()=>{
      this.isMapIdle = true;
    })
  }

  getLocation() {

    let loading = this.loadingCtrl.create({
      content: 'Locating...',
      spinner: 'bubbles'
    });
    loading.present()

    setTimeout(() => {
    loading.dismiss();
    }, 5000)

    let options = {timeout: 10000, enableHighAccuracy: true};

    let locationObs = Observable.create(observable => {

      Geolocation.getCurrentPosition(options)
        .then(resp => {
          let lat = resp.coords.latitude;
          let lng = resp.coords.longitude;
          let location = new google.maps.LatLng(lat, lng);
          console.log(lat, lng)

          observable.next(location);
      },
        (err) => {
          console.log('Geolocation err: ' + err);
          loading.dismiss();
        })
    })
    return locationObs;
  }

  createMap(location = new google.maps.LatLng(39.1031, -84.5120)){
    let mapOptions = {
      center: location,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    }

    let mapEl = document.getElementById('map');
    let map = new google.maps.Map(mapEl, mapOptions);

    return map;
  }

  centerLocation(location){
    if (location){
      this.map.panTo(location)
    } else {
      this.getLocation().subscribe(currentLocation => {
        this.map.panTo(currentLocation)
      })
    }
  }

}
