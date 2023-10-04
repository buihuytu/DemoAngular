import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{
  
    Id: any;
    Name: any;
    ImPrice: any;
    ProPrice: any;
    Quantity: any;

    editProduct = this.fb.group({
        Id: ['', Validators.required],
        Name: ['', Validators.required],
        ImPrice: ['', Validators.required],
        ProPrice: ['', Validators.required],
        Quantity: ['', Validators.required],
    });
    
    constructor(
        private fb: FormBuilder, 
        private ps: ProductService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(query => {
            console.log(query.get("id"));   // lay id
            let id = query.get("id");
            this.ps.getById(id).subscribe(res => {
                console.log(res); // hien thi ket qua tra ve
                this.editProduct = this.fb.group({
                    Id: [res.productId, Validators.required],
                    Name: [res.productName, Validators.required],
                    ImPrice: [res.imPrice, Validators.required],
                    ProPrice: [res.proPrice, Validators.required],
                    Quantity: [res.quantity, Validators.required],
                });
            });
        })
    }
    
      
    onSubmit() {
        if(!this.editProduct.invalid){
            console.log(this.editProduct.value);
        }
        
        this.Id = this.editProduct.value.Id;
        this.Name= this.editProduct.value.Name;
        this.ImPrice = this.editProduct.value.ImPrice;
        this.ProPrice = this.editProduct.value.ProPrice;
        this.Quantity = this.editProduct.value.Quantity;
        

        var val = new FormData();
        val.append("Id", this.Id);
        val.append("Name", this.Name);
        val.append("ImPrice", this.ImPrice);
        val.append("ProPrice", this.ProPrice);
        val.append("Quantity", this.Quantity);
        
        //them moi
        this.ps.edit(this.Id, val).subscribe(res => {
            console.log(res);    
            alert("Edit Successfully!!!");
            this.router.navigate(['/product'])
        })
    }
  
}
