import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(message: string) {
    console.log(message);
  }

  getData(){

    return 'This is service data';
  }

  getRxjsData(){


    return new Observable((observer) => {
        setTimeout(() => {
          var username = 'Tom - rxjs';
          observer.next(username);

          // observer.error('if data is error');
        }, 2000);

    })
  }

}
