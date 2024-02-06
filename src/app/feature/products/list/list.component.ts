import { Component, OnInit } from '@angular/core';
import { OrderHistoryService } from '../services/order-history.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface product {
  "name": string;
  "image": string;
  "price": number;
  "quantity": number;
  "discount": number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // productForm: FormGroup;
  displayedColumns: string[] = ["name","image","price","quantity","discount"];
  // dataSource: product[] = [
    // {name: "raj","image": "dd/image", "price": 50, "quantity": 2, "discount": 1}
  // ];
  dataSource:[]=[];
  productForm: FormGroup;

  constructor(
    private orderHistoryService: OrderHistoryService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // this.productListForm = this.fb.group({
    //   products: this.fb.array([])  // FormArray for products
    // });
    this.initForm();
  }

  initForm(){
    this.orderHistoryService.getOrderHistory().subscribe(
      (response:any) => {
        this.dataSource = response;
      },
      (err) => {
        console.log('error ', err);
      }
    );
  }

  getTotalCost(transaction: any) {
    return this.dataSource.map(t => t['price']).reduce((acc, value) => acc + value, 0);

  } 

}
