import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceProduct } from '../../../core/service/api.service.product';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;
  prod_name: string = '';
  prod_desc: string = '';
  prod_price: number = null;
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiServiceProduct, private formBuilder: FormBuilder, private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('Add product');
    this.meta.updateTag({ name: 'description', content: 'Add product page' });
    this.meta.updateTag({ name: 'keywords', content: 'Angular, Add product' });
  }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      'prod_name': [null, Validators.required],
      'prod_desc': [null, Validators.required],
      'prod_price': [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addProduct(form)
      .subscribe(res => {
        let id = res['_id'];
        this.isLoadingResults = false;
        this.router.navigate(['/detail-products', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
