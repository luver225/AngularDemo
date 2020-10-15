import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from './httpservice.service';

@Component({
  selector: 'app-http-tech',
  templateUrl: './http-tech.component.html',
  styleUrls: ['./http-tech.component.css']
})
export class HttpTechComponent implements OnInit {

  constructor(private httpserviceService: HttpserviceService) { }

  ngOnInit() {
  }

  //回调嵌套
  callbackTest() {
    console.log("[callbackTest]:function call start");

    this.httpserviceService.getFirst().subscribe(
      ret => {
        console.log(ret);

        this.httpserviceService.getSecond().subscribe(
          ret => {
            console.log(ret);
          }
        )
      }
    )

    console.log("[callbackTest]:function call end");
  }


  //await/async
  async awaitasyncTest() {
    console.log("[awaitasyncTest]:function call start");

    let firstValue = await this.httpserviceService.getFirst().toPromise();
    console.log(firstValue);

    let secondValue = await this.httpserviceService.getSecond().toPromise();
    console.log(secondValue);

    console.log("[awaitasyncTest]:function call end");

  }
}
