import {  Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[customMaxlength]'
})
export class CustomMaxlengthDirective {

  @Input() customMaxlength : string;

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  ngOnInit() {
       if(this.customMaxlength) {
           this.renderer.setElementAttribute(this.el.nativeElement, 'maxlength', this.customMaxlength);
       } else {
           this.renderer.setElementAttribute(this.el.nativeElement, 'maxlength', null);
       }
  }

}
