import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { AddUserComponent } from './views/user/add-user/add-user.component';
import { ListUserComponent } from './views/user/list-user/list-user.component';
import { EditUserComponent } from './views/user/edit-user/edit-user.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ApiServiceUser } from "./core/service/api.service.user";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TokenInterceptor } from "./core/interceptor";
import { AddProductComponent } from './views/product/add-product/add-product.component';
import { EditProductComponent } from './views/product/edit-product/edit-product.component';
import { DetailProductComponent } from './views/product/detail-product/detail-product.component';
import { ListProductComponent } from './views/product/list-product/list-product.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    HomeComponent,
    LoginComponent,
    AddUserComponent,
    ListUserComponent,
    EditUserComponent,
    AddProductComponent,
    ListProductComponent,
    EditProductComponent,
    DetailProductComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiServiceUser, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
