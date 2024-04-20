import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentcrudComponent } from './studentcrud/studentcrud.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StudentcrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClient } from '@angular/common/http';

constructor(private http: HttpClient) { }

import { HttpClient } from '@angular/common/http';

constructor(private http: HttpClient) { }

ngOnInit() {
  this.http.get('https://httpbin.org/get').subscribe((response) => {
    console.log('Response:', response);
  });
}
