import { ObjectIonicService } from './../../../shared/services/object-ionic.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ModalController } from '@ionic/angular';
import { timer } from 'rxjs';

import { DatabaseService } from 'src/app/shared/services/database.service';
import { AccessService } from '../../../shared/services/access.service';
import { ObjectHandleService } from '../../../shared/services/object-handle.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {

  @Input() item: any;
  form: FormGroup;


  constructor(
    private fb: FormBuilder,
    private db: DatabaseService,
    private auth: AccessService,
    private modalController: ModalController,
    private objectHandleService: ObjectHandleService,
    private objectIonicService: ObjectIonicService
  ) { }

  ngOnInit() {
    this.loadForm();
    timer(300).subscribe(() => {
      if (this.item) {
        this.form.patchValue({
          key: this.item.key,
          name: this.item.name,
          email: this.item.email,
          phone: this.item.phone,
          role: this.item.role,
          password: 12345789,
        })
      }
    })
  }

  onSubmit = () => {
    if (this.item) this._edit(this.form.value);
    else this._save(this.form.value);
  }

  _save = (data: any) => {
    this.auth.signUp(data.email, data.password).then((res) => {
      delete data.password;
      data.key = res.user.uid;
      data.nickname = this.objectHandleService.retornarSlug(data.name);
      this.db.addUser(data);
      this.modalController.dismiss();
    });
  }

  _edit = (data: any) => {
    delete data.password;
    data.nickname = this.objectHandleService.retornarSlug(data.name);
    this.db.updateUser(data).then(() => {
      this.objectIonicService.presentToast({
        position: top,
        message: `El Usuário ${ data.name } fue actualizado.`,
        duration: 2000
      })
      this.modalController.dismiss();
    });
  }

  loadForm = () => {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(11)]],
      role: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      key: [''],
    });
  }

  onClose = () => this.modalController.dismiss();

}
