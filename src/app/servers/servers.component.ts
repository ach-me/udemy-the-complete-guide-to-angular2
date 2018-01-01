import { Component, OnInit } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() {
    // Metodo ejecutado al momento en que este componente es creado por Angular
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    // ES6 arrow function
    // () => {}

   }

  ngOnInit() {
  }

}
