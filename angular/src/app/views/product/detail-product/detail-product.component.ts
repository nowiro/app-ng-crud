import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceProduct } from '../../../core/service/api.service.product';
import { Product } from '../../../core/model/product';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
  product: Product = {
    productId: '',
    productName: '',
    productDesc: '',
    productPrice: null,
    productUpdatedAt: null
  };
  isLoadingResults = true;

  constructor(
    private route: ActivatedRoute,
    private api: ApiServiceProduct,
    private router: Router,
    private titleService: Title,
    private meta: Meta
  ) {
    this.titleService.setTitle('Detail product');
    this.meta.updateTag({
      name: 'description',
      content: 'Detail product page'
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Angular, Detail product'
    });
  }

  ngOnInit() {
    console.log(this.route.snapshot.params.id);
    this.getProductDetails(this.route.snapshot.params.id);
  }

  getProductDetails(id) {
    this.api.getProduct(id).subscribe(data => {
      this.product = data;
      console.log(this.product);
      this.isLoadingResults = false;
    });
  }

  deleteProduct(id) {
    this.isLoadingResults = true;
    this.api.deleteProduct(id).subscribe(
      res => {
        this.isLoadingResults = false;
        this.router.navigate(['/products']);
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
