import { CapacitorStorageService } from './../../shared/services/capacitor-storage.service';
import { AccessService } from './../../shared/services/access.service';
import { AddUserComponent } from './add-user/add-user.component';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DatabaseService } from 'src/app/shared/services/database.service';
import { ObjectIonicService } from 'src/app/shared/services/object-ionic.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  user: any = [];
  items$: Observable<any>;

  constructor(
    private db: DatabaseService,
    private auth: AccessService,
    private storage: CapacitorStorageService,
    private modalController: ModalController,
    private objectIonicService: ObjectIonicService,
  ) { }

  ngOnInit() {
    this.onUsers();
    this.storage.getObject('user').then((res) => this.user =res);
  }


  onUsers = () => {
    this.items$ = this.db.getUsers();
  }

  onDelete = (id: string) => {
    this.objectIonicService.presentAlert({
      mode: 'ios',
      header: 'Confirmar',
      message: 'Desea Eliminar este usuario?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => blah
        }, {
          text: 'Eliminar',
          handler: () => this.db.deleteUser(id)
        }
      ]
    })
  }

  onLogout = () => this.auth.signOut();

  onEdit = async (item: any) => {
    const modal = await this.modalController.create({
      component: AddUserComponent,
      componentProps: { item }
    });
    modal.present();
  }

  onAdd = async () => {
    const modal = await this.modalController.create({
      component: AddUserComponent
    });
    modal.present();
  }
}
