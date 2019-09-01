import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductApiListComponent} from './product-api-list/product-api-list.component'



const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product-api-list', component: ProductApiListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
