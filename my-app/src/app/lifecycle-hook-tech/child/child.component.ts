import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  value: string;

  constructor() {
    console.log("【ChildComponent】： constructor run" + " value is：" + this.value);
  }

  ngOnInit() {
    console.log("【ChildComponent】： ngOnInit run" + " value is：" + this.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("【ChildComponent】： ngOnChanges run" + " value is：" + this.value);
  }

  ngDoCheck(): void {
    console.log("【ChildComponent】： ngDoCheck run");
  }

  ngAfterContentInit(): void {
    console.log("【ChildComponent】： ngAfterContentInit run");
  }

  ngAfterContentChecked(): void {
    console.log("【ChildComponent】： ngAfterContentChecked run");
  }

  ngAfterViewInit(): void {
    console.log("【ChildComponent】： ngAfterViewInit run");
  }

  ngAfterViewChecked(): void {
    console.log("【ChildComponent】： ngAfterViewChecked run");
  }

  ngOnDestroy(): void {
    console.log("【ChildComponent】： ngOnDestroy run");
  }
}
