import {AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  exportAs: 'tutator-nav-btn',
  selector: 'tutator-nav-btn',
  templateUrl: './nav-btn.component.html',
  // styleUrls: ['./nav-btn.component.scss']
})
// export class NavBtnComponent implements OnInit {
export class NavBtnComponent implements AfterContentInit{

  isVisible: boolean = true;
  @Input() data: any = {};

  @ContentChild(TemplateRef)
  @Input() layoutTemplate: TemplateRef<any>;

  @ViewChild('singleNav') singleNav: ElementRef;
  constructor() { }
  //
  // ngOnInit() {
  //
  public location: string = 'nav';

  ngAfterContentInit() {
    // console.dir(this.singleNav.nativeElement)
    // console.log(this.singleNav.nativeElement.offsetWidth);
    // setTimeout(() => {
    //   console.dir(this.singleNav.nativeElement)
    //   console.log(this.singleNav.nativeElement.offsetWidth);
    // }, 1000);
    // console.log()
  }

  public getWidth() {
    return this.singleNav.nativeElement.offsetWidth;
  }

  public getData() {
    return this.data;
  }

  public getTemplate() {
    return this.layoutTemplate;
  }

  public hidden() {
    this.isVisible = false;
    // this.singleNav.nativeElement.style.display = 'none';
  }


}
