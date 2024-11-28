import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupermarketComponent } from './supermarket/supermarket.component';
import { AuthGuard } from './guards/secure.guard';


const routes: Routes = [{path: "supermarket", component : SupermarketComponent,canActivate:[AuthGuard],
  data : {roles:['ADMIN']}}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
