import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
const { Camera } = Plugins;

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CapacitorCameraService {

  data: any = {
    upload_preset: environment.cloudinary.preset,
    cloud_name: environment.cloudinary.cloud,
    api_key: environment.cloudinary.key
  }

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
  ) { }

  getPicture = async () => {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt
    });
    const items = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    return items;
  }

  uploadImage = (image: any): Observable<any> => {
    this.data.file = image;
    return this.http.post(environment.cloudinary.url, this.data );
  }
  removeImage = (data: string): Observable<any> => this.http.delete(`https://api.cloudinary.com/v1_1/knaimero/image/upload/${data}` );
}
