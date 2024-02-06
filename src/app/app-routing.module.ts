import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './feature/products/list/list.component';

const routes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: '',
        loadChildren: () =>
        import('./feature/products/products.module').then(m => m.ProductsModule),
      }
    ]
  },
  {
    path: '**',
    component: ListComponent ,
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
