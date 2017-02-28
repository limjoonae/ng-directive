import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[customDisabled]'
})
export class CustomDisabledDirective {

  @Input() customDisabled : string;

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  ngOnInit() {
       if(this.customDisabled == "true") {
           this.renderer.setElementAttribute(this.el.nativeElement, 'disabled', 'true');
       } else {
           this.renderer.setElementAttribute(this.el.nativeElement, 'disabled', null);
       }
  }

}
