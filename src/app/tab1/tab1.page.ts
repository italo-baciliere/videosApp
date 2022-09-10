import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{

  imagem = '/assets/jurica-koletic.jpg';
  personas = [
    {
      nome: 'Bill',
      url: 'https://www.lance.com.br/files/article_main/uploads/2022/09/07/63189a0c08120.jpeg',
      municipio: 'Centro de Contagem',
      quantidadeVagas: 0,
      score: '3.7'
    },
    {
      nome: 'Karen Lana',
      url: 'https://assets.website-files.com/5e51c674258ffe10d286d30a/5e5355ed4600809f5a8dad51_peep-37.svg',
      municipio: 'Centro de Contagem',
      quantidadeVagas: 2,
      score: '5.0'
    },
    {
      nome: 'Rodolfo Sales',
      url: 'https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535da59588e079598123fc_peep-103.svg',
      municipio: 'Centro de Contagem',
      quantidadeVagas: 4,
      score: '4.5'
    },
    {
      nome: 'Marcos Rodarte',
      url: 'https://assets.website-files.com/5e51c674258ffe10d286d30a/5e532c33f3aa4b390f1bd62f_peep-3.svg',
      municipio: 'Centro de Contagem',
      quantidadeVagas: 4,
      score: '4.0'
    }
  ];

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
        },
      ],
    });

    await alert.present();
  }
}
