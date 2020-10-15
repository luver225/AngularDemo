import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  parentInput: string;

  parentLable: string;
  
  constructor() { }

  ngOnInit() {
  }

  getMessage(message: boolean) {
    if (message) {
      this.parentLable = "来自子组件1的消息"
    }
  }

}
