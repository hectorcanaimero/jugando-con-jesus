import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { TimelinePage } from './timeline.page';
import { TimelinePageRoutingModule } from './timeline-routing.module';
import { AddTimelineComponent } from './add-timeline/add-timeline.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    TimelinePageRoutingModule
  ],
  declarations: [TimelinePage, AddTimelineComponent]
})
export class TimelinePageModule {}
