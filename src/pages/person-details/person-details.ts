import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-person-details',
  templateUrl: 'person-details.html',
})
export class PersonDetailsPage {
  person: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.person = this.navParams.get('person')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonDetailsPage');
  }

  goBack() {
    this.navCtrl.pop();
  }

}
