import { ObjectHandleService } from './../../shared/services/object-handle.service';
import { ObjectIonicService } from './../../shared/services/object-ionic.service';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { DatabaseService } from 'src/app/shared/services/database.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.page.html',
  styleUrls: ['./grupos.page.scss'],
})
export class GruposPage implements OnInit {

  items$: Observable<any[]>;

  constructor(
    private db: DatabaseService,
    private objectIonicService: ObjectIonicService,
    private objectHandleService: ObjectHandleService
  ) { }

  ngOnInit() {
    this.onGrupos();
  }

  onGrupos = () => this.items$ = this.db.getGrupos();

  onAdd = () => {
    this.objectIonicService.presentAlert({
      header: 'Crear un Grupo',
      mode: 'ios',
      inputs:[
        {
          name: 'name',
          type: 'text',
          placeholder: 'Nombre del Grupo'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: res => res
        }, {
          text: 'Ok',
          handler: ({ name }) => this._save(name)
        }
      ]
    })
  }

  onView = (id: any) => console.log(id);
  onDelete = (item: any) => {
    if (item.cant !== 0) {
      this.objectIonicService.presentAlert({
        mode: 'ios',
        header: 'Ops!!!',
        message: `No se puede eliminar este grupo, tiene ${item.cant} alumn@s asociados.`,
        buttons: ['OK']
      })
    } else {
      this.objectIonicService.presentAlert({
        mode: 'ios',
        header: 'Confirmar',
        message: 'Desea Eliminar este grupo?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => blah
          }, {
            text: 'Eliminar',
            handler: () => this.db.deleteUser(item.id)
          }
        ]
      })
    }
  }

  _save = (name: string) => {
    const data = {
      name: name,
      slug: this.objectHandleService.retornarSlug(name),
      cant: 0
    };
    this.db.addGrupo(data).then();
  }
}
