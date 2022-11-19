import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'contactos',
    loadChildren: () => import('./contactos/contactos.module').then( m => m.ContactosPageModule)
  },
  {
    path: 'nuevocontacto',
    loadChildren: () => import('./nuevocontacto/nuevocontacto.module').then( m => m.NuevocontactoPageModule)
  },
  {
    path: 'editarcontacto',
    loadChildren: () => import('./editarcontacto/editarcontacto.module').then( m => m.EditarcontactoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
