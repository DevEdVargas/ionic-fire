import { Injectable } from '@angular/core';

import { AngularFirestoreCollection, AngularFirestore, DocumentReference, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map, take} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Contacto } from '../../app/contacto';
import { actionSheetController } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  private contactos : Observable<Contacto[]>;
  private contactosCollection : AngularFirestoreCollection<Contacto>;
  
  constructor(private asf: AngularFirestore) {
    this.contactosCollection = this.asf.collection<Contacto>('contactos');
    this.contactos = this.contactosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data };
        });
      })
    );  
  }

  crearNuevo(contacto: Contacto): Promise<DocumentReference> {
    console.log(contacto);
    return this.contactosCollection.add(contacto);
  }

getContactos(): Observable<Contacto[]>{
  return this.contactos;
}
borrarContacto(contacto: any){
  this.afs.doc(`contactos/${contacto}`).delete().then(() => {
    console.log('contacto eliminado: ');
  }).cath(err => {
    console.error(err);
  })
  })
}
}
