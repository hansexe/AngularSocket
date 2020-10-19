import { Component, OnInit } from '@angular/core';
import { WebSocketService} from './web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'socketIoFirstSurprise';

  constructor(private WebSocketService : WebSocketService){

  }

  ngOnInit(){
    var bodyjson = 
    [{"nombre_socket" : "chat message", 
      "id": 1, 
      "nombre":"queso"
    }]

    this.WebSocketService.emitir('evento_socket', bodyjson );


    this.WebSocketService.emitir('chat message', "funcionaaaaa");
   
  }

}
