import { Component } from '@angular/core';

/*
  Generated class for the OriginLocation component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'origin-location',
  templateUrl: 'origin-location.html'
})
export class OriginLocationComponent {

  text: string;

  constructor() {
    console.log('Hello OriginLocation Component');
    this.text = 'Hello World';
  }

}
