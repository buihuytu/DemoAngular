import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

// metadata
@Component({  // decorator
  selector: 'app-list-product', // định nghĩa ra 1 thẻ mới
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit{
  
  listProducts: any;
  product: any;

  constructor(private ps: ProductService){}
  
  getAll(){
    this.ps.getList().subscribe(res => {
      this.listProducts = res.list;
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  onDelete(id:number){
    this.ps.delete(id).subscribe(res => {
      this.getAll();
      alert("Delete Successfully!!!");
    })
  }
}
