import {AfterContentInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NavBtnDropdownComponent} from './nav-btn-dropdown/nav-btn-dropdown/nav-btn-dropdown.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit{
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
  ];

  width: string = '400px'

  @ViewChild(NavBtnDropdownComponent) nav: NavBtnDropdownComponent;

  constructor(){

  }

  ngAfterContentInit() {

  }
  clicked(data: any) {
    console.log(data);
  }

  add() {
    this.navlist.push({
      name: Date.now()
    });
    this.nav.refresh();

    // this.navlist = [...this.navlist, {name: ' uuuuuuu'}]
  }

  edit(){
    this.navlist[1].name = 'juan';
    this.navlist = this.navlist.map((data: any) => {
      if (data.name === 'pedro') {
        return {
          ...data,
          name: 'juan'
        };
      }
      return data;
    });
  }

  edit2(){
    this.navlist[1] = {
      ...this.navlist[1],
      name: 'reobeasdasdsssssssssssssssssssss'
    };
    this.nav.refresh();

  }

  delete() {
    this.navlist = this.navlist.filter((data) => {
      return data.name !== 'adrian';
    });
    this.nav.refresh();
  }


  changesSize() {

    this.width = this.width === '400px' ? '1000px' : '400px';
    this.nav.refresh();
  }

  addtp3() {
    // this.navlist.push({
    //   name: Date.now()
    // })

    this.navlist = [...this.navlist, {name: Date.now()}]

  }
}
