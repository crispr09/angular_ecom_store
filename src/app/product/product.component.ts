import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  productList: any[] = [];
  constructor(private prodSrrvice: ProductService) {}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.prodSrrvice.getProducts().subscribe((res: any) => {
      debugger;
      this.productList = res;
    });
  }
}
