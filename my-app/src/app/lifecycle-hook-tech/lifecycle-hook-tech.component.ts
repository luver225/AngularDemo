import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook-tech',
  templateUrl: './lifecycle-hook-tech.component.html',
  styleUrls: ['./lifecycle-hook-tech.component.css']
})
export class LifecycleHookTechComponent implements OnInit {

  parentValue: number;

  constructor() {
    console.log("【LifecycleHookTechComponent】： constructor run");
  }

  ngOnInit() {
    console.log("【LifecycleHookTechComponent】： ngOnInit run");
    this.parentValue = 1;
  }

  changeValue() {
    this.parentValue++;
  }

}
