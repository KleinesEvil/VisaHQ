import { Component, OnInit } from '@angular/core';
import { OrdersService } from './../orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

	public orders = [];
	public agents = [];
	public errorMsg;

  constructor(private _ordersService: OrdersService) { }

  ngOnInit() {
  	this._ordersService.getOrders()
  		.subscribe(data => this.orders = data,
  						error => this.errorMsg = error);
  	this._ordersService.getAgents()
  		.subscribe(data => this.agents = data,
  						error => this.errorMsg = error);
  }

}
