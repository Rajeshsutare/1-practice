import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEvents]'
})
export class EventsDirective {

  constructor(private _eleRef:ElementRef) { }

 



}
