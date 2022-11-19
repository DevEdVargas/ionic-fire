import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactosPage } from './contactos.page';

const routes: Routes = [
  {
    path : 'nuevocontacto',
    loadChildren: () => import('../nuevocontacto/nuevocontacto.module').then(m => m.NuevocontactoPageModule)
  },

  {
    path: '',
    component: ContactosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactosPageRoutingModule {}
