import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

    children: [
      {
        path: 'product',
        loadChildren: () => import('./view/product/product.module').then(m => m.ProductModule)
      },

      {
        path: 'product-detail',
        loadChildren: () => import('./view/product-detail/product-detail.module').then(m => m.ProductDetailModule)
      },

      {
        path: 'form',
        loadChildren: () => import('./view/form/form.module').then(m => m.FormModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
