import { Component, Input, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from 'src/models/response.model';

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html'
})
export class IpComponent {

  ip: string = "";
  http = inject(HttpClient);

  ngOnInit(){
    try {
      this.http.get<Response>("http://ip-api.com/json")
      .subscribe((data) => {
        this.ip = data["query"].replace(/^(\d+\.\d+)/, "XXX.XXX");
      })    
    } catch (error) {
      console.log(error);
    }
  }

  @Input() response!: Response;
}
