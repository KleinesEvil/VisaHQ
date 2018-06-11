import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IOrders } from './orders';
import { IAgents } from './agents';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

	private _ordersUrl: string = "/assets/data/orders.json";
	private _agentsUrl: string = "/assets/data/agents.json";

  constructor(private http: HttpClient) { }

  getOrders(): Observable<IOrders[]>{
  	return this.http.get<IOrders[]>(this._ordersUrl)
  		.catch(this.errorHandler);
  }

  getAgents(): Observable<IAgents[]>{
  	return this.http.get<IAgents[]>(this._agentsUrl)
  		.catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
  		return Observable.throw(error.message || "Server Error");
  }
}
