import { Component, OnInit } from '@angular/core';

import { Contacto } from '../../app/contacto';

import { ContactosService } from '../services/contactos.service';

import { NavController, LoadingController, ToastController, ActionSheetController, AlertController } from '@ionic/angular';

import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {
// Se crea la propiedad que recibira los registros devueltos
  private contactos: Observable<Contacto[]>; 
//instanciamos el servicio de conexion con firebase
  constructor(private contactosService: ContactosService,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private route: ActivatedRoute , private router: Router,

    ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    // Al cargar buscamos la lista de contactos desde el servicio
    this.contactos = this.contactosService.getContactos();
  }

  async selectContacto(contacto: any){
    let actionsheet = await this.actionSheetCtrl.create({
      header: "que desea hacer?", 
      buttons:[{
        text: 'borrar contacto',
        role: 'destructive',
        handler: () => {
          this.borrar(contacto);
        }
      },{
        text: 'modificar contacto',
        handler: () => {
          alert:(contacto);
          //this.router.navigateByUrl('editarcontactos');

        }
      },{
        text: 'cancelar',
        role: 'cancel', 
        handler: () => {
          console.log('cancel clicked');
          }
      }
    ]
    });
    await actionsheet.present();
  }
async borrar(contacto: any){
  const alert= await this.alertCtrl.create({
    header: 'borrar!',
    message: 'esta segurao de borrar el contacto?',
   buttons: [
    {
      text: 'no',
      role: 'cancel',
      cssClass: 'secondary',
      handler:(blah) => {
        console.log('confirm cansel blah');
       }
    },{
      text: 'si',
      handler:() => {
        this.contactosService.borrarContacto(contacto);
      }
    }
   ]
  });
  await alert.present();
}
}
