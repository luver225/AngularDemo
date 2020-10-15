import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://127.0.0.1:9999//api";

  //3s后返回"first"
  getFirst() {
    var url = this.baseUrl + "/getfirst";
    return this.http.get(url);
  }

  //3s后返回"second"
  getSecond() {
    var url = this.baseUrl + "/getsecond";
    return this.http.get(url);
  }

}
