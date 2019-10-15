import { Component, OnInit } from '@angular/core';
import { ApiServiceProduct } from '../../../core/service/api.service.product';
import { Product } from '../../../core/model/product';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  displayedColumns: string[] = ['prod_name', 'prod_price'];
  data: Product[] = [];
  isLoadingResults = true;

  constructor(private api: ApiServiceProduct, private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('List product');
    this.meta.updateTag({ name: 'description', content: 'List product page' });
    this.meta.updateTag({ name: 'keywords', content: 'Angular, List product' });
  }

  ngOnInit() {
    this.api.getProducts()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
