import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevocontactoPage } from './nuevocontacto.page';

const routes: Routes = [
  {
    path: '',
    component: NuevocontactoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevocontactoPageRoutingModule {}
