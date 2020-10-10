import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(
    private communicationService: CommunicationService) { }

  ngOnInit() {
  }

  sendMessageToChild1()
  {
    this.communicationService.messageEvent.emit(true);
  }

}
