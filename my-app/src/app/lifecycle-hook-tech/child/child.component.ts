import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  //1, F12, 在Console中观察每个钩子函数的执行顺序，包括初始化时，@input属性改变时..
  //2, 组件中有@input属性时，子组件在初始化时, constructor() --> ngOnChanges() --> ngOnInit()，在constructor()是获取不到@Input值的，在ngOnChanges(), ngOnInit()可以获取@Input值
  //3, 父组件改变@Input()值，子组件会触发ngOnChanges()

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
