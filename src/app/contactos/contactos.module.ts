import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ContactosPageRoutingModule } from './contactos-routing.module';
import { ContactosPage } from './contactos.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    ContactosPageRoutingModule  ],
  declarations: [ContactosPage]})
export class ContactosPageModule {}
