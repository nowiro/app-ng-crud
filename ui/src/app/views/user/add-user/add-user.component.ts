import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceUser } from '../../../core/service/api.service.user';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiServiceUser,
    private titleService: Title,
    private meta: Meta
  ) {
    this.titleService.setTitle('Add user');
    this.meta.updateTag({ name: 'description', content: 'Add user page' });
    this.meta.updateTag({ name: 'keywords', content: 'Angular, Add user' });
  }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required]
    });
  }

  onSubmit() {
    this.apiService.createUser(this.addForm.value).subscribe(data => {
      this.router.navigate(['list-user']);
    });
  }
}
