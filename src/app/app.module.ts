import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListProductComponent } from './app/product/list-product/list-product.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './app/home/home.component';
import { AddProductComponent } from './app/product/add/add-product.component';
import { EditProductComponent } from './app/product/edit/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListProductComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
