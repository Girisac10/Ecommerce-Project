import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../../service/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products: any[] = [];

  constructor(private productService: ProductServiceService, private router: Router) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts();

    this.productService.currentProducts.subscribe(
      (data:any) => {
        this.products = data.products
      }
    )
  }

  deleteProduct(id: string) {
    if (confirm('Are you sure to delete this product?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.loadProducts();
      });
    }
  }

  editProduct(id: string) {

  }

  navigateToAddProduct() {
    this.router.navigate(['/admin/add-product']);
  }

  logout() {
    // Implement logout logic here
    console.log('Logout clicked');
  }

}
