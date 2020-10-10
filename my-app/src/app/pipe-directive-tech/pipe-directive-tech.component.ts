import { Component, Directive, ElementRef, HostListener, OnInit, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-pipe-directive-tech',
  templateUrl: './pipe-directive-tech.component.html',
  styleUrls: ['./pipe-directive-tech.component.css']
})
export class PipeDirectiveTechComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  pipeInput1: string;

  pipeInput2: string;

  directiveInput1: string;

  directiveInput2: string;

}

@Pipe({ name: 'accuracy' })
export class AccuracyPipe implements PipeTransform {
  transform(value: string): string {
    if (value != null && value != "") {
      return parseFloat(value).toFixed(1);
    }
  }
}

@Directive({
  selector: '[accuracyDirective]'
})
export class AccuracyDirective {
  constructor(private el: ElementRef) {
  }
  @HostListener('blur') onBlur() {
    if (this.el.nativeElement.value == "") {
      return;
    }
    //这里响应input失焦事件，目的是为了实现输入1失焦后变为1.0的效果;
    var myreg = /^[0-9]*$/;
    if (myreg.test(this.el.nativeElement.value)) {
      this.el.nativeElement.value = parseInt(this.el.nativeElement.value).toFixed(1);
    }
  }
}