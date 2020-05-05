import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
  title = 'eventplanner';
constructor(private http: HttpClient) { }
ngOnInit() {
    this.http.get<any>('/json/greeting').subscribe(data => this.title = data.content);
    
  }

}
