import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[customReadonly]'
})
export class CustomReadonlyDirective {

  @Input() customReadonly : string;

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  ngOnInit() {
       if(this.customReadonly == "true") {
           this.renderer.setElementAttribute(this.el.nativeElement, 'readonly', 'true');
       } else {
           this.renderer.setElementAttribute(this.el.nativeElement, 'readonly', null);
       }
  }

}
