import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarcontactoPageRoutingModule } from './editarcontacto-routing.module';

import { EditarcontactoPage } from './editarcontacto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarcontactoPageRoutingModule
  ],
  declarations: [EditarcontactoPage]
})
export class EditarcontactoPageModule {}
