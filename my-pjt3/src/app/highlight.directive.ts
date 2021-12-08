import { Directive,ElementRef,HostBinding,HostListener,Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  
  constructor(private el:ElementRef,private renderer:Renderer2) { 
    el.nativeElement.style.color="red";
  }
  ngOnInit(){
    this.renderer.setStyle(this.el.nativeElement,'font-s','khaki');
    
  }

   @HostBinding("style.backgroundColor") bgColor;
   @HostListener('mouseenter') mouseEnter() {
     this.changeColor("blue");
    this,this.bgColor="khaki";
    }
   changeColor(color){
     this.el.nativeElement.style.color=color;
  } 
   @HostListener('mouseleave') mouseLeave() {
     this.changecolor("orange");
   }
   changecolor(color){
     this.el.nativeElement.style.color=color;
   }

}
