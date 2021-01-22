import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CapacitorCameraService } from 'src/app/shared/services/capacitor-camera.service';



@Component({
  selector: 'app-add-alumnos',
  templateUrl: './add-alumnos.component.html',
  styleUrls: ['./add-alumnos.component.scss'],
})
export class AddAlumnosComponent implements OnInit {

  // form: FormGroup;
  photo: SafeResourceUrl;

  constructor(
    // private fb: FormBuilder,
    private camera: CapacitorCameraService,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    // this.loadForm()
  }

  onPicture = () => {
    this.camera.getPicture().then((res) => this.photo = res);
  }

  // loadForm = () => {
  //   this.form = this.fb.group({
  //     picture: ['', Validators.required], 
  //     nombre: ['', [Validators.required, Validators.minLength(4)]],
  //     apellido: ['', [Validators.required, Validators.minLength(4)]],
  //     sexo: ['', Validators.required],
  //     fecha_nacimiento: ['', Validators.required],
  //     ciudad_nacimiento: ['', [Validators.required, Validators.minLength(4)]],
  //     representante: ['', [Validators.required, Validators.minLength(4)]],
  //     telefono: ['', [Validators.required, Validators.minLength(4)]],
  //     email: ['', Validators.email],
  //     grupo: ['', Validators.required]
  //   });
  // }

  onClose = () => this.modalController.dismiss();
}
