import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class OrderListService {

  private api_url = 'http://localhost:3000/order-list';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  // GET /order-list
  getList(): {
    return this.http.get(this.api_url)
    .toPromise()
    .then(res => res)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
