import { WidgetsModule } from './../../shared/widgets/widgets.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersPage } from './users.page';
import { UsersPageRoutingModule } from './users-routing.module';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    WidgetsModule,
    UsersPageRoutingModule
  ],
  declarations: [UsersPage, AddUserComponent]
})
export class UsersPageModule {}
