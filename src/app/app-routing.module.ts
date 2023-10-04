import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './app/product/list-product/list-product.component';
import { HomeComponent } from './app/home/home.component';
import { AddProductComponent } from './app/product/add/add-product.component';
import { EditProductComponent } from './app/product/edit/edit-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'product',
    children:
    [
      {
        path:"",
        component: ListProductComponent,
      },
      {
        path:'add',
        component: AddProductComponent,
      },
      {
        path:'edit/:id',
        component: EditProductComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
