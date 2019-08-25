import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTask1';
  constructor (private httpService: HttpClient) { }
  arrSample: string [];

  ngOnInit () {
    this.httpService.get('./assets/Sample.JSON').subscribe(
      data => {
        this.arrSample = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrSample[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
