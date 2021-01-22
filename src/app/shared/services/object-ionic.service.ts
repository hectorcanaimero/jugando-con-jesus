import { Injectable } from '@angular/core';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ObjectIonicService {


  isLoading: boolean = false;

  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private loadingController: LoadingController,
  
    ) { }

  presentLoading = async (duration: number = 5000, message: string = 'Carregando...') => {
    this.isLoading = true;
    return await this.loadingController.create({
      spinner: 'crescent', duration: duration,
      message: message, translucent: true,
    }).then(a => a.present().then(() => { if (!this.isLoading) a.dismiss().then()} ));
  }

  dismissLoading = async () => {
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }

  presentAlert = async (data: any) => {
    const item = await this.alertController.create(data);
    item.present();
  }

  dismissAlert = async () => await this.alertController.dismiss();

  presentToast = async (data: any) => {
    const item  =await this.toastController.create(data);
    item.present();
  }
}
