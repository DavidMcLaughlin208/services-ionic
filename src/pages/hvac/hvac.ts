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








