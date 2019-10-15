import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiServiceProduct } from '../../../core/service/api.service.product';
import { Product } from '../../../core/model/product';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  productForm: FormGroup;
  _id: string = '';
  prod_name: string = '';
  prod_desc: string = '';
  prod_price: number = null;
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiServiceProduct, private formBuilder: FormBuilder, private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('Edit product');
    this.meta.updateTag({ name: 'description', content: 'Edit product page' });
    this.meta.updateTag({ name: 'keywords', content: 'Angular, Edit product page' });
  }

  ngOnInit() {
    this.getProduct(this.route.snapshot.params['id']);
    this.productForm = this.formBuilder.group({
      'prod_name': [null, Validators.required],
      'prod_desc': [null, Validators.required],
      'prod_price': [null, Validators.required]
    });
  }

  getProduct(id) {
    this.api.getProduct(id).subscribe(data => {
      this._id = data._id;
      this.productForm.setValue({
        prod_name: data.prod_name,
        prod_desc: data.prod_desc,
        prod_price: data.prod_price
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateProduct(this._id, form)
      .subscribe(res => {
        let id = res['_id'];
        this.isLoadingResults = false;
        this.router.navigate(['/detail-products', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
      );
  }

  productDetails() {
    this.router.navigate(['/detail-products', this._id]);
  }

}
