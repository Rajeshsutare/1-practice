import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productForm!:FormGroup;
  public productsArray:Array<any>=[];
  public pId !:any;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    let data = localStorage.getItem('productObj')
    if(data != null){
     this.productsArray = JSON.parse(data)
    }
    let catlogdata = localStorage.getItem('catlogObj')
    if(catlogdata != null){
     this.productsArray = JSON.parse(catlogdata)
    }
    
  }
  createForm(){
    this.productForm = this._fb.group({
      name:new FormControl(null,[Validators.required]),
      description:new FormControl(null,[Validators.required]),
      category:new FormControl(null,[Validators.required]),
    })
  }

  onProductForm(){
  console.log(  this.productForm.value);
  let productObj = {
      name:this.productForm.controls['name'].value,
      description:this.productForm.controls['description'].value,
      category:this.productForm.controls['category'].value,
      pId :this.productsArray.length+1
    }
    this.productsArray.push(productObj)
    console.log(this.productsArray);
    this.productForm.reset()
    localStorage.setItem('productObj',JSON.stringify(this.productsArray))
  }

  onCatlog(){
    let catlogObj={
      name:this.productForm.controls['name'].value,
      description:this.productForm.controls['description'].value,
      category:this.productForm.controls['category'].value,
      pId :this.productsArray.length+1
    }
    this.productsArray.push(catlogObj)
    localStorage.setItem("catlogObj",JSON.stringify(this.productsArray))
  }

  onDelCard(id:any){
    for(let i=0; i<this.productsArray.length; i++){
      if(this.productsArray[i].pId === id){
        this.productsArray.splice(i,1)
      }
    }
  }

}
