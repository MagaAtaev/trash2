import { Directive, ElementRef, HostBinding, HostListener, Input, computed, effect, input, signal } from '@angular/core';

@Directive({
  selector: '[bold]',
  standalone: true
})
export class BoldDirective {

  initFontSize = input("15px")

  private fontSize = computed(() => {   
    if (this.smallSize()) {
      return this.smallSize()
    } else {
      return this.initFontSize()
    }
  })

  private smallSize = signal("")

  constructor(private elRef: ElementRef) {
    this.elRef.nativeElement.style.fontWeight = "bold"
  }

  @HostBinding("style.fontSize")
  get getFontSize() {
    return this.fontSize()
  }

  @HostListener("mouseenter")
  onMouseEnter() {
    this.smallSize.set("15px")
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.smallSize.set("")
  }
}
