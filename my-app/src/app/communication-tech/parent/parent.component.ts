import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  parentInput: string;

  parentLable: string;

  getMessage(message: boolean) {
    if (message) {
      this.parentLable = "来自子组件1的消息"
    }
  }

}
