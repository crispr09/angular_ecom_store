import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from './constants';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(
      Constants.API_END_POINT + Constants.METHODS.GET_ALL_PRODUCTS
    );
  }
  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(
      Constants.API_END_POINT + Constants.METHODS.GET_ALL_CATOGRY
    );
  }
  getProductsByCategory(id: any): Observable<any[]> {
    return this.http.get<any[]>(
      Constants.API_END_POINT +
        Constants.METHODS.GET_ALL_PRODUCTS_BY_CATEGORY +
        id
    );
  }
  register(obj: any): Observable<any> {
    debugger;
    return this.http.post(
      Constants.API_END_POINT + Constants.METHODS.REGISTER_USER,
      obj
    );
  }
  login(obj: any): Observable<any> {
    debugger;
    return this.http.post(
      Constants.API_END_POINT + Constants.METHODS.LOGIN_USER,
      obj
    );
  }
  addToCart(id: number, productId: number, obj: any): Observable<any> {
    debugger;
    return this.http.post(
      Constants.API_END_POINT + Constants.METHODS.ADD_TO_CART + id + productId,
      obj
    );
  }
}
