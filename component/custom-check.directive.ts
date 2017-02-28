import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[isCheck]'
})
export class CustomCheckDirective {

  @Input() isCheck : string;

  constructor(private el: ElementRef, private renderer: Renderer) {
   }
   
   ngOnInit() {
       if(this.isCheck == "true") {
           this.renderer.setElementAttribute(this.el.nativeElement, 'checked', 'true');
       } else {
           this.renderer.setElementAttribute(this.el.nativeElement, 'checked', null);
       }
  }

}
