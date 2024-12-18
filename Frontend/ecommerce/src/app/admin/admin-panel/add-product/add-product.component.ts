import { Component } from '@angular/core';
import { ProductServiceService } from '../../../service/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  productData = {
    name: '',
    price: '',
    description: '',
    stock: '',
    image: ''
  };

  constructor(private productService: ProductServiceService, private router: Router) {}

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.productData.name);
    formData.append('price', this.productData.price);
    formData.append('description', this.productData.description);
    formData.append('stock', this.productData.stock);
    formData.append('image', this.productData.image);

    this.productService.createProduct(formData).subscribe(() => {
      this.router.navigate(['/admin/products']);
    });
  }

  onFileSelected(event: any) {
    this.productData.image = event.target.files[0];
  }

}
