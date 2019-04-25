import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef, EmbeddedViewRef,
  Input,
  OnInit, Output,
  QueryList,
  TemplateRef,
  ViewChild, ViewChildren,
  ViewContainerRef,
  EventEmitter, ChangeDetectorRef, OnChanges, SimpleChanges, ChangeDetectionStrategy
} from '@angular/core';
import {NavBtnComponent} from '../nav-btn/nav-btn.component';

@Component({
  exportAs: 'tutator-nav-btn-dropdown',
  selector: 'tutator-nav-btn-dropdown',
  templateUrl: './nav-btn-dropdown.component.html',
  styleUrls: ['./nav-btn-dropdown.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBtnDropdownComponent implements OnInit, AfterContentInit, OnChanges {

  @ViewChild('navBtnContent') navBtnContent: ElementRef;
  @ViewChildren(NavBtnComponent) navs: QueryList<NavBtnComponent> = new QueryList();

  // @Input() navList: Array<any> = [];
  @Input() get navList() {
    return this._navList;
  }
  set navList(res: Array<any>) {
    console.log(res);
    this._navList = res;
  }
  @Input() templateNav: TemplateRef<any>;

  @Input() private list: Array<any> = [];
  @Output() public listChange: EventEmitter<Array<any>> = new EventEmitter();


  public width: number = 0;
  public containerWidth: number = 0;
  private viewRef: EmbeddedViewRef<{}>;
  public btnGroupList: Array<any> = [];
  public dropdownList: Array<any> = [];
  public dataCalcule: any = {};
  public _navList: Array<any> = [];

  public index: number = 0;
  constructor(
    private viewContainerRef: ViewContainerRef,
    private cdRef: ChangeDetectorRef,

) { }

  ngOnInit() {
    // this.dropdowList = this.navList.length > 0 ? [
    //   {
    //     ...this.navList[0]
    //   }
    // ] : [];
    this.refresh();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes')
    console.log(changes)
    this.cdRef.detectChanges();
  }

  public refresh() {
    this.dataCalcule = this.navList.length > 0 ?
      {
        ...this.navList[0],
        ind: 0
      }
      : {};

    this.index = 0;
    this.dropdownList = [];
    this.btnGroupList = [];
    this.containerWidth = 0;
  }

  ngAfterContentInit() {
    console.log(this.templateNav);
    this.width = this.navBtnContent.nativeElement.clientWidth;
    console.log(this.width);
    console.dir(this.navBtnContent.nativeElement);
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

  getWith() {
    return this.navBtnContent.nativeElement.clientWidth
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

    this.width = this.getWith();
    console.log("this.width");

    console.log(this.width);
    console.log("data.width");
    if (this.width > this.containerWidth + data.width) {

      console.log(data.width);
      this.containerWidth = this.containerWidth + data.width;
      console.log(this.containerWidth);

      console.log("this.containerWidth");
      this.btnGroupList.push(data.data);
    } else {
      this.dropdownList.push(data.data);
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
