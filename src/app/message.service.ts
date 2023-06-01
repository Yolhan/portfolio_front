import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: string[] = [];
  private maxmessages: number = 5;

  constructor() { }

  add(message: string) {
    if (this.messages.length >= this.maxmessages)
      this.messages.shift();
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  getMessages(): Observable<string[]> {
    return of(this.messages);
  }
}
