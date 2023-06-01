import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "wiggles";

  constructor(private http: HttpClient) { }

  public getImage(): Observable<any> {
    return this.http.get(this.url);
  }
}
