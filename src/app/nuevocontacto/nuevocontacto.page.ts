import { Component, OnInit } from '@angular/core';
// Agregar las funciones de toastControletr para manejar las notificaciones
import { NavController, LoadingController, ToastController } from '@ionic/angular'
import { ActivatedRoute } from '@angular/router';
//IMPORTAMOS LA CLASE INTERFACE DONDE DEFINIMOS LA ESTRUCTURA DE LA CLASE CONTACTO
import { Contacto } from '../../app/contacto';
//IMPPORTAMOS EL SERVIVCIO DE CONEXION DE LOS DATOS 
import { ContactosService } from '../services/contactos.service';

@Component({
  selector: 'app-nuevocontacto',
  templateUrl: './nuevocontacto.page.html',
  styleUrls: ['./nuevocontacto.page.scss'],
})
export class NuevocontactoPage implements OnInit {

  nuevoContacto = {} as Contacto; 

  constructor(
    private router : ActivatedRoute,
    private toastCtrl : ToastController, //Agregamos Notificaciones
    private nav : NavController,
    private loadingController : LoadingController,
    private contactosService : ContactosService //la comunicacion con la base de datos
  ) { }

  ngOnInit() {
  }

  // METODO PARA EL REGISTRO EN LA BASE DE DATOS 
nuevo(nuevoContacto) {
  this.mostrarMensaje('Guardando...');
  this.contactosService.crearNuevo(this.nuevoContacto).then(() =>{ 
    this.router.navigateByUrl('tabs/contactos');
    this.mostrarMensaje('contacto guadado');
  }, err => {
    this.mostrarMensaje('ocurrio un error');

  });

}

//metodo para mostrar notificaciones
mostrarMensaje(mensaje) {
  this.toastCtrl.create({
    message : mensaje,
    duration : 2000
  }).then( toast => toast.present());
}
}
