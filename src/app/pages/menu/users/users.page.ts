import { AddUserComponent } from './add-user/add-user.component';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatabaseService } from 'src/app/shared/services/database.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  items$: Observable<any>;

  constructor(
    private db: DatabaseService,
    private modalController: ModalController,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
    this.onUsers();
  }


  onUsers = () => {
    this.items$ = this.db.getUsers();
  }

  onDelete = async (id: string) => {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: 'Desea Eleminar este usuario?',
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
    });
    await alert.present();
  }

  onEdit = () => console.log('Edit');
  onAdd = async () => {
    const modal = await this.modalController.create({
      component: AddUserComponent
    });
    modal.present();
  }
}
