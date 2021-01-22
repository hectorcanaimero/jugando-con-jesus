import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GruposPage } from './grupos.page';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { GruposPageRoutingModule } from './grupos-routing.module';
import { WidgetsModule } from './../../shared/widgets/widgets.module';
import { AddAlumnosComponent } from './add-alumnos/add-alumnos.component';

@NgModule({
  declarations: [GruposPage, AlumnosComponent, AddAlumnosComponent,],
  imports: [
    IonicModule,
    CommonModule,
    WidgetsModule,
    ReactiveFormsModule,
    GruposPageRoutingModule
  ],
})
export class GruposPageModule {}
