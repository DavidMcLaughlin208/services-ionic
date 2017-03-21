// import { Component, Input, OnInit } from '@angular/core';
// import { CarService } from '../../providers/car/car';

// @Component({
//   selector: 'available-providers',
//   templateUrl: 'available-providers.html'
// })
// export class AvailableProvidersComponent implements OnInit {
//   @Input() map: google.maps.Map;
//   @Input() isServiceRequested: boolean;

//   // public carService: CarService;
//   constructor(public carService: any) {
//     // this.carService = new CarService()
//   }

//   ngOnInit(){
//     this.fetchAndRefreshCars();
//   }

//   addCarMarker(){
//     let carMarker = new google.maps.Marker({
//       map: the
//     })

//   }

//   updateCarMarker(){
//     for (var i=0; numOfCars=this.carMarkers.length; i++){

//     }
//   }

//   fetchAndRefreshCars(){
//     this.carService.getCars(9,9)
//       .subscribe(carsData => {
//         if (!this.isServiceRequested){
//           (<any>carsData).cars.forEach( car => {
//             this.updateCarMarker(car)
//           })
//         }
//       })
//   }
// }
