import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestCount = signal(0);

  busy() {
    this.busyRequestCount.update(current => current + 1);
  }

  // idle() {
  //   this.busyRequestCount.update(current => Math.max(0, current - 1));
  // }
  idle() {
  this.busyRequestCount.update(current => {
    const newValue = Math.max(0, current - 1);
    console.log('Busy count:', newValue); // Affiche la valeur à chaque appel
    return newValue;
  });
}
}
