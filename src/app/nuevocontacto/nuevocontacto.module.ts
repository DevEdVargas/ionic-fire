import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevocontactoPageRoutingModule } from './nuevocontacto-routing.module';

import { NuevocontactoPage } from './nuevocontacto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevocontactoPageRoutingModule
  ],
  declarations: [NuevocontactoPage]
})
export class NuevocontactoPageModule {}
