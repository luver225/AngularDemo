import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor() { }


  @Output() messageEvent  = new EventEmitter<boolean>();


}
