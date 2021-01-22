import { Injectable } from '@angular/core';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class CapacitorStorageService {

  setObject = async (key: string, value: any) => await Storage.set( { key, value: JSON.stringify(value) } );

  getObject = async (key: string) => {
    const item = await Storage.get({ key: key });
    return JSON.parse(item.value);
  }
  
  setItem = async (key: string, value: any) => await Storage.set( { key, value } );

  getItem = async (key: string) => {
    const item = await Storage.get({ key: key });
    return item.value;
  }
  
  delete  = async (key: string) => await Storage.remove({key});
}
