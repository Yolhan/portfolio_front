import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {

  messages: string[] = [];

  constructor(private messageservice: MessageService) {}

  ngOnInit() {
    this.messageservice.add("Message Service Started.");
    this.messageservice.add("Two");
    this.messageservice.add("Three");
    this.messageservice.add("Four");
    this.messageservice.add("Five");
    this.messageservice.add("Six");
    this.messageservice.getMessages().subscribe(messages => this.messages = messages);
  }

  

}
