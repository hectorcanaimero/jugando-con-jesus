import { TituloComponent } from './titulo/titulo.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    HeaderComponent,
    TituloComponent,
  ],
  exports: [
    HeaderComponent,
    TituloComponent,
  ],
  entryComponents: [
    HeaderComponent,
    TituloComponent,
  ],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class WidgetsModule { }
