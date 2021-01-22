import { CapacitorStorageService } from './../../services/capacitor-storage.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() href: string;
  user: any = [];


  constructor(
    private storage: CapacitorStorageService
  ) { }

  ngOnInit() {
    this.storage.getObject('user').then((res) => this.user = res);
  }

}
