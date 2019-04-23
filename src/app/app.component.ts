import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'group-btn-nav';
  navlist: Array<any> = [
    {
      name:'adrian'
    },
    {
      name:'pedro'
    },
    {
      name:'pedroasdasda'
    },
    {
      name:'xxxxxxxxxxxxxxxxxxxxxxx'
    },
    {
      name:'yyyyyyyssssjjsjsjsjsjjsjsjsjs'
    }
  ]

  constructor(){

  }
  clicked(data: any) {
    console.log(data);
  }

  add() {
    this.navlist.push({
      name: 'uuuu'
    });
  }
}
