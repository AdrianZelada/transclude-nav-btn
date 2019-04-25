import {
  AfterContentInit,
  Component,
  ElementRef, EmbeddedViewRef,
  Input,
  QueryList,
  TemplateRef,
  ViewChild, ViewChildren,
  ViewContainerRef,
  AfterViewInit,
  HostListener,
  OnChanges,
  OnInit, 
  SimpleChanges} from '@angular/core';
import {DropdownBtnComponentComponent} from '../dropdown-btn-component/dropdown-btn-component.component';
declare const $: any;
@Component({
  selector: 'tp3-dropdown-component',
  templateUrl: './dropdown-component.component.html',
  styleUrls: ['./dropdown-component.component.scss'], 
  host:{
    'class':'w-100'
  }
})
export class DropdownComponentComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('navBtnContent') navBtnContent: ElementRef;
  @ViewChildren(DropdownBtnComponentComponent) navs: QueryList<DropdownBtnComponentComponent> = new QueryList
  @Input() navList: Array<any> = [];
  @Input() templateNav: TemplateRef<any>;
  public width: number = 0;
  private viewRef: EmbeddedViewRef<{}>;
  constructor(
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    $(window).resize(() => {
      this.callShowDropDown();
    });
    // this.callShowDropDown();
  }
  ngOnChanges(changes: SimpleChanges) {
    debugger;
    if (changes.navList && changes.navList.currentValue) {

      this.navList = null;
      this.navList = changes.navList.currentValue;
      this.callShowDropDown();
    }
  }

  private callShowDropDown() {
    setTimeout(() => {
      this.showDropdown();
    }, 100);
  }

  showDropdown() {
    this.width = this.navBtnContent.nativeElement.clientWidth;
    console.log('1.........................', this.width);

    let sumWidth = 0;
    document.querySelector('#dropdown').innerHTML = null;
    // console.log('23412312................', this.navs);
    this.navs.forEach((nav: DropdownBtnComponentComponent) => {
      // nav.show();
      if (this.width > (sumWidth + nav.getWidth() - 30)) {
        sumWidth = sumWidth + nav.getWidth();
        console.log('as------------------', sumWidth,  nav.getWidth());
      } else {
        // console.log('3.---------------', nav.i);
        const viewRef: EmbeddedViewRef<{}> = this.viewContainerRef.createEmbeddedView(nav.getTemplate(), {
          data: nav.getData(),
          i: nav.i
        });
        viewRef.detectChanges();
        // nav.hidden();
        nav.toogle();
        const outletElement = document.querySelector('#dropdown');
        viewRef.rootNodes.forEach((rootNode) => {outletElement.appendChild(rootNode)})
      }
    });
  }
}
