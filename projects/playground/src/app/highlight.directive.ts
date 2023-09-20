import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: 'p[highlight]',
})
export class highlightDirective {
  //constructor(private elementRef: ElementRef<HTMLElement>) {
  //elementRef.nativeElement.addEventListener('mouseenter', () => {
  //console.log('On est rentré');
  //});
  //}
  @HostBinding('style.backgroundColor')
  color = 'transparent';

  ngOnInit() {
    this.color = this.baseColor;
  }

  @Input('background-color')
  backgroundColor = 'yellow';

  @Input('base-color')
  baseColor = 'transparent';

  @HostListener('mouseenter')
  onMouseEnter() {
    //console.log('On est rentrés !', clientX, clientY);
    this.color = this.backgroundColor;
  }

  @HostListener('mouseout')
  onMouseOut() {
    //this.color = 'transparent';
    this.color = this.baseColor;
  }
}

//const p = querySelector(p[highlight]);
//elementRef <--- p
//const x = new HightlightDirective(elementRef)
