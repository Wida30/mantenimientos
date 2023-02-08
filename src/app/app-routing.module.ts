import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './Maintenanace/list/list.component';

import { StoresComponent } from './Store/stores/stores.component';
import { NewmaintComponent } from './Maintenanace/newmaint/newmaint.component';

const routes: Routes = [
  {path: "", pathMatch: "full", component: StoresComponent},
  {path: "newmaintenance", pathMatch: "full", component: NewmaintComponent},
   {path: "list", pathMatch: "full", component: ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
