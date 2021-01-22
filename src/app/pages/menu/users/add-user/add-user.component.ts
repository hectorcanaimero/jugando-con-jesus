import { AccessService } from './../../../../shared/services/access.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DatabaseService } from 'src/app/shared/services/database.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private db: DatabaseService,
    private auth: AccessService,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.loadForm();
  }

  onSubmit = () => {
    const data = this.form.value;
    this.auth.signUp(data.email, data.password).then((res) => {
      delete data.password;
      data.key = res.user.uid;
      this.db.addUser(data);
      this.modalController.dismiss();
    });
  }

  loadForm = () => {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(11)]],
      role: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onClose = () => this.modalController.dismiss();

}
