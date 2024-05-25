import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppNoCharacterInput]',
  standalone: true,
})
export class AppNoCharacterInputDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: { stopPropagation: () => void; }) {
    const initalValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initalValue.replace(/[\d]*/g, '');
    if ( initalValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}