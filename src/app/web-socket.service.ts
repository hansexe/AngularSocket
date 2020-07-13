import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {


  socket : any;
  readonly url: string = "localhost:3000";

  constructor() {
    this.socket = io(this.url);
   }

  listen(eventname:any){
    return new Observable((subscriber)=> {
      this.socket.on(eventname, (data)=>{
        subscriber.next(data);
      });
    });
  }

  emit(eventname : any, data : any){
    this.socket.emit(eventname,data)
  }

}
