import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
//import { AppComponent } from './app.component';
import { ContactComponent } from "./views/contact/contact.component";
import { AboutComponent } from "./views/about/about.component";
import { PageNotFoundComponent } from "./views/page-not-found/page-not-found.component";
import { HomeComponent } from "./views/home/home.component";

import { LoginComponent } from "./views/login/login.component";

import { AddUserComponent } from "./views/user/add-user/add-user.component";
import { ListUserComponent } from "./views/user/list-user/list-user.component";
import { EditUserComponent } from "./views/user/edit-user/edit-user.component";

import { ListProductComponent } from "./views/product/list-product/list-product.component";
import { DetailProductComponent } from "./views/product/detail-product/detail-product.component";
import { AddProductComponent } from "./views/product/add-product/add-product.component";
import { EditProductComponent } from "./views/product/edit-product/edit-product.component";
import { ChatComponent } from "./views/chat/chat.component";

const routes: Routes = [
  //{ path: '', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule) },
  {
    path: "",
    component: HomeComponent,
    data: { title: "Main page" }
  },
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "chat",
    component: ChatComponent,
    data: { title: "Chat" }
  },
  {
    path: "about",
    component: AboutComponent,
    data: { title: "About us" }
  },
  {
    path: "contact",
    component: ContactComponent,
    data: { title: "Contact" }
  },
  {
    path: "login",
    component: LoginComponent,
    data: { title: "Login" }
  },
  {
    path: "user/add",
    component: AddUserComponent,
    data: { title: "Add user" }
  },
  {
    path: "user",
    component: ListUserComponent,
    data: { title: "User list" }
  },
  {
    path: "user/edit",
    component: EditUserComponent,
    data: {
      title: "Edit user"
    }
  },
  {
    path: "user/list",
    redirectTo: "/user",
    pathMatch: "full"
  },
  {
    path: "product",
    component: ListProductComponent,
    data: { title: "List of Products" }
  },
  {
    path: "product/detail/:id",
    component: DetailProductComponent,
    data: { title: "Detail Product" }
  },
  {
    path: "product/add",
    component: AddProductComponent,
    data: { title: "Add Product" }
  },
  {
    path: "product/edit/:id",
    component: EditProductComponent,
    data: { title: "Edit Product" }
  },
  {
    path: "product/list",
    redirectTo: "/product",
    pathMatch: "full"
  },
  {
    path: "**",
    component: PageNotFoundComponent,
    data: { title: "Page Not Found" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
