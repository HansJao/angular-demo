import { Component ,Input} from '@angular/core';
import { Directive, ElementRef } from '@angular/core';
import { Http, Response ,Headers,RequestOptions,RequestMethod,Request} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Login Page';
  subtitle = "(v1)";
  constructor(protected http: Http) {}

ngOnInit() {
  var headers = new Headers();
        headers.append("Content-Type", 'application/json');
        //headers.append('Access-Control-Allow-Origin', 'http://localhost:84');
var param: any = { merchantid: "0", campaignid: "0",productid:"0",qty:"0",vouchers:[{voucherno:"string",time:"",storename:"s",posno:"",username:""}] };
        //headers.append("Accept", 'application/json');


        var requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: "/api/Common/Query",
            headers: headers,
            body: JSON.stringify(param)
        })

        var x = this.http.request(new Request(requestoptions))
        .map((res: Response) => {
            if (res) {
                return { status: res.status, json: res.json() }
            }
        }).subscribe(data => this.subtitle = data.json.ts);

      // let url = '/opendata/datalist/apiAccess?scope=resourceAquire&rid=0b544701-fb47-4fa9-90f1-15b1987da0f5';
      // var x = this.http.get(url).map(x=>x.json()).subscribe(data=>this.subtitle = data.result.count);
      }
}





@Directive({ selector: '[highlight]' })
/** Highlight the attached element in gold */
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'gold';
    console.log(
      `* AppRoot highlight called for ${el.nativeElement.tagName}`);
  }
}


