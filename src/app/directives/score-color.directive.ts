import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appScoreColor]'
})
export class ScoreColorDirective implements OnInit {
  @Input() appScoreColor!: number;
  colors: string[] = [
    '#ff7014',
    '#ff7014',
    '#099c45',
    '#099c45',
    '#0741cb'
  ]

  lightColors: string[] = [
    '#ffcf00',
    '#ffcf00',
    '#9cce3f',
    '#9cce3f',
    '#5ebce1'
  ];

  constructor(private el: ElementRef) {
    
  }
  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.colors[this.appScoreColor - 1];
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.lightColors[this.appScoreColor - 1];
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = this.colors[this.appScoreColor - 1];
  }

  @HostListener('load') onLoad() {
    this.el.nativeElement.style.backgroundColor = this.colors[this.appScoreColor - 1];
  }

}
