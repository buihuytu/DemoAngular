import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent{
  
    Name: any;
    ImPrice: any;
    ProPrice: any;
    Quantity: any;

    addProduct = this.fb.group({
        Name: ['', Validators.required],
        ImPrice: ['', Validators.required],
        ProPrice: ['', Validators.required],
        Quantity: ['', Validators.required],
    });
    
    constructor(
        private fb: FormBuilder, 
        private ps: ProductService,
        private router: Router
    ) { }
    
      
    onSubmit() {
        let reqHeaders = new HttpHeaders().set('Content-Type','application/json');
        if(!this.addProduct.invalid){
            console.log(this.addProduct.value);
        }
        
        
        this.Name= this.addProduct.value.Name;
        this.ImPrice = this.addProduct.value.ImPrice;
        this.ProPrice = this.addProduct.value.ProPrice;
        this.Quantity = this.addProduct.value.Quantity;
        

        var val = new FormData();
        val.append("Name", this.Name);
        val.append("ImPrice", this.ImPrice);
        val.append("ProPrice", this.ProPrice);
        val.append("Quantity", this.Quantity);
        
        //them moi
        this.ps.add(val).subscribe(res => {
            console.log(res);    
            alert("Add Successfully!!!");
            this.router.navigate(['/product'])
        })
    }
  
}
