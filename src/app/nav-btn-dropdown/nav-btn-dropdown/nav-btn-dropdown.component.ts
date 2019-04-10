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
  private viewRef: EmbeddedViewRef<{}>;

  constructor(
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(this.templateNav);
    this.width = this.navBtnContent.nativeElement.clientWidth;
    console.log(this.width);
    console.log(this.navBtnContent.nativeElement);
    setTimeout(() => {
      console.log(this.navs)
      let sumWidth = 0;
      this.navs.forEach((nav: NavBtnComponent) => {
        console.log(nav.getWidth());
        if (this.width > (sumWidth + nav.getWidth())) {
          sumWidth = sumWidth + nav.getWidth();
        } else {
          console.log('nav');
          console.log(nav);
          const viewRef: EmbeddedViewRef<{}> = this.viewContainerRef.createEmbeddedView(nav.getTemplate(),{
            data: nav.getData()
          });
          viewRef.detectChanges();

          nav.hidden();

          const outletElement = document.querySelector(`#dropdown`);

          viewRef.rootNodes.forEach((rootNode) => {outletElement.appendChild(rootNode)});
          // this.disposeFn = () => {};
        }

      });
    }, 100);

  }

}
