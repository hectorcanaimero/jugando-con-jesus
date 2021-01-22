import { CapacitorStorageService } from './../../shared/services/capacitor-storage.service';
import { DatabaseService } from 'src/app/shared/services/database.service';
import { ObjectIonicService } from './../../shared/services/object-ionic.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AccessService } from './../../shared/services/access.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AccessService,
    private db: DatabaseService,
    private storage: CapacitorStorageService,
    private objectIonicService: ObjectIonicService,
  ) { }

  ngOnInit() {
    this.loadForm();
  }

  onSubmit = () => {
    const item = this.form.value;
    this.auth.signIn(item.email, item.password)
    .then(data => this._onAction(data))
    .catch(erro => {
      this.objectIonicService.presentAlert({
        mode: "ios",
        header: 'Algo esta mal!',
        message: 'Es posible que tu email o clave esta errado.',
        buttons: ['OK']
      })
    });
  }

  loadForm = () => {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]  
    });
  }

  private _onAction = (data: any) => {
    this.storage.setItem('token', data.user.uid).then();
    this.db.getUserById(data.user.uid).subscribe((res) => {
      console.log(res);
      this.storage.setObject('user', res).then(data => data);
      this.objectIonicService.presentToast({
        message: `Hola!`,
        duration: 2000
      })
      this.router.navigate(['pages', 'home']);
    });
  }

}
