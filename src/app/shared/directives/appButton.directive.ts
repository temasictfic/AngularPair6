import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAppButton]',
  standalone: true,
})
export class AppButtonDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = 'blue';
    this.el.nativeElement.style.color = 'white';
    this.el.nativeElement.style.borderRadius = '5px';
  }

}
