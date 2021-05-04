import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  items = [];

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json')
  }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor(
    private http: HttpClient
  ) { }

}