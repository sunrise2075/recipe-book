import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class Dropdown {

private isOpen: boolean = false;

@HostBinding('class.open') get opened(){
  return this.isOpen;
}

@HostListener('click') open(){
  this.isOpen = true;
}
  @HostListener('mouseleave') close(){
    this.isOpen = false;
  }
}
