import { ApiProvider } from '../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {
  people: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public apiProvider: ApiProvider) {
      this.people = this.apiProvider.getPeople();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeoplePage');
  }

  openDetails(person) {
    this.navCtrl.push('PersonDetailsPage', {person: person});
  }
}
