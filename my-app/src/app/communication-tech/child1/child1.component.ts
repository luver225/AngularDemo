import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(
    private communicationService: CommunicationService) { }

  ngOnInit() {
    this.communicationService.messageEvent.subscribe(
      data =>{
        if(data)
        {
          this.child2Message = "来自子组件2的消息"
        }
      }
    )
  }

  @Input() 
  parentInput: string;
  
  @Output() 
  public toParnet = new EventEmitter<boolean>();

  child2Message:string;

  sendMessageToParent()
  {
    this.toParnet.emit(true);
  }
}
