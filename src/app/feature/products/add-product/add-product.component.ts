import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { OrderHistoryService } from '../services/order-history.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  displayedColumns: string[] = ['name', 'image', 'price', 'quantity', 'discount', 'total'];

  constructor(private orderHistoryService: OrderHistoryService,private _snackBar: MatSnackBar,) {}
  
  ngOnInit(): void {
    this.productForm = new UntypedFormGroup({
      name: new UntypedFormControl(null, Validators.required),
      image: new UntypedFormControl(null, Validators.required),
      price: new UntypedFormControl(null, Validators.required),
      quantity: new UntypedFormControl(null, Validators.required),
      discount: new UntypedFormControl(null, Validators.required),
    });
  } 

  addProduct(){    
    this.orderHistoryService.postData(this.productForm.value).subscribe(
      (response: any) => {
        this._snackBar.open(response.message, '', {
          duration: 3000,
          panelClass:'success',
          horizontalPosition:'center',
          verticalPosition:'top'
        });          
      },
      (error) => {
        console.log("error",error)
        this._snackBar.open(error.error.message, '', {
          duration: 3000,
          panelClass:'fail',
          horizontalPosition:'center',
          verticalPosition:'top'
        });
      }
    );
  }

 

}
