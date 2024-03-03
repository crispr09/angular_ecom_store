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
  onCategoryClick(id: any) {
    this.getProductsByCategory(id);
  }
  productList: any[] = [];
  categoryList: any[] = [];
  constructor(private prodSrrvice: ProductService) {}
  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.prodSrrvice.getProducts().subscribe((res: any) => {
      this.productList = res;
    });
  }

  getCategories() {
    this.prodSrrvice.getCategories().subscribe((res: any) => {
      this.categoryList = res;
    });
  }
  getProductsByCategory(id: any) {
    this.prodSrrvice.getProductsByCategory(id).subscribe((res: any) => {
      this.productList = res;
    });
  }
}
