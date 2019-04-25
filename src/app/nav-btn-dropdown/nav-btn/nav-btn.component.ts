import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input, OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';

@Component({
  exportAs: 'tutator-nav-btn',
  selector: 'tutator-nav-btn',
  templateUrl: './nav-btn.component.html',
  styleUrls: ['./nav-btn.component.scss']
})
// export class NavBtnComponent implements OnInit {
export class NavBtnComponent implements AfterContentInit, OnDestroy{

  isVisible: boolean = true;
  @Input() data: any = {};
  @Input() ind: any;

  @ContentChild(TemplateRef)
  @Input() layoutTemplate: TemplateRef<any>;

  @ViewChild('singleNav') singleNav: ElementRef;
  private changes: MutationObserver;

  @Output()
  public domChange = new EventEmitter();


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

    // this.changes = new MutationObserver((mutations: MutationRecord[]) => {
    //     // mutations.forEach((mutation: MutationRecord) => this.domChange.emit(mutation));
    //     mutations.forEach((mutation: MutationRecord) => this.domChange.emit({
    //       data: this.data,
    //       width: this.singleNav.nativeElement.offsetWidth,
    //       template: this.layoutTemplate,
    //       ind: this.ind
    //     }));
    //   }
    // );
    //
    // this.changes.observe(this.singleNav.nativeElement , {
    //   attributes: true,
    //   childList: true,
    //   characterData: true
    // });
    //
    // this.changes = new MutationObserver((mutations: MutationRecord[]) => {
    //     // mutations.forEach((mutation: MutationRecord) => this.domChange.emit(mutation));
    //
    //     mutations.forEach((mutation: MutationRecord) => {
    //       if (mutation.target.nodeName === '#text') {
    //         // console.log("mutation");
    //         // console.log(mutation);
    //         // console.log(this.data);
    //         // setTimeout(() => {
    //         console.log('offsetWidth');
    //         console.log(this.singleNav.nativeElement.offsetWidth);
    //         this.domChange.emit({
    //           data: this.data,
    //           width: this.singleNav.nativeElement.offsetWidth,
    //           template: this.layoutTemplate,
    //           // ind: this.ind
    //         });
    //         // }, 100)
    //
    //       }
    //     });
    //   }
    // );
    //
    // this.changes.observe(this.singleNav.nativeElement , {
    //   attributes: true,
    //   childList: true,
    //   characterData: true,
    //   subtree: true
    // });

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

  ngOnDestroy() {
    // this.changes.disconnect();
  }

}
