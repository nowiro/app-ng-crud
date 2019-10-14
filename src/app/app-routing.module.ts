import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AppComponent } from './app.component';
import { ContactComponent } from './modules/contact/contact.component';
import { AboutComponent } from './modules/about/about.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from "./modules/login/login.component";
import { AddUserComponent } from "./modules/user/add-user/add-user.component";
import { ListUserComponent } from "./modules/user/list-user/list-user.component";
import { EditUserComponent } from "./modules/user/edit-user/edit-user.component";

const routes: Routes = [

  //{ path: '', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule) },
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Main page' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About us' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'add-user',
    component: AddUserComponent,
    data: { title: 'Add user' }
  },
  {
    path: 'list-user',
    component: ListUserComponent,
    data: { title: 'User list' }
  },
  {
    path: 'edit-user',
    component: EditUserComponent,
    data: {
      title: 'Edit user'
    }
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { title: 'Page Not Found' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
