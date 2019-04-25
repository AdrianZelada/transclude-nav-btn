import { AfterContentInit, Component, OnInit, ContentChild, Input, TemplateRef, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'tp3-dropdown-btn-component',
  templateUrl: './dropdown-btn-component.component.html',
  styleUrls: ['./dropdown-btn-component.component.scss']
})
export class DropdownBtnComponentComponent implements AfterContentInit {
  isVisible: boolean = true;
  @Input() data: any = {};
  @Input() i: any;
  @ContentChild(TemplateRef)
  @Input() layoutTemplate: TemplateRef<any>;
  @ViewChild('singleNav') singleNav: ElementRef;
  public location: string = 'nav';
  constructor() { }

  ngAfterContentInit() {}
  public getWidth() {
    // if (this.singleNav) {
      console.log('2---------------------', this.singleNav);
      return this.singleNav.nativeElement.offsetWidth;
    // }
  }

  public getData() {
    return this.data;
  }

  public getTemplate() {
    return this.layoutTemplate;
  }

  public hidden() {
    this.isVisible = false;
  }

  public toogle() {
    this.isVisible = !this.isVisible;
  }
  public show() {
    console.log('4-.....................');
    this.isVisible = true;
  }
}
