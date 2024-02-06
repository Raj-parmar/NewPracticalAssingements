import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './modules/app-material/app-material.module';


const SHARED_MODULES = [
  AppMaterialModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SHARED_MODULES
  ],
  exports: [
    SHARED_MODULES
  ]
})
export class SharedModule { }