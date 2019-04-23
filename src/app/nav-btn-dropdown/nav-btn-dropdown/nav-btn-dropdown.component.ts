import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef, EmbeddedViewRef,
  Input,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild, ViewChildren,
  ViewContainerRef
} from '@angular/core';
import {NavBtnComponent} from '../nav-btn/nav-btn.component';

@Component({
  exportAs: 'tutator-nav-btn-dropdown',
  selector: 'tutator-nav-btn-dropdown',
  templateUrl: './nav-btn-dropdown.component.html',
  styleUrls: ['./nav-btn-dropdown.component.scss']
})
export class NavBtnDropdownComponent implements OnInit, AfterContentInit {

  @ViewChild('navBtnContent') navBtnContent: ElementRef;
  @ViewChildren(NavBtnComponent) navs: QueryList<NavBtnComponent> = new QueryList();

  @Input() navList: Array<any> = [];
  @Input() templateNav: TemplateRef<any>;
  public width: number = 0;
  public containerWidth: number = 0;
  private viewRef: EmbeddedViewRef<{}>;
  public dropdowList: Array<any> = [];
  public dataCalcule: any = {};

  public index: number = 0;
  constructor(
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    // this.dropdowList = this.navList.length > 0 ? [
    //   {
    //     ...this.navList[0]
    //   }
    // ] : [];

    this.dataCalcule = this.navList.length > 0 ?
      {
        ...this.navList[0],
        ind: 0
      }
     : {};

    this.index = 0;
  }

  ngAfterContentInit() {
    console.log(this.templateNav);
    this.width = this.navBtnContent.nativeElement.clientWidth;
    console.log(this.width);
    console.log(this.navBtnContent.nativeElement);
    // setTimeout(() => {
    //   console.log(this.navs)
    //   let sumWidth = 0;
    //   this.navs.forEach((nav: NavBtnComponent) => {
    //     console.log(nav.getWidth());
    //     if (this.width > (sumWidth + nav.getWidth())) {
    //       sumWidth = sumWidth + nav.getWidth();
    //     } else {
    //       console.log('nav');
    //       console.log(nav);
    //       const viewRef: EmbeddedViewRef<{}> = this.viewContainerRef.createEmbeddedView(nav.getTemplate(),{
    //         data: nav.getData()
    //       });
    //       viewRef.detectChanges();
    //
    //       nav.hidden();
    //
    //       const outletElement = document.querySelector(`#dropdown`);
    //
    //       viewRef.rootNodes.forEach((rootNode) => {outletElement.appendChild(rootNode)});
    //       // this.disposeFn = () => {};
    //     }
    //
    //   });
    // }, 100);

  }

  domChange(data: any) {
    // console.log('domChange');
    // console.log(data);
    // console.log(this.width);
    // const target = data.target;
    //
    // if (this.width > this.containerWidth + data.width) {
    //   this.containerWidth = this.containerWidth + data.width;
    // } else {
    //   const viewRef: EmbeddedViewRef<{}> = this.viewContainerRef.createEmbeddedView(data.template,{
    //     data: data.data
    //   });
    //   viewRef.detectChanges();
    //   this.navs.toArray()[data.ind].hidden();
    //   const outletElement = document.querySelector(`#dropdown`);
    //
    //   viewRef.rootNodes.forEach((rootNode) => {outletElement.appendChild(rootNode)});
    // }
    //
    if (this.width > this.containerWidth + data.width) {
      this.containerWidth = this.containerWidth + data.width;
      this.dropdowList.push(data.data);

    }
    this.appendToList();

  }

  appendToList() {
    if ( this.index + 1 < this.navList.length ) {
      this.index++;
      console.log(this.index)
      this.dataCalcule = { ...this.navList[this.index], ind: this.index};
    }
  }
}
