import { CapacitorStorageService } from './../../../shared/services/capacitor-storage.service';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonInput, ModalController } from '@ionic/angular';
import { timer } from 'rxjs';

@Component({
  selector: 'app-add-timeline',
  templateUrl: './add-timeline.component.html',
  styleUrls: ['./add-timeline.component.scss'],
})
export class AddTimelineComponent implements OnInit, AfterViewInit {

  @ViewChild('input') inputElement: IonInput;
  

  user: any = [];

  constructor(
    private modalController: ModalController,
    private storage: CapacitorStorageService,
  ) { }

  ngAfterViewInit() {
    timer(300).subscribe(() => this.inputElement.setFocus());
  }

  ngOnInit() {
    this.storage.getObject('user').then((res) => this.user =res);
  }

  onClose = () => this.modalController.dismiss();

}
