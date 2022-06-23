import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './component/administration/administration.component';
import { MerchantWorkbenchComponent } from './component/merchant-workbench/merchant-workbench.component';

const routes: Routes = [
  { path: 'administration', component: AdministrationComponent},
  { path: 'merchant-workbench', component: MerchantWorkbenchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AdministrationComponent,MerchantWorkbenchComponent]
