import { Component, OnInit } from '@angular/core';
// import { setTimeout } from 'timers';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';

  // Metodo ejecutado al momento en que este componente es creado por Angular
  constructor() {    
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    // ES6 arrow function
    // () => {}
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    // casteo explicito
  }
}
