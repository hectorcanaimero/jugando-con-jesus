import { CapacitorCameraService } from './../../../shared/services/capacitor-camera.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
const { Camera } = Plugins;

import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent implements OnInit {

  img:  any = [];
  form: FormGroup;


  constructor(
    private fb: FormBuilder,

    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.loadForm();
  }

  loadForm = () => {
    this.form = this.fb.group({
      picture: ['', Validators.required], 
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      apellido: ['', [Validators.required, Validators.minLength(4)]],
      sexo: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      ciudad_nacimiento: ['', [Validators.required, Validators.minLength(4)]],
      representante: ['', [Validators.required, Validators.minLength(4)]],
      telefono: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', Validators.email],
      grupo: ['', Validators.required]
    });
  }


  onClose = () => this.modalController.dismiss();



}
